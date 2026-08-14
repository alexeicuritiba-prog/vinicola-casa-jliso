type CircularTruckLogoProps = {
  className?: string
}

export function CircularTruckLogo({ className }: CircularTruckLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="circular-logo-title circular-logo-desc"
    >
      <title id="circular-logo-title">Vinicula Casa J Liso</title>
      <desc id="circular-logo-desc">
        Marca circular em preto e branco: caminhão de caçamba com caixas de uva
      </desc>
      <circle cx="120" cy="120" r="118" fill="#111111" />
      <circle cx="120" cy="120" r="108" fill="none" stroke="#F6EFE3" strokeWidth="2" />
      <circle cx="120" cy="120" r="98" fill="none" stroke="#F6EFE3" strokeWidth="0.6" />
      <defs>
        <path id="logo-arc" d="M 38 124 A 82 82 0 0 1 202 124" />
      </defs>
      <text
        fill="#F6EFE3"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="15"
        letterSpacing="2.4"
      >
        <textPath href="#logo-arc" startOffset="50%" textAnchor="middle">
          VINICULA CASA J LISO
        </textPath>
      </text>
      <g fill="#F6EFE3" transform="translate(28 92)">
        <rect x="8" y="38" width="118" height="28" rx="3" />
        <path d="M126 42h28l22 16v8H126V42Z" />
        <rect x="148" y="28" width="22" height="16" rx="2" />
        <circle cx="38" cy="72" r="11" />
        <circle cx="38" cy="72" r="4.5" fill="#111111" />
        <circle cx="108" cy="72" r="11" />
        <circle cx="108" cy="72" r="4.5" fill="#111111" />
        <circle cx="158" cy="72" r="11" />
        <circle cx="158" cy="72" r="4.5" fill="#111111" />
        <rect x="16" y="18" width="28" height="20" rx="1.5" />
        <rect x="48" y="14" width="28" height="24" rx="1.5" />
        <rect x="80" y="18" width="28" height="20" rx="1.5" />
        <circle cx="30" cy="16" r="3.2" />
        <circle cx="62" cy="12" r="3.2" />
        <circle cx="94" cy="16" r="3.2" />
        <circle cx="24" cy="12" r="2.4" />
        <circle cx="36" cy="11" r="2.4" />
        <circle cx="56" cy="8" r="2.4" />
        <circle cx="68" cy="8" r="2.4" />
        <circle cx="88" cy="12" r="2.4" />
        <circle cx="100" cy="11" r="2.4" />
      </g>
    </svg>
  )
}
