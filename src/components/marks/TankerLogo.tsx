type TankerLogoProps = {
  className?: string
}

export function TankerLogo({ className }: TankerLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="tanker-logo-title tanker-logo-desc"
    >
      <title id="tanker-logo-title">Casa J Liso</title>
      <desc id="tanker-logo-desc">
        Marca dourada sobre fundo preto: nome em serifado e caminhão-tanque sobre ondas
      </desc>
      <rect width="280" height="280" rx="8" fill="#111111" />
      <text
        x="140"
        y="78"
        textAnchor="middle"
        fill="#C9A44A"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="36"
        letterSpacing="3"
      >
        CASA J LISO
      </text>
      <line x1="70" y1="92" x2="210" y2="92" stroke="#C9A44A" strokeWidth="1" />
      <g fill="#C9A44A" transform="translate(36 118)">
        <path d="M8 52c0-16 14-28 40-28h72c18 0 30 8 38 16l22 4c10 2 18 10 18 18v12H8V52Z" />
        <path d="M16 32h16V20h-8c-4.4 0-8 3.6-8 8v4Z" />
        <circle cx="48" cy="70" r="12" />
        <circle cx="48" cy="70" r="5" fill="#111111" />
        <circle cx="168" cy="70" r="12" />
        <circle cx="168" cy="70" r="5" fill="#111111" />
      </g>
      <path
        d="M28 230c24-14 48-14 72 0s48 14 72 0 48-14 72 0"
        fill="none"
        stroke="#C9A44A"
        strokeWidth="1.6"
      />
      <path
        d="M28 244c24-12 48-12 72 0s48 12 72 0 48-12 72 0"
        fill="none"
        stroke="#C9A44A"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <path
        d="M28 256c24-10 48-10 72 0s48 10 72 0 48-10 72 0"
        fill="none"
        stroke="#C9A44A"
        strokeWidth="1"
        opacity="0.45"
      />
    </svg>
  )
}
