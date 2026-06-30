import { ArrowUpRight } from 'lucide-react'

type LiveProjectButtonProps = {
  href?: string
  label?: string
  className?: string
}

const base =
  'inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 font-medium uppercase tracking-widest text-sm sm:text-base px-7 py-2.5 sm:px-9 sm:py-3 transition-colors duration-200'

/**
 * Project card action. Renders an external link when `href` is provided,
 * otherwise a non-interactive status pill (e.g. "In Progress").
 */
export default function LiveProjectButton({
  href,
  label = 'Live Project',
  className = '',
}: LiveProjectButtonProps) {
  if (!href) {
    return (
      <span
        className={`${base} border-[#D7E2EA]/25 text-[#D7E2EA]/45 ${className}`}
      >
        {label}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {label}
      <ArrowUpRight size={18} strokeWidth={2} />
    </a>
  )
}
