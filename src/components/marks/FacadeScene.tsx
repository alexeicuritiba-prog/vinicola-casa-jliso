type FacadeSceneProps = {
  className?: string
}

export function FacadeScene({ className }: FacadeSceneProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="facade-title facade-desc"
      preserveAspectRatio="xMidYMin slice"
    >
      <title id="facade-title">Fachada Casa J. Liso</title>
      <desc id="facade-desc">
        Fachada terracota com telhado de barro, taças e o nome Casa J. Liso em cursiva branca
      </desc>
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D46A32" />
          <stop offset="100%" stopColor="#B04B1C" />
        </linearGradient>
        <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C45C26" />
          <stop offset="100%" stopColor="#8A3412" />
        </linearGradient>
      </defs>

      <rect x="170" y="88" width="1100" height="472" fill="url(#wall)" />
      <path d="M120 88h1200l-90 78H210L120 88Z" fill="url(#roof)" />
      <g fill="#8A3412">
        {Array.from({ length: 23 }, (_, index) => (
          <ellipse key={`roof-a-${index}`} cx={180 + index * 48} cy="104" rx="24" ry="9" />
        ))}
        {Array.from({ length: 22 }, (_, index) => (
          <ellipse key={`roof-b-${index}`} cx={204 + index * 48} cy="122" rx="24" ry="9" />
        ))}
        {Array.from({ length: 23 }, (_, index) => (
          <ellipse key={`roof-c-${index}`} cx={180 + index * 48} cy="140" rx="24" ry="9" />
        ))}
      </g>

      <text
        x="720"
        y="330"
        textAnchor="middle"
        fill="#F6EFE3"
        fontFamily="Great Vibes, cursive"
        fontSize="84"
      >
        Casa J. Liso
      </text>
      <g transform="translate(618 348)" fill="none" stroke="#F6EFE3" strokeWidth="2.2">
        <path d="M8 8h32l-5 24c-1.6 9-9 14.6-18 13.6C9 44.6 3.4 38 2.6 29L-2 8h10Z" />
        <path d="M16 46v14" />
        <path d="M6 64h20" strokeLinecap="round" />
        <path d="M78 8h32l5 21c1 9-4.4 15.6-13 16.6-9 1-16.4-4.6-18-13.4L78 8Z" />
        <path d="M96 46v14" />
        <path d="M86 64h20" strokeLinecap="round" />
        <path d="M40 20c10-9 28-9 38 0" strokeLinecap="round" />
      </g>

      <g fill="#F3D7B0">
        <path d="M300 430h64v88a32 32 0 0 1-64 0v-88Z" />
        <path d="M400 430h64v88a32 32 0 0 1-64 0v-88Z" />
        <path d="M976 430h64v88a32 32 0 0 1-64 0v-88Z" />
        <path d="M1076 430h64v88a32 32 0 0 1-64 0v-88Z" />
      </g>
      <g stroke="#9A4318" strokeWidth="3" fill="none">
        <path d="M300 430h64v88a32 32 0 0 1-64 0v-88Z" />
        <path d="M400 430h64v88a32 32 0 0 1-64 0v-88Z" />
        <path d="M976 430h64v88a32 32 0 0 1-64 0v-88Z" />
        <path d="M1076 430h64v88a32 32 0 0 1-64 0v-88Z" />
      </g>
      <rect x="686" y="430" width="68" height="130" fill="#7A2E10" />
      <circle cx="742" cy="500" r="4" fill="#C9A44A" />
    </svg>
  )
}
