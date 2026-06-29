// Shown instead of the 3D canvas when WebGL is not available,
// or while the heavy 3D code is still loading.
export default function WebGLFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-64 w-64 animate-floaty rounded-full bg-cyan/10 blur-3xl" />
      <svg
        viewBox="0 0 240 240"
        className="relative h-72 w-72 text-cyan/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <g opacity="0.85">
          <path d="M60 80 L120 50 L180 80 L180 160 L120 190 L60 160 Z" />
          <path d="M120 50 L120 130 M60 80 L120 130 L180 80 M60 160 L120 130 L180 160" />
          <path d="M90 65 L90 145 M150 65 L150 145 M60 120 L180 120" opacity="0.4" />
        </g>
        <g fill="#E6EDF3" stroke="none">
          {[
            [120, 50],
            [60, 80],
            [180, 80],
            [60, 160],
            [180, 160],
            [120, 190],
            [120, 130],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.2" />
          ))}
        </g>
      </svg>
    </div>
  )
}
