import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { certificates, type Certificate } from '../data/content'

export default function CertificationsSection() {
  const [active, setActive] = useState<Certificate | null>(null)

  // Close the lightbox on Escape and lock body scroll while open.
  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section
      id="certifications"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-4"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Certifications
      </FadeIn>

      <p className="text-center text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm mb-12 sm:mb-16">
        Coursera · Ansys · MathWorks · Dassault · Elsevier
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {certificates.map((cert, i) => (
          <FadeIn key={cert.src} delay={(i % 3) * 0.08}>
            <button
              type="button"
              onClick={() => setActive(cert)}
              className="group block w-full text-left rounded-2xl overflow-hidden border border-[#D7E2EA]/15 bg-white/[0.02] transition-all duration-300 hover:border-[#D7E2EA]/40 hover:-translate-y-1"
            >
              <div className="overflow-hidden bg-white">
                <img
                  src={cert.src}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-[#D7E2EA] font-medium leading-snug text-sm sm:text-base">
                  {cert.title}
                </h3>
                <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm mt-1 uppercase tracking-wide">
                  {cert.issuer}
                </p>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(5,5,7,0.92)' }}
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-5 right-5 text-[#D7E2EA] hover:opacity-70 transition-opacity"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          <figure
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <figcaption className="text-center mt-4">
              <span className="text-[#D7E2EA] font-medium">{active.title}</span>
              <span className="text-[#D7E2EA]/50 font-light"> — {active.issuer}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
