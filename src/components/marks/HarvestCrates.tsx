type HarvestCratesProps = {
  className?: string
}

export function HarvestCrates({ className }: HarvestCratesProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="harvest-title harvest-desc"
    >
      <title id="harvest-title">Colheita Casa J. Liso</title>
      <desc id="harvest-desc">
        Caixas plásticas azuis com a marca CASA J. LISO, cheias de uvas verdes e brancas
      </desc>
      <Crate x={20} y={70} />
      <Crate x={190} y={88} />
      <Crate x={330} y={62} />
    </svg>
  )
}

function Crate({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <Grapes />
      <rect x="8" y="78" width="150" height="86" rx="6" fill="#1D6BB5" />
      <rect x="16" y="86" width="134" height="70" rx="3" fill="#1A5A99" />
      <g fill="#2B86D6">
        <rect x="24" y="96" width="22" height="10" rx="1" />
        <rect x="52" y="96" width="22" height="10" rx="1" />
        <rect x="80" y="96" width="22" height="10" rx="1" />
        <rect x="108" y="96" width="22" height="10" rx="1" />
        <rect x="24" y="114" width="22" height="10" rx="1" />
        <rect x="52" y="114" width="22" height="10" rx="1" />
        <rect x="80" y="114" width="22" height="10" rx="1" />
        <rect x="108" y="114" width="22" height="10" rx="1" />
      </g>
      <text
        x="83"
        y="148"
        textAnchor="middle"
        fill="#F6EFE3"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1.6"
      >
        CASA J. LISO
      </text>
    </g>
  )
}

function Grapes() {
  return (
    <g>
      <ellipse cx="46" cy="64" rx="18" ry="22" fill="#C8D86A" />
      <ellipse cx="70" cy="52" rx="20" ry="24" fill="#D7E48A" />
      <ellipse cx="96" cy="60" rx="18" ry="22" fill="#E8E6C8" />
      <ellipse cx="118" cy="70" rx="16" ry="18" fill="#C8D86A" />
      <circle cx="40" cy="58" r="8" fill="#B5C85A" />
      <circle cx="54" cy="50" r="8" fill="#D7E48A" />
      <circle cx="66" cy="42" r="8" fill="#E8E6C8" />
      <circle cx="80" cy="38" r="8" fill="#C8D86A" />
      <circle cx="94" cy="46" r="8" fill="#D7E48A" />
      <circle cx="108" cy="54" r="7" fill="#E8E6C8" />
      <circle cx="52" cy="68" r="7" fill="#E8E6C8" />
      <circle cx="68" cy="62" r="8" fill="#B5C85A" />
      <circle cx="84" cy="58" r="7" fill="#E8E6C8" />
      <circle cx="98" cy="68" r="7" fill="#C8D86A" />
      <path d="M78 22c2 8 8 12 16 14" stroke="#5A6B2A" strokeWidth="2" fill="none" />
      <ellipse cx="86" cy="20" rx="8" ry="4" fill="#6F8A32" transform="rotate(-20 86 20)" />
    </g>
  )
}
