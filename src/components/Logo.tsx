export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g>
        <title>Inxtruc</title>
        <ellipse
          stroke="currentColor"
          fill="none"
          cx="70"
          cy="70"
          rx="64"
          ry="64"
          strokeWidth="10"
        />
        <ellipse
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          cx="70"
          cy="70"
          rx="32"
          ry="32"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          x1="106"
          y1="70"
          x2="120"
          y2="70"
        />
      </g>
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 120 40" aria-hidden="true" {...props}>
      <style>
        {`.logo {
          font: 600 18px poppins, poppins Fallback;
        }`}
      </style>
      <Logomark width="40" height="40" className="text-teal-700" />
      <text x="50" y="26" className="logo" fill="currentColor">
        Inxtruc
      </text>
    </svg>
  )
}
