import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import FadeIn from '../components/FadeIn'

// Drop the group photo at /public/teaching.jpg and it appears automatically.
const TEACHING_PHOTO = '/teaching.jpg'

export default function TeachingSection() {
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <section
      id="teaching"
      className="relative overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="relative min-h-[70vh] flex items-end">
        {/* Background photo (falls back to a gradient if not present yet) */}
        {hasPhoto ? (
          <img
            src={TEACHING_PHOTO}
            alt="Teaching assistant group — Politecnico di Torino"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={() => setHasPhoto(false)}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(120% 120% at 50% 0%, #1b2733 0%, #0C0C0C 70%)',
            }}
          />
        )}

        {/* Readability overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.15) 35%, rgba(12,12,12,0.92) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-10 pb-10 sm:pb-14 md:pb-16 pt-24">
          <FadeIn y={30} className="max-w-3xl">
            <div className="flex items-center gap-3 text-[#D7E2EA]/70 uppercase tracking-widest text-xs sm:text-sm mb-3">
              <GraduationCap size={20} strokeWidth={1.5} />
              <span>Teaching · 2024–2025</span>
            </div>
            <h2
              className="text-[#D7E2EA] font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              Teaching Assistant
            </h2>
            <p
              className="text-[#D7E2EA] font-medium uppercase tracking-wide mt-2"
              style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)' }}
            >
              Fluid Machinery · Politecnico di Torino
            </p>
            <p
              className="text-[#D7E2EA]/80 font-light leading-relaxed mt-4 max-w-2xl"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}
            >
              Supported 60+ undergraduate students across laboratory sessions and
              problem-solving tutorials in fluid machinery and engineering
              thermodynamics, in an international setting.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
