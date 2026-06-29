import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { timeline } from '../data/content'

export default function Timeline() {
  return (
    <section id="timeline" className="container-x scroll-mt-24 py-24">
      <SectionHeading index="05" eyebrow="Experience & Education" title="Path" />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-hair sm:left-[9px]" aria-hidden="true" />

        <div className="space-y-8">
          {timeline.map((item, i) => {
            const isEdu = item.type === 'education'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="relative pl-8 sm:pl-12"
              >
                <span
                  className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 sm:left-0.5 ${
                    isEdu ? 'border-cyan bg-base' : 'border-electric bg-base'
                  }`}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-wider ${
                      isEdu ? 'text-cyan/80' : 'text-electric'
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="font-mono text-xs text-muted">{item.period}</span>
                </div>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-silver">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-silver/80">{item.org}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
