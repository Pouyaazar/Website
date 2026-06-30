import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { publications } from '../data/content'

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-12 sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Publications
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        {publications.map((pub, i) => (
          <FadeIn
            key={pub.title}
            delay={i * 0.06}
            className="flex flex-col sm:flex-row gap-3 sm:gap-8 py-6 sm:py-8 border-t border-[#D7E2EA]/15 last:border-b"
          >
            <div className="sm:w-40 shrink-0">
              <span className="inline-block rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/80 uppercase tracking-widest text-[0.65rem] sm:text-xs px-3 py-1">
                {pub.type}
              </span>
            </div>

            <div className="flex-1">
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-start gap-1.5 text-[#D7E2EA] font-medium leading-snug text-base sm:text-lg hover:text-white transition-colors"
                >
                  <span className="underline decoration-[#D7E2EA]/25 underline-offset-4 group-hover/link:decoration-[#D7E2EA]">
                    {pub.title}
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="mt-1 shrink-0 opacity-60 group-hover/link:opacity-100"
                  />
                </a>
              ) : (
                <h3 className="text-[#D7E2EA] font-medium leading-snug text-base sm:text-lg">
                  {pub.title}
                </h3>
              )}
              <p className="text-[#D7E2EA]/70 font-light italic mt-1 text-sm sm:text-base">
                {pub.venue}
              </p>
              {pub.meta && (
                <p className="text-[#D7E2EA]/45 font-light mt-1 text-xs sm:text-sm">
                  {pub.meta}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
