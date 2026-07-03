type ContactButtonProps = {
  className?: string
}

/** Gradient pill CTA linking to email. */
export default function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <a
      href="mailto:pouyaazarandaz@gmail.com"
      className={`inline-block rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 transition-transform duration-200 hover:scale-[1.03] ${className}`}
      style={{
        background:
          'linear-gradient(135deg, #2f6bd8 0%, #4f8dfb 55%, #37c2e0 100%)',
        boxShadow: '0 4px 24px rgba(79, 141, 251, 0.4)',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </a>
  )
}
