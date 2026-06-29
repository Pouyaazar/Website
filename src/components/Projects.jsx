import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="container-x scroll-mt-24 py-24">
      <SectionHeading index="03" eyebrow="Projects" title="Selected work" sub="Design, manufacturing, and simulation projects across metal additive manufacturing." />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="glass card-hover group flex flex-col rounded-2xl p-6"
          >
            <span className="font-mono text-[11px] text-muted">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-silver">
              {p.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-silver"
            >
              View details <ArrowIcon />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
