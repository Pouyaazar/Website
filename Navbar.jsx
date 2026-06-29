import { useState, useEffect } from 'react'
import { profile, cvFile } from '../data/content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#timeline', label: 'Path' },
  { href: '#certifications', label: 'Certificates' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-hair bg-base/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-8 w-8 rounded-full border border-hair object-cover"
          />
          <span className="hidden font-display text-sm font-medium tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-silver ${
                active === l.href.slice(1) ? 'text-cyan' : 'text-muted'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href={cvFile} download className="btn-ghost">
            CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-hair text-silver md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-hair bg-base/95 backdrop-blur-md md:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted hover:text-silver"
              >
                {l.label}
              </a>
            ))}
            <a href={cvFile} download className="btn-primary mt-3 w-fit">
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
