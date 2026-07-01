import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import { projects, type Project } from '../data/content'

function ProjectRow({ project, reversed }: { project: Project; reversed: boolean }) {
  return (
    <FadeIn
      y={40}
      className="grid md:grid-cols-2 gap-8 md:gap-14 items-center"
    >
      {/* Concept art */}
      <div className={reversed ? 'md:order-2' : 'md:order-1'}>
        <div className="rounded-[32px] sm:rounded-[40px] overflow-hidden border border-[#D7E2EA]/10">
          <img
            src={project.image}
            alt={`${project.name} concept illustration`}
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Text */}
      <div className={reversed ? 'md:order-1' : 'md:order-2'}>
        <span
          className="hero-heading block font-black leading-none"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}
        >
          {project.num}
        </span>
        <span className="block text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm mt-3">
          {project.category}
        </span>
        <h3
          className="text-[#D7E2EA] font-medium uppercase leading-tight mt-1"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
        >
          {project.name}
        </h3>
        <p
          className="text-[#D7E2EA]/70 font-light leading-relaxed mt-4 max-w-xl"
          style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
        >
          {project.description}
        </p>
        <div className="mt-7">
          <LiveProjectButton href={project.link} label={project.linkLabel} />
        </div>
      </div>
    </FadeIn>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-28"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Research
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-20 sm:gap-24 md:gap-32">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.num}
            project={project}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}
