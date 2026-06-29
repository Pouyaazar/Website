import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/content'

function VerifyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

function Lightbox({ index, setIndex, onClose }) {
  const cert = certifications[index]

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + certifications.length) % certifications.length)
    },
    [setIndex]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [go, onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-base/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.name}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-hair bg-panel text-silver transition hover:border-cyan/50 hover:text-cyan"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          go(-1)
        }}
        className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-hair bg-panel text-silver transition hover:border-cyan/50 hover:text-cyan sm:left-6"
        aria-label="Previous certificate"
      >
        ‹
      </button>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="max-h-full w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={cert.image}
          alt={cert.name}
          className="mx-auto max-h-[72vh] w-auto rounded-lg border border-hair bg-white object-contain shadow-glow"
        />
        <div className="mt-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-base font-semibold text-silver">{cert.name}</p>
            <p className="font-mono text-xs text-muted">
              {cert.issuer} · {cert.date}
            </p>
          </div>
          {cert.verify && (
            <a
              href={cert.verify}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              onClick={(e) => e.stopPropagation()}
            >
              <VerifyIcon /> Verify
            </a>
          )}
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          go(1)
        }}
        className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-hair bg-panel text-silver transition hover:border-cyan/50 hover:text-cyan sm:right-6"
        aria-label="Next certificate"
      >
        ›
      </button>
    </motion.div>
  )
}

export default function Certifications() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i) => {
    setIndex(i)
    setOpen(true)
  }

  return (
    <section id="certifications" className="container-x scroll-mt-24 py-24">
      <SectionHeading
        index="06"
        eyebrow="Certifications"
        title="Verified training"
        sub="Courses and recognitions across CAD, additive manufacturing, simulation, and machine learning. Click any certificate to enlarge."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            className="glass card-hover group flex flex-col overflow-hidden rounded-2xl"
          >
            <button
              onClick={() => openAt(i)}
              className="relative block overflow-hidden border-b border-hair bg-white"
              aria-label={`Open ${c.name}`}
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute right-2 top-2 rounded-md bg-base/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan backdrop-blur">
                {c.category}
              </span>
            </button>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-sm font-semibold leading-snug text-silver">{c.name}</h3>
              <p className="mt-1 font-mono text-[11px] text-muted">
                {c.issuer} · {c.date}
              </p>
              <div className="mt-4 flex items-center gap-4 pt-1">
                <button
                  onClick={() => openAt(i)}
                  className="text-xs font-medium text-cyan transition-colors hover:text-silver"
                >
                  View
                </button>
                {c.verify && (
                  <a
                    href={c.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-cyan"
                  >
                    <VerifyIcon /> Verify
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {open && <Lightbox index={index} setIndex={setIndex} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </section>
  )
}
