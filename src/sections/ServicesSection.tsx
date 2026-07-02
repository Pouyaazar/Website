import FadeIn from '../components/FadeIn'
import { services, skillGroups } from '../data/content'

const BORDER = '1px solid rgba(12, 12, 12, 0.15)'

export default function ServicesSection() {
  return (
    <section
      id="expertise"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <h2
        className="text-center font-black uppercase mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Expertise
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex items-start gap-4 sm:gap-8 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: i === 0 ? BORDER : 'none',
              borderBottom: BORDER,
            }}
          >
            <span
              className="font-black leading-none"
              style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.num}
            </span>

            <div className="flex flex-col gap-3 pt-1 sm:pt-2">
              <h3
                className="font-medium uppercase"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{
                  color: '#0C0C0C',
                  opacity: 0.6,
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}

        {/* Skills & tools chip strip */}
        <FadeIn delay={0.1} className="pt-14 sm:pt-16 md:pt-20">
          <h3
            className="font-medium uppercase tracking-widest mb-8 sm:mb-10"
            style={{ color: '#0C0C0C', opacity: 0.45, fontSize: 'clamp(0.8rem, 1.4vw, 1rem)' }}
          >
            Toolbox
          </h3>
          <div className="flex flex-col gap-7 sm:gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="grid gap-3 sm:grid-cols-[130px_1fr] sm:gap-6 items-baseline"
              >
                <span
                  className="font-medium uppercase tracking-widest text-xs sm:text-sm"
                  style={{ color: '#0C0C0C', opacity: 0.55 }}
                >
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-[#0C0C0C] hover:text-white"
                      style={{
                        color: '#0C0C0C',
                        borderColor: 'rgba(12, 12, 12, 0.25)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
