import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import TiltCard from '../components/TiltCard'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { cadModels, type CadModel } from '../data/cad'

const sizeClasses: Record<CadModel['size'], string> = {
  lg: 'col-span-2 row-span-2',
  wide: 'col-span-2 row-span-1',
  sm: 'col-span-1 row-span-1',
}

function Tile({ model, index }: { model: CadModel; index: number }) {
  return (
    <FadeIn delay={(index % 4) * 0.06} className={sizeClasses[model.size]}>
      <TiltCard className="h-full w-full" maxTilt={6}>
        <Link
          to={`/cad/${model.slug}`}
          className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-[#D7E2EA]/10 bg-[#11151b] transition-colors duration-300 hover:border-[#D7E2EA]/35"
        >
          {/* glow backdrop */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(75% 60% at 50% 42%, rgba(79,138,163,0.16) 0%, rgba(17,21,27,0) 70%)',
            }}
          />

          {/* model cutout — floats above the card plane while tilting */}
          <div
            className="relative flex flex-1 items-center justify-center p-5 sm:p-7 min-h-0"
            style={{ transform: 'translateZ(34px)' }}
          >
            <img
              src={model.image}
              alt={model.title}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.05]"
              style={{ filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.55))' }}
            />
          </div>

          {/* label */}
          <div
            className="relative flex items-end justify-between gap-3 p-4 sm:p-5 pt-0"
            style={{ transform: 'translateZ(16px)' }}
          >
            <div className="min-w-0">
              <p className="truncate text-[#D7E2EA] font-medium text-sm sm:text-base">
                {model.title}
              </p>
              <p className="text-[#D7E2EA]/45 font-light uppercase tracking-widest text-[0.6rem] sm:text-xs mt-0.5">
                {model.type}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[0.6rem] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/60 transition-colors duration-300 group-hover:border-[#D7E2EA]/60 group-hover:text-[#D7E2EA]">
              View
            </span>
          </div>
        </Link>
      </TiltCard>
    </FadeIn>
  )
}

export default function CadGalleryPage() {
  useDocumentTitle('CAD Portfolio — Pouya Azarandaz')
  return (
    <div style={{ background: '#0C0C0C' }} className="min-h-screen">
      {/* Minimal nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base transition-opacity duration-200 hover:opacity-70"
        >
          <ArrowLeft size={18} strokeWidth={2} />
          Home
        </Link>
        <Link
          to="/"
          className="text-[#D7E2EA]/70 font-medium uppercase tracking-widest text-xs md:text-sm transition-opacity duration-200 hover:opacity-100"
        >
          Pouya Azarandaz
        </Link>
      </nav>

      <header className="px-5 sm:px-8 md:px-10 pt-12 sm:pt-16 pb-10 sm:pb-14 text-center">
        <FadeIn
          as="h1"
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
        >
          CAD Portfolio
        </FadeIn>
        <FadeIn
          delay={0.15}
          className="mx-auto mt-5 max-w-xl text-[#D7E2EA]/60 font-light"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
        >
          Selected SolidWorks builds — assemblies, timed modelling challenges,
          and coursework parts. Click any model to see how it was made.
        </FadeIn>
      </header>

      <main className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 pb-24">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 [grid-auto-flow:dense]"
          style={{ gridAutoRows: 'minmax(170px, 21vw)' }}
        >
          {cadModels.map((model, i) => (
            <Tile key={model.slug} model={model} index={i} />
          ))}
        </div>
      </main>
    </div>
  )
}
