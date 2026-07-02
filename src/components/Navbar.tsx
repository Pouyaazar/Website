import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from './FadeIn'

type NavLink = { label: string; href: string }

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'CAD', href: '/cad' },
  { label: 'Contact', href: '#contact' },
]

function NavItem({
  link,
  className,
  onClick,
}: {
  link: NavLink
  className: string
  onClick?: () => void
}) {
  return link.href.startsWith('#') ? (
    <a href={link.href} className={className} onClick={onClick}>
      {link.label}
    </a>
  ) : (
    <Link to={link.href} className={className} onClick={onClick}>
      {link.label}
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {/* Brand — mobile only */}
        <Link
          to="/"
          className="md:hidden text-[#D7E2EA] font-black uppercase tracking-wider text-lg"
        >
          Pouya
        </Link>

        {/* Inline links — tablet/desktop */}
        <div className="hidden md:flex w-full items-center justify-between">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            />
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
        >
          <Menu size={28} strokeWidth={2} />
        </button>
      </FadeIn>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden flex flex-col"
            style={{ background: '#0a0b0d' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex justify-end px-6 pt-6">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
              >
                <X size={30} strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-9">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <NavItem
                    link={link}
                    onClick={() => setOpen(false)}
                    className="text-[#D7E2EA] font-medium uppercase tracking-widest text-2xl transition-opacity duration-200 hover:opacity-70"
                  />
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
