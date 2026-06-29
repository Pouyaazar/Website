import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { contact } from '../data/content'

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46C22 7.74 24 10 24 14.1V24h-5v-8.8c0-2.1-.04-4.8-2.9-4.8-2.9 0-3.35 2.27-3.35 4.62V24h-5V8z" />
  </svg>
)
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
  </svg>
)
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
  </svg>
)

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      setCopied(false)
    }
  }

  const items = [
    { icon: <MailIcon />, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: <PhoneIcon />, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: <LinkedinIcon />, label: 'LinkedIn', value: 'linkedin.com/in/pouyaazarandaz', href: contact.linkedin },
    { icon: <GithubIcon />, label: 'GitHub', value: 'View repositories', href: contact.github },
    { icon: <PinIcon />, label: 'Location', value: contact.location, href: null },
  ]

  return (
    <section id="contact" className="container-x scroll-mt-24 py-24">
      <SectionHeading index="08" eyebrow="Contact" title="Let's talk" sub="Open to engineering and research opportunities. The fastest way to reach me is email." />

      <div className="mb-4 flex flex-col items-start justify-between gap-4 rounded-2xl border border-cyan/25 bg-gradient-to-br from-cyan/10 to-transparent p-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-cyan/80">Email me</p>
          <p className="mt-1 font-display text-lg font-semibold text-silver sm:text-xl">{contact.email}</p>
        </div>
        <div className="flex gap-2">
          <a href={`mailto:${contact.email}`} className="btn-primary">
            Send email
          </a>
          <button onClick={copyEmail} className="btn-ghost" aria-live="polite">
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it, i) => {
          const inner = (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`glass flex items-center gap-4 rounded-2xl p-5 ${
                it.href ? 'card-hover' : ''
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hair bg-base text-cyan">
                {it.icon}
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{it.label}</p>
                <p className="truncate text-sm font-medium text-silver">{it.value}</p>
              </div>
            </motion.div>
          )
          return it.href ? (
            <a key={it.label} href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {inner}
            </a>
          ) : (
            <div key={it.label}>{inner}</div>
          )
        })}
      </div>
    </section>
  )
}
