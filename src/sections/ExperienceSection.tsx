import FadeIn from '../components/FadeIn'
import { experience, education, type TimelineEntry } from '../data/content'

function Timeline({
  label,
  entries,
}: {
  label: string
  entries: TimelineEntry[]
}) {
  return (
    <div>
      <h3 className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base mb-8 sm:mb-10">
        {label}
      </h3>
      <div className="flex flex-col">
        {entries.map((entry, i) => (
          <FadeIn
            key={entry.title}
            delay={i * 0.08}
            className="relative pl-7 pb-9 last:pb-0 border-l border-[#D7E2EA]/15 last:border-l-0"
          >
            {/* dot */}
            <span className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D7E2EA]" />
            {/* keep the rail visible on the last item too */}
            {i === entries.length - 1 && (
              <span className="absolute left-0 top-1.5 bottom-0 w-px bg-[#D7E2EA]/15 -z-10" />
            )}

            <p className="text-[#D7E2EA]/50 uppercase tracking-wider text-xs sm:text-sm">
              {entry.period}
            </p>
            <h4 className="text-[#D7E2EA] font-semibold leading-snug mt-1 text-base sm:text-lg">
              {entry.title}
            </h4>
            <p className="text-[#D7E2EA]/70 font-light text-sm sm:text-base">
              {entry.org}
            </p>
            <ul className="mt-3 space-y-2">
              {entry.points.map((pt, j) => (
                <li
                  key={j}
                  className="text-[#D7E2EA]/60 font-light leading-relaxed text-sm sm:text-[0.95rem] before:content-['—'] before:mr-2 before:text-[#D7E2EA]/40"
                >
                  {pt}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-14 sm:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <Timeline label="Professional Experience" entries={experience} />
        <Timeline label="Education" entries={education} />
      </div>
    </section>
  )
}
