import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-hair">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted/70">
          Built with React · Three.js · Tailwind
        </p>
      </div>
    </footer>
  )
}
