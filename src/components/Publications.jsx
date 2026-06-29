import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { publications } from '../data/content'

export default function Publications() {
  return (
    <section id="publications" className="container-x scroll-mt-24 py-24">
      <SectionHeading index="07" eyebrow="Publications" title="Papers & manuscripts" />

      <div className="divide-y divide-hair overflow-hidden rounded-2xl border border-hair bg-panel/40">
        {publications.map((pub, i) => (
          <motion.a
            key={i}
            href={pub.link}
            target={pub.link?.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex flex-col gap-2 p-6 transition-colors hover:bg-base/40 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                {pub.status && (
                  <span
                    className={`rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      pub.status === 'Published'
                        ? 'bg-cyan/15 text-cyan'
                        : pub.status === 'Protocol registered'
                        ? 'bg-electric/15 text-electric'
                        : 'bg-hair text-muted'
                    }`}
                  >
                    {pub.status}
                  </span>
                )}
                <span className="font-mono text-xs text-muted/80">{pub.year}</span>
              </div>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug text-silver group-hover:text-cyan">
                {pub.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{pub.authors}</p>
              <p className="mt-1 font-mono text-xs text-muted/80">{pub.venue}</p>
            </div>
            <span className="shrink-0 font-mono text-xs text-cyan/70 group-hover:text-cyan">
              view →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
