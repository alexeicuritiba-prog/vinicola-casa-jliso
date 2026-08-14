type FacadeSceneProps = {
  className?: string
}

export function FacadeScene({ className }: FacadeSceneProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 820"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="facade-title facade-desc"
      preserveAspectRatio="xMidYMax slice"
    >
      <title id="facade-title">Fachada Casa J. Liso</title>
      <desc id="facade-desc">
        Fachada terracota com telhado de barro, céu azul, taças e o nome Casa J. Liso em cursiva branca
      </desc>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7EC4E8" />
          <stop offset="55%" stopColor="#5EA0CE" />
          <stop offset="100%" stopColor="#C45C26" />
        </linearGradient>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D46A32" />
          <stop offset="100%" stopColor="#B04B1C" />
        </linearGradient>
        <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C45C26" />
          <stop offset="100%" stopColor="#8A3412" />
        </linearGradient>
      </defs>
      <rect width="1440" height="820" fill="url(#sky)" />
      <ellipse cx="220" cy="150" rx="90" ry="28" fill="#F6EFE3" opacity="0.55" />
      <ellipse cx="300" cy="138" rx="70" ry="22" fill="#F6EFE3" opacity="0.4" />
      <ellipse cx="1180" cy="120" rx="110" ry="30" fill="#F6EFE3" opacity="0.45" />
      <ellipse cx="1260" cy="108" rx="70" ry="20" fill="#F6EFE3" opacity="0.3" />

      <rect x="180" y="300" width="1080" height="520" fill="url(#wall)" />
      <path d="M140 300h1160l-80 90H220L140 300Z" fill="url(#roof)" />
      <g fill="#9A4318">
        {Array.from({ length: 22 }, (_, index) => (
          <ellipse key={index} cx={190 + index * 50} cy="318" rx="26" ry="10" />
        ))}
        {Array.from({ length: 21 }, (_, index) => (
          <ellipse key={`b-${index}`} cx={216 + index * 50} cy="338" rx="26" ry="10" />
        ))}
        {Array.from({ length: 22 }, (_, index) => (
          <ellipse key={`c-${index}`} cx={190 + index * 50} cy="358" rx="26" ry="10" />
        ))}
      </g>

      <text
        x="720"
        y="520"
        textAnchor="middle"
        fill="#F6EFE3"
        fontFamily="Great Vibes, cursive"
        fontSize="86"
      >
        Casa J. Liso
      </text>
      <g transform="translate(620 540)" fill="none" stroke="#F6EFE3" strokeWidth="2.2">
        <path d="M8 8h32l-5 24c-1.6 9-9 14.6-18 13.6C9 44.6 3.4 38 2.6 29L-2 8h10Z" />
        <path d="M16 46v14" />
        <path d="M6 64h20" strokeLinecap="round" />
        <path d="M78 8h32l5 21c1 9-4.4 15.6-13 16.6-9 1-16.4-4.6-18-13.4L78 8Z" />
        <path d="M96 46v14" />
        <path d="M86 64h20" strokeLinecap="round" />
        <path d="M40 20c10-9 28-9 38 0" strokeLinecap="round" />
      </g>

      <g fill="#F3D7B0" opacity="0.92">
        <rect x="280" y="640" width="70" height="96" rx="35" />
        <rect x="390" y="640" width="70" height="96" rx="35" />
        <rect x="980" y="640" width="70" height="96" rx="35" />
        <rect x="1090" y="640" width="70" height="96" rx="35" />
      </g>
      <rect x="680" y="690" width="80" height="130" fill="#8A3412" />
      <circle cx="748" cy="760" r="4" fill="#C9A44A" />
    </svg>
  )
}
