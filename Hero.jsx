import { Suspense, lazy, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, cvFile } from '../data/content'
import { webglAvailable } from '../utils/webgl'
import WebGLFallback from './WebGLFallback'

const LatticeScene = lazy(() => import('./LatticeScene'))

const MODES = [
  { id: 'gyroid', label: 'Gyroid' },
  { id: 'schwarz', label: 'Schwarz-P' },
  { id: 'lattice', label: 'Lattice' },
]

export default function Hero() {
  const [canRender3D, setCanRender3D] = useState(false)
  const [mode, setMode] = useState('gyroid')

  useEffect(() => {
    setCanRender3D(webglAvailable())
  }, [])

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-16">
      <div className="container-x grid min-h-[calc(100svh-4rem)] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-4">
        {/* Left: text */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {'// available for engineering & research roles'}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 font-mono text-sm text-cyan/90 sm:text-base"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href={cvFile} download className="btn-primary">
              Download CV
            </a>
            <a href="#projects" className="btn-ghost">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right: 3D viewport */}
        <div className="relative order-1 h-[44vh] w-full lg:order-2 lg:h-[78vh]">
          {canRender3D ? (
            <>
              <Suspense fallback={<WebGLFallback />}>
                <LatticeScene mode={mode} />
              </Suspense>

              {/* CAD-viewport HUD */}
              <div className="pointer-events-none absolute inset-0 hidden select-none sm:block">
                <span className="absolute left-1 top-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan/70">
                  TPMS // {mode === 'lattice' ? 'cubic lattice' : mode}
                </span>
                <span className="absolute right-1 top-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70">
                  L-PBF · AlSi10Mg
                </span>
                <span className="absolute bottom-1 right-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/50">
                  drag to rotate
                </span>
              </div>

              {/* Geometry switcher */}
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 rounded-full border border-hair bg-base/70 p-1 backdrop-blur-md">
                {MODES.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    className={`rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                      mode === m.id ? 'bg-cyan text-base' : 'text-muted hover:text-silver'
                    }`}
                    aria-pressed={mode === m.id}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <WebGLFallback />
          )}
        </div>
      </div>
    </section>
  )
}
