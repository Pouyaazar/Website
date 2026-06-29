import { motion } from 'framer-motion'

// G-code-style section label + large display heading.
export default function SectionHeading({ index, eyebrow, title, sub }) {
  return (
    <div className="mb-10 sm:mb-14">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4 }}
        className="eyebrow"
      >
        {`// ${index} — ${eyebrow}`}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-silver sm:text-4xl"
      >
        {title}
      </motion.h2>
      {sub && <p className="mt-3 max-w-2xl text-muted">{sub}</p>}
    </div>
  )
}
