import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Box, Layers } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { cadModels, getCadModel } from '../data/cad'

export default function CadDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const model = slug ? getCadModel(slug) : undefined

  if (!model) return <Navigate to="/cad" replace />

  const index = cadModels.findIndex((m) => m.slug === model.slug)
  const prev = cadModels[(index - 1 + cadModels.length) % cadModels.length]
  const next = cadModels[(index + 1) % cadModels.length]
  const TypeIcon = model.type === 'Assembly' ? Layers : Box

  return (
    <div style={{ background: '#0C0C0C' }} className="min-h-screen">
      {/* Minimal nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        <Link
          to="/cad"
          className="inline-flex items-center gap-2 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base transition-opacity duration-200 hover:opacity-70"
        >
          <ArrowLeft size={18} strokeWidth={2} />
          Gallery
        </Link>
        <Link
          to="/"
          className="text-[#D7E2EA]/70 font-medium uppercase tracking-widest text-xs md:text-sm transition-opacity duration-200 hover:opacity-100"
        >
          Pouya Azarandaz
        </Link>
      </nav>

      <main className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10 pb-20">
        {/* Hero: cutout on glow */}
        <FadeIn y={30} className="relative mt-8 sm:mt-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(55% 55% at 50% 50%, rgba(79,138,163,0.20) 0%, rgba(12,12,12,0) 70%)',
            }}
          />
          <img
            src={model.image}
            alt={model.title}
            className="relative mx-auto max-h-[46vh] w-auto max-w-full object-contain"
            style={{ filter: 'drop-shadow(0 22px 44px rgba(0,0,0,0.6))' }}
          />
        </FadeIn>

        {/* Title block */}
        <FadeIn delay={0.1} className="mt-8 sm:mt-10 text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/30 px-3.5 py-1.5 text-xs uppercase tracking-widest text-[#D7E2EA]/80">
              <TypeIcon size={13} strokeWidth={2} />
              {model.type}
            </span>
            <span className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 px-3.5 py-1.5 text-xs uppercase tracking-widest text-[#D7E2EA]/60">
              {model.source}
            </span>
          </div>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 88px)' }}
          >
            {model.title}
          </h1>
        </FadeIn>

        {/* Description + details */}
        <div className="mx-auto mt-10 sm:mt-14 grid max-w-4xl gap-8 md:grid-cols-[1fr_260px] md:gap-12">
          <FadeIn delay={0.15}>
            <p
              className="text-[#D7E2EA]/75 font-light leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
            >
              {model.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {model.techniques.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[#D7E2EA]/8 border border-[#D7E2EA]/15 px-3.5 py-1.5 text-xs sm:text-sm text-[#D7E2EA]/75"
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-[#D7E2EA]/12 p-5 sm:p-6">
              <h2 className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs mb-4">
                Details
              </h2>
              <dl className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#D7E2EA]/45 font-light">Type</dt>
                  <dd className="text-[#D7E2EA] text-right">{model.type}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#D7E2EA]/45 font-light">Software</dt>
                  <dd className="text-[#D7E2EA] text-right">SolidWorks</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#D7E2EA]/45 font-light">Source</dt>
                  <dd className="text-[#D7E2EA] text-right">{model.source}</dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>

        {/* Prev / next */}
        <FadeIn delay={0.1} className="mx-auto mt-16 sm:mt-20 flex max-w-4xl items-stretch justify-between gap-4">
          <Link
            to={`/cad/${prev.slug}`}
            className="group flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-[#D7E2EA]/12 p-4 transition-colors duration-200 hover:border-[#D7E2EA]/35"
          >
            <ArrowLeft size={18} strokeWidth={2} className="shrink-0 text-[#D7E2EA]/60 group-hover:text-[#D7E2EA]" />
            <div className="min-w-0">
              <p className="text-[0.6rem] uppercase tracking-widest text-[#D7E2EA]/40">Previous</p>
              <p className="truncate text-sm sm:text-base text-[#D7E2EA]/80 group-hover:text-[#D7E2EA]">
                {prev.title}
              </p>
            </div>
          </Link>
          <Link
            to={`/cad/${next.slug}`}
            className="group flex min-w-0 flex-1 items-center justify-end gap-3 rounded-2xl border border-[#D7E2EA]/12 p-4 text-right transition-colors duration-200 hover:border-[#D7E2EA]/35"
          >
            <div className="min-w-0">
              <p className="text-[0.6rem] uppercase tracking-widest text-[#D7E2EA]/40">Next</p>
              <p className="truncate text-sm sm:text-base text-[#D7E2EA]/80 group-hover:text-[#D7E2EA]">
                {next.title}
              </p>
            </div>
            <ArrowRight size={18} strokeWidth={2} className="shrink-0 text-[#D7E2EA]/60 group-hover:text-[#D7E2EA]" />
          </Link>
        </FadeIn>
      </main>
    </div>
  )
}
