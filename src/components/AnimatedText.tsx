import { Fragment, useRef, type CSSProperties } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

type CharProps = {
  char: string
  range: [number, number]
  progress: MotionValue<number>
}

/**
 * One glyph: an invisible placeholder reserves layout space while an
 * absolutely-positioned span fades from 0.2 -> 1 over its scroll range.
 */
function Char({ char, range, progress }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span
        style={{ position: 'absolute', left: 0, top: 0, opacity }}
      >
        {char}
      </motion.span>
    </span>
  )
}

type AnimatedTextProps = {
  text: string
  className?: string
  style?: CSSProperties
}

/**
 * Character-by-character scroll reveal. Words stay intact (wrap only at
 * spaces) while each character lights up as the paragraph scrolls through.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  const totalChars = words.reduce((sum, w) => sum + w.length, 0)

  let charIndex = 0

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span style={{ display: 'inline-block' }}>
            {word.split('').map((char) => {
              const i = charIndex++
              const start = i / totalChars
              const end = (i + 1) / totalChars
              return (
                <Char
                  key={i}
                  char={char}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              )
            })}
          </span>
          {wi < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </p>
  )
}
