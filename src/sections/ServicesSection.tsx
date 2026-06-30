import FadeIn from '../components/FadeIn'
import { services } from '../data/content'

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
      </div>
    </section>
  )
}
