import { useRef, useState, type ReactNode } from 'react'

type TiltCardProps = {
  children: ReactNode
  className?: string
  /** Maximum tilt angle in degrees (kept small for subtlety). */
  maxTilt?: number
  /** Scale applied while hovered. */
  scale?: number
}

/**
 * Subtle 3D tilt-on-hover: the card rotates toward the cursor with a
 * perspective transform and eases back to flat on leave.
 * Children can use translateZ (via inline style) for a parallax pop —
 * transformStyle is preserve-3d.
 */
export default function TiltCard({
  children,
  className,
  maxTilt = 6,
  scale = 1.015,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('perspective(900px)')
  const [transition, setTransition] = useState('transform 0.4s ease-out')

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTransition('transform 0.08s ease-out')
    setTransform(
      `perspective(900px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(
        px * maxTilt
      ).toFixed(2)}deg) scale(${scale})`,
    )
  }

  const handleLeave = () => {
    setTransition('transform 0.5s ease-out')
    setTransform('perspective(900px)')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transform,
        transition,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
