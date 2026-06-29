import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="container-x scroll-mt-24 py-24">
      <SectionHeading index="02" eyebrow="Skills" title="Capabilities" sub="A toolkit spanning design, simulation, manufacturing, and research." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
            className="glass card-hover rounded-2xl p-6"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg font-semibold text-silver">{s.group}</h3>
              <span className="font-mono text-[11px] uppercase tracking-wider text-cyan/70">{s.tag}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span key={it} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
