export default function SvgCurve() {
  return (
    <svg
      className="absolute left-0 right-0 -bottom-1.5 mx-auto z-30 w-full max-w-[1920px] pointer-events-none"
      viewBox="0 0 1920 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradiente rojo → negro en extremos */}
        <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="15%" stopColor="#BF225A" />
          <stop offset="50%" stopColor="#E11D48" />
          <stop offset="85%" stopColor="#BF225A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>

      {/* Fondo negro */}
      <path
        d="M0 40.2359C727.474 -13.0332 1147.76 -13.7894 1920 40.2359V55H0V40.2359Z"
        fill="black"
      />

      {/* Arco */}
      <path
        d="M0 40.2359C727.474 -13.0332 1147.76 -13.7894 1920 40.2359"
        stroke="url(#curveGradient)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
