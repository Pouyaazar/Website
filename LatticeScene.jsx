import { useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import * as isosurface from 'isosurface'

const PI = Math.PI

// Implicit fields for triply periodic minimal surfaces (TPMS).
const FIELDS = {
  gyroid: (x, y, z) =>
    Math.sin(x) * Math.cos(y) + Math.sin(y) * Math.cos(z) + Math.sin(z) * Math.cos(x),
  schwarz: (x, y, z) => Math.cos(x) + Math.cos(y) + Math.cos(z),
}

// Build a centred, scaled THREE.BufferGeometry from a TPMS field.
function buildTPMS(kind, { res = 48, periods = 1.6, target = 3.2 } = {}) {
  const field = FIELDS[kind]
  const lo = [-PI * periods, -PI * periods, -PI * periods]
  const hi = [PI * periods, PI * periods, PI * periods]
  const mesh = isosurface.surfaceNets([res, res, res], field, [lo, hi])

  // Center + uniform scale to a known size.
  const pos = mesh.positions
  const min = [Infinity, Infinity, Infinity]
  const max = [-Infinity, -Infinity, -Infinity]
  for (const p of pos) {
    for (let i = 0; i < 3; i++) {
      if (p[i] < min[i]) min[i] = p[i]
      if (p[i] > max[i]) max[i] = p[i]
    }
  }
  const center = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2]
  const extent = Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2]) || 1
  const scale = target / extent

  const vertices = new Float32Array(pos.length * 3)
  for (let i = 0; i < pos.length; i++) {
    vertices[i * 3] = (pos[i][0] - center[0]) * scale
    vertices[i * 3 + 1] = (pos[i][1] - center[1]) * scale
    vertices[i * 3 + 2] = (pos[i][2] - center[2]) * scale
  }

  // surfaceNets may return triangles or quads — triangulate either way.
  const indices = []
  for (const c of mesh.cells) {
    if (c.length === 3) {
      indices.push(c[0], c[1], c[2])
    } else if (c.length === 4) {
      indices.push(c[0], c[1], c[2], c[0], c[2], c[3])
    }
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  geo.setIndex(indices)
  geo.computeVertexNormals()
  return geo
}

function reducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

// ---- TPMS surface (gyroid / schwarz) ----
function TPMSSurface({ kind }) {
  const geometry = useMemo(() => buildTPMS(kind), [kind])
  useLayoutEffect(() => () => geometry.dispose(), [geometry])

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        color="#aeb9c6"
        metalness={0.96}
        roughness={0.26}
        side={THREE.DoubleSide}
        emissive="#0c2b3a"
        emissiveIntensity={0.35}
      />
    </mesh>
  )
}

// ---- Cubic strut-and-node lattice ----
function useLatticeData(nodesPerAxis = 4, spacing = 1) {
  return useMemo(() => {
    const offset = ((nodesPerAxis - 1) * spacing) / 2
    const coord = (i) => i * spacing - offset
    const nodes = []
    const edges = []
    for (let i = 0; i < nodesPerAxis; i++)
      for (let j = 0; j < nodesPerAxis; j++)
        for (let k = 0; k < nodesPerAxis; k++) {
          nodes.push([coord(i), coord(j), coord(k)])
          if (i < nodesPerAxis - 1) edges.push({ pos: [coord(i) + spacing / 2, coord(j), coord(k)], axis: 'x' })
          if (j < nodesPerAxis - 1) edges.push({ pos: [coord(i), coord(j) + spacing / 2, coord(k)], axis: 'y' })
          if (k < nodesPerAxis - 1) edges.push({ pos: [coord(i), coord(j), coord(k) + spacing / 2], axis: 'z' })
        }
    return { nodes, edges, length: spacing }
  }, [nodesPerAxis, spacing])
}

function Lattice() {
  const nodeMesh = useRef()
  const strutMesh = useRef()
  const { nodes, edges, length } = useLatticeData(4, 1.05)

  useLayoutEffect(() => {
    const d = new THREE.Object3D()
    nodes.forEach((p, i) => {
      d.position.set(p[0], p[1], p[2])
      d.rotation.set(0, 0, 0)
      d.scale.set(1, 1, 1)
      d.updateMatrix()
      nodeMesh.current.setMatrixAt(i, d.matrix)
    })
    nodeMesh.current.instanceMatrix.needsUpdate = true
  }, [nodes])

  useLayoutEffect(() => {
    const d = new THREE.Object3D()
    edges.forEach((e, i) => {
      d.position.set(e.pos[0], e.pos[1], e.pos[2])
      d.rotation.set(0, 0, 0)
      if (e.axis === 'x') d.rotation.z = Math.PI / 2
      if (e.axis === 'z') d.rotation.x = Math.PI / 2
      d.scale.set(1, length, 1)
      d.updateMatrix()
      strutMesh.current.setMatrixAt(i, d.matrix)
    })
    strutMesh.current.instanceMatrix.needsUpdate = true
  }, [edges, length])

  return (
    <group>
      <instancedMesh ref={strutMesh} args={[undefined, undefined, edges.length]}>
        <cylinderGeometry args={[0.036, 0.036, 1, 8]} />
        <meshStandardMaterial color="#9fb3c8" metalness={0.95} roughness={0.28} />
      </instancedMesh>
      <instancedMesh ref={nodeMesh} args={[undefined, undefined, nodes.length]}>
        <icosahedronGeometry args={[0.078, 1]} />
        <meshStandardMaterial color="#e6edf3" emissive="#38e1ff" emissiveIntensity={0.25} metalness={0.95} roughness={0.28} />
      </instancedMesh>
    </group>
  )
}

function Model({ mode }) {
  const group = useRef()
  const slow = reducedMotion()
  useFrame((_, delta) => {
    if (group.current && !slow) group.current.rotation.y += delta * 0.12
  })
  return (
    <group ref={group}>
      {mode === 'lattice' ? <Lattice /> : <TPMSSurface kind={mode} />}
    </group>
  )
}

export default function LatticeScene({ mode = 'gyroid' }) {
  const slow = reducedMotion()
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <fog attach="fog" args={['#070A0F', 6.5, 14]} />
      <ambientLight intensity={0.38} />
      <directionalLight position={[5, 6, 4]} intensity={1.15} color="#ffffff" />
      <pointLight position={[-5, -2, 3]} intensity={65} color="#38e1ff" distance={22} />
      <pointLight position={[4, -4, -3]} intensity={48} color="#4c7dff" distance={22} />
      <Model mode={mode} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate={!slow}
        autoRotateSpeed={0.9}
        rotateSpeed={0.6}
      />
    </Canvas>
  )
}
