import { useMemo, type CSSProperties, type ReactNode } from 'react'
import { motion } from 'framer-motion'

type FadeInProps = {
  children: ReactNode
  /** The HTML element to render (e.g. 'div', 'h1', 'nav', 'p'). */
  as?: keyof HTMLElementTagNameMap
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  style?: CSSProperties
}

/**
 * Scroll-triggered fade/slide-in wrapper.
 * Animates once when it enters the viewport.
 */
export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  // motion.create() builds a motion component for the requested tag.
  // Memoized so we don't recreate (and remount) the component on every render.
  const MotionTag = useMemo(
    () => motion.create(as) as React.ComponentType<any>,
    [as],
  )

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
