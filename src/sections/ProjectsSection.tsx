import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import { projects, type Project } from '../data/content'

const CARD_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

type CardProps = {
  project: Project
  index: number
  totalCards: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

function Card({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
}: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="sticky top-24 md:top-32 h-[85vh] flex items-start justify-center">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          background: '#0C0C0C',
        }}
        className={`relative w-full max-w-6xl border-2 border-[#D7E2EA] ${CARD_RADIUS} p-4 sm:p-6 md:p-8`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-4 sm:mb-6">
          <span
            className="font-black leading-none text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.num}
          </span>

          <div className="flex flex-col">
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
              {project.category}
            </span>
            <span
              className="font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              {project.name}
            </span>
          </div>

          <div className="ml-auto">
            <LiveProjectButton href={project.link} label={project.linkLabel} />
          </div>
        </div>

        {/* Description */}
        <p className="text-[#D7E2EA]/70 font-light leading-relaxed mb-5 sm:mb-7 max-w-3xl text-sm sm:text-base md:text-lg">
          {project.description}
        </p>

        {/* Bottom row — image grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left column (40%) — two stacked images */}
          <div
            className="flex flex-col gap-3 sm:gap-4"
            style={{ width: '40%' }}
          >
            <img
              src={project.col1[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`w-full object-cover ${CARD_RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`w-full object-cover ${CARD_RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right column (60%) — one tall image */}
          <div style={{ width: '60%' }}>
            <img
              src={project.col2}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className={`w-full h-full object-cover ${CARD_RADIUS}`}
            />
          </div>
        </div>
      </motion.div>

      {/* index/totalCards intentionally available for future tweaks */}
      <span className="hidden">{`${index + 1}/${totalCards}`}</span>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const totalCards = projects.length

  return (
    <section
      id="projects"
      className={`relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24`}
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-12 sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Research
      </FadeIn>

      <div ref={containerRef} className="relative">
        {projects.map((project, index) => {
          // Cards further down the stack shrink less; the last stays at 1.
          const targetScale = 1 - (totalCards - 1 - index) * 0.03
          const range: [number, number] = [index / totalCards, 1]
          return (
            <Card
              key={project.num}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}
