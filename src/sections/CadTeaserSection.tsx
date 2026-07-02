import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import TiltCard from '../components/TiltCard'

/** Compact teaser card linking to the /cad gallery page. */
export default function CadTeaserSection() {
  return (
    <section
      id="cad"
      className="px-5 sm:px-8 md:px-10 py-14 sm:py-16 md:py-20"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40} className="mx-auto max-w-6xl">
        <TiltCard maxTilt={3} scale={1.008}>
          <Link
            to="/cad"
            className="group relative flex flex-col overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/12 bg-[#11151b] transition-colors duration-300 hover:border-[#D7E2EA]/35 md:flex-row md:items-stretch"
          >
            {/* glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 80% at 75% 45%, rgba(79,138,163,0.18) 0%, rgba(17,21,27,0) 70%)',
              }}
            />

            {/* text */}
            <div
              className="relative flex flex-col justify-center gap-3 p-7 sm:p-9 md:w-[45%] md:p-12"
              style={{ transform: 'translateZ(20px)' }}
            >
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm">
                SolidWorks
              </span>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              >
                CAD Portfolio
              </h2>
              <p className="text-[#D7E2EA]/65 font-light leading-relaxed text-sm sm:text-base max-w-sm">
                13 modelled builds — working assemblies, timed challenges
                (Model Mania, TooTallToby), and coursework parts.
              </p>
              <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-7 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 group-hover:bg-[#D7E2EA]/10">
                View Gallery
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </div>

            {/* cutout collage */}
            <div
              className="relative h-56 sm:h-64 md:h-auto md:min-h-[320px] md:w-[55%]"
              style={{ transform: 'translateZ(34px)' }}
            >
              <img
                src="/cad/ventilated-guard-shell.webp"
                alt="Ventilated guard shell CAD model"
                loading="lazy"
                className="absolute left-[6%] top-[16%] w-[44%] rotate-[-6deg] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 16px 30px rgba(0,0,0,0.55))' }}
              />
              <img
                src="/cad/model-mania-2010.webp"
                alt="Model Mania 2010 CAD model"
                loading="lazy"
                className="absolute right-[4%] top-[8%] w-[46%] rotate-[7deg] transition-transform duration-500 group-hover:rotate-[9deg] group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 16px 30px rgba(0,0,0,0.55))' }}
              />
              <img
                src="/cad/locking-pliers.webp"
                alt="Locking pliers CAD assembly"
                loading="lazy"
                className="absolute bottom-[6%] left-[28%] w-[42%] rotate-[3deg] transition-transform duration-500 group-hover:rotate-[1deg] group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 16px 30px rgba(0,0,0,0.55))' }}
              />
            </div>
          </Link>
        </TiltCard>
      </FadeIn>
    </section>
  )
}
