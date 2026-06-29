import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { research } from '../data/content'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Research() {
  return (
    <section id="research" className="container-x scroll-mt-24 py-24">
      <SectionHeading index="04" eyebrow="Thesis & Research" title="Research" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="glass overflow-hidden rounded-2xl"
      >
        <div className="border-b border-hair bg-base/40 px-6 py-4 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-wider text-cyan/70">
            {research.field} · {research.institution}
          </p>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold leading-snug text-silver">
              {research.thesisTitle}
            </h3>
            <p className="mt-4 leading-relaxed text-muted">{research.summary}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Highlights</p>
            <ul className="mt-3 space-y-3">
              {research.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-silver/90">
                  <span className="mt-0.5 text-cyan">
                    <CheckIcon />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Active research — scoping review */}
      {research.active && (
        <motion.a
          href={research.active.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass card-hover group mt-4 flex flex-col gap-3 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              {research.active.label}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-silver group-hover:text-cyan">
              {research.active.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{research.active.text}</p>
          </div>
          <span className="shrink-0 font-mono text-xs text-cyan/80">
            DOI {research.active.doi} →
          </span>
        </motion.a>
      )}
    </section>
  )
}
