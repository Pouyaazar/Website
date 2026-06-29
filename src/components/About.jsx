import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { about, profile, metrics, languages } from '../data/content'

export default function About() {
  return (
    <section id="about" className="container-x scroll-mt-24 py-24">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Engineer at the intersection of design, manufacturing and simulation"
      />

      <div className="grid gap-10 lg:grid-cols-5">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="relative mx-auto max-w-xs lg:max-w-none">
            {/* glow */}
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-cyan/20 via-electric/10 to-transparent blur-2xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-2xl border border-hair bg-panel">
              <img
                src={profile.photo}
                alt={profile.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="flex items-center justify-between border-t border-hair px-4 py-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-cyan/80">
                  {profile.name}
                </span>
                <span className="font-mono text-[11px] text-muted">Torino, IT</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-5 flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l} className="chip">
                {l}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bio + metrics */}
        <div className="lg:col-span-3">
          <div className="space-y-5">
            {about.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="text-base leading-relaxed text-muted sm:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-xl p-4"
              >
                <p className="font-display text-xl font-semibold text-silver sm:text-2xl">{m.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-wider text-muted">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
