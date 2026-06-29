import { motion } from 'framer-motion'
import { cvFile } from '../data/content'

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function CV() {
  return (
    <section id="cv" className="container-x scroll-mt-24 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="glass relative overflow-hidden rounded-2xl"
      >
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />

        {/* Header */}
        <div className="relative flex flex-col items-start justify-between gap-4 border-b border-hair p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="eyebrow">{'// curriculum vitae'}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-silver">Full CV</h3>
            <p className="mt-1 text-sm text-muted">Preview below, or download the PDF.</p>
          </div>
          <a href={cvFile} download className="btn-primary shrink-0">
            <DownloadIcon />
            Download CV (PDF)
          </a>
        </div>

        {/* Inline preview */}
        <div className="relative bg-base/40 p-3 sm:p-4">
          <object
            data={`${cvFile}#view=FitH&toolbar=0`}
            type="application/pdf"
            className="h-[60vh] min-h-[420px] w-full rounded-lg border border-hair sm:h-[78vh]"
            aria-label="CV preview"
          >
            <div className="grid place-items-center p-10 text-center">
              <p className="text-sm text-muted">
                Your browser can't display the embedded PDF.{' '}
                <a href={cvFile} download className="text-cyan underline">
                  Download the CV instead.
                </a>
              </p>
            </div>
          </object>
        </div>
      </motion.div>
    </section>
  )
}
