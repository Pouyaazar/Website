import {
  Mail,
  Linkedin,
  BookOpen,
  MapPin,
  Download,
  GraduationCap,
  Fingerprint,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'

// Fill these in once the profiles exist — empty string hides the link.
const GOOGLE_SCHOLAR_URL = ''
const ORCID_URL = ''

const links = [
  {
    icon: Mail,
    label: 'pouyaazarandaz@gmail.com',
    href: 'mailto:pouyaazarandaz@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/pouyaazarandaz',
    href: 'https://www.linkedin.com/in/pouyaazarandaz',
  },
  {
    icon: BookOpen,
    label: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Pouya-Azarandaz',
  },
  {
    icon: GraduationCap,
    label: 'Google Scholar',
    href: GOOGLE_SCHOLAR_URL || undefined,
    hideIfMissing: true,
  },
  {
    icon: Fingerprint,
    label: 'ORCID',
    href: ORCID_URL || undefined,
    hideIfMissing: true,
  },
  {
    icon: MapPin,
    label: 'Torino, Italy',
    href: undefined as string | undefined,
  },
].filter((l) => !('hideIfMissing' in l && l.hideIfMissing && !l.href))

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Get in touch
      </FadeIn>

      <FadeIn
        delay={0.1}
        className="text-center text-[#D7E2EA]/70 font-light max-w-2xl mx-auto mt-6 mb-12 sm:mb-16"
        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
      >
        Open to doctoral positions in additive manufacturing, porous materials,
        and structured sorbents. Let&apos;s talk.
      </FadeIn>

      {/* CTAs */}
      <FadeIn delay={0.2} className="flex flex-wrap items-center justify-center gap-4 mb-14 sm:mb-16">
        <a
          href="mailto:pouyaazarandaz@gmail.com"
          className="inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm px-8 py-3.5 sm:px-10 sm:py-4 transition-transform duration-200 hover:scale-[1.03]"
          style={{
            background:
              'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow:
              '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            outline: '2px solid #ffffff',
            outlineOffset: '-3px',
          }}
        >
          <Mail size={18} strokeWidth={2} />
          Email Me
        </a>

        <a
          href="/Pouya_Azarandaz_CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm px-8 py-3.5 sm:px-10 sm:py-4 transition-colors duration-200 hover:bg-[#D7E2EA]/10"
        >
          <Download size={18} strokeWidth={2} />
          Download CV
        </a>
      </FadeIn>

      {/* Link row */}
      <FadeIn
        delay={0.3}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[#D7E2EA]/70"
      >
        {links.map(({ icon: Icon, label, href }) =>
          href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 text-sm sm:text-base transition-opacity duration-200 hover:opacity-70"
            >
              <Icon size={18} strokeWidth={1.75} />
              {label}
            </a>
          ) : (
            <span
              key={label}
              className="inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <Icon size={18} strokeWidth={1.75} />
              {label}
            </span>
          ),
        )}
      </FadeIn>

      <p className="text-center text-[#D7E2EA]/35 font-light text-xs sm:text-sm mt-16">
        © {new Date().getFullYear()} Pouya Azarandaz · Built with React, Tailwind
        &amp; Framer Motion
      </p>
    </footer>
  )
}
