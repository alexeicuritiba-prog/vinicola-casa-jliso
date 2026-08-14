import type { WineMotif } from '../../data/wines'

type WineLabelArtProps = {
  motif: WineMotif
  className?: string
}

export function WineLabelArt({ motif, className }: WineLabelArtProps) {
  switch (motif) {
    case 'cowboy':
      return <CowboyLabel className={className} />
    case 'don-venna':
      return <DonVennaLabel className={className} />
    case 'j-alberto':
      return <JAlbertoLabel className={className} />
    case 'dom-venna':
      return <DomVennaLabel className={className} />
    case 'quatro-maos':
      return <QuatroMaosLabel className={className} />
    default: {
      const _exhaustive: never = motif
      throw new Error(`Motivo de rótulo não tratado: ${String(_exhaustive)}`)
    }
  }
}

function CowboyLabel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="240" height="320" fill="#1A1210" />
      <rect x="10" y="10" width="220" height="300" fill="none" stroke="#C9A44A" strokeWidth="1.2" />
      <text
        x="120"
        y="42"
        textAnchor="middle"
        fill="#C9A44A"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="15"
        letterSpacing="3"
      >
        GRAN RESERVA
      </text>
      <ellipse cx="120" cy="128" rx="46" ry="54" fill="#2A1C18" />
      <path d="M74 108c10-28 82-28 92 0-18-10-74-10-92 0Z" fill="#C9A44A" />
      <path d="M86 104c8-22 60-22 68 0" fill="#1A1210" />
      <circle cx="120" cy="138" r="28" fill="#3D2C28" />
      <text
        x="120"
        y="230"
        textAnchor="middle"
        fill="#C9A44A"
        fontFamily="Great Vibes, cursive"
        fontSize="34"
      >
        J. Liso
      </text>
      <g transform="translate(78 248)" fill="#C9A44A">
        <path d="M4 18c0-6 6-10 16-10h28c8 0 12 3 16 6l8 1c4 1 8 4 8 8v3H4v-8Z" />
        <circle cx="18" cy="26" r="4" />
        <circle cx="58" cy="26" r="4" />
      </g>
      <text
        x="120"
        y="300"
        textAnchor="middle"
        fill="#F6EFE3"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="11"
        letterSpacing="2"
      >
        SYRAH 2024
      </text>
    </svg>
  )
}

function DonVennaLabel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="240" height="320" fill="#F6EFE3" />
      <rect x="12" y="12" width="216" height="296" fill="none" stroke="#6B1C28" strokeWidth="1.4" />
      <rect x="20" y="20" width="200" height="280" fill="none" stroke="#C9A44A" strokeWidth="0.7" />
      <text
        x="120"
        y="70"
        textAnchor="middle"
        fill="#6B1C28"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="18"
        letterSpacing="4"
      >
        DON VENNA
      </text>
      <line x1="70" y1="86" x2="170" y2="86" stroke="#C9A44A" />
      <text
        x="120"
        y="130"
        textAnchor="middle"
        fill="#1A1210"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="42"
      >
        Reserva
      </text>
      <text
        x="120"
        y="168"
        textAnchor="middle"
        fill="#6B1C28"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="14"
        letterSpacing="3"
      >
        SYRAH
      </text>
      <circle cx="120" cy="230" r="22" fill="none" stroke="#C9A44A" />
      <text
        x="120"
        y="236"
        textAnchor="middle"
        fill="#C9A44A"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="16"
      >
        JL
      </text>
    </svg>
  )
}

function JAlbertoLabel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="240" height="320" fill="#6B1C28" />
      <rect x="12" y="12" width="216" height="296" fill="none" stroke="#C9A44A" strokeWidth="1.2" />
      <text
        x="120"
        y="88"
        textAnchor="middle"
        fill="#F6EFE3"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="20"
        letterSpacing="3"
      >
        J. ALBERTO
      </text>
      <text
        x="120"
        y="150"
        textAnchor="middle"
        fill="#C9A44A"
        fontFamily="Great Vibes, cursive"
        fontSize="40"
      >
        Reserva
      </text>
      <text
        x="120"
        y="196"
        textAnchor="middle"
        fill="#F6EFE3"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="13"
        letterSpacing="4"
      >
        SYRAH
      </text>
      <g transform="translate(88 230)" fill="#C9A44A">
        <path d="M4 18c0-6 6-10 16-10h28c8 0 12 3 16 6l8 1c4 1 8 4 8 8v3H4v-8Z" />
        <circle cx="18" cy="26" r="4" />
        <circle cx="58" cy="26" r="4" />
      </g>
    </svg>
  )
}

function DomVennaLabel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="240" height="320" fill="#FBF6EC" />
      <rect x="10" y="10" width="220" height="300" fill="none" stroke="#1A1210" strokeWidth="1.4" />
      <text
        x="120"
        y="64"
        textAnchor="middle"
        fill="#1A1210"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="18"
        letterSpacing="3"
      >
        DOM VENNA
      </text>
      <text
        x="120"
        y="120"
        textAnchor="middle"
        fill="#6B1C28"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="48"
      >
        2023
      </text>
      <text
        x="120"
        y="156"
        textAnchor="middle"
        fill="#1A1210"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="13"
        letterSpacing="2"
      >
        SYRAH
      </text>
      <rect x="48" y="188" width="144" height="36" fill="#6B1C28" />
      <text
        x="120"
        y="212"
        textAnchor="middle"
        fill="#F6EFE3"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="12"
        letterSpacing="2"
      >
        PRIMEIRA SAFRA
      </text>
      <text
        x="120"
        y="260"
        textAnchor="middle"
        fill="#3D2C28"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="11"
      >
        Vinho fino tinto seco
      </text>
      <text
        x="120"
        y="282"
        textAnchor="middle"
        fill="#3D2C28"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="11"
      >
        Mirassol-SP
      </text>
    </svg>
  )
}

function QuatroMaosLabel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="240" height="320" fill="#1A1210" />
      <rect x="10" y="10" width="220" height="300" fill="none" stroke="#C9A44A" strokeWidth="1.2" />
      <text
        x="120"
        y="56"
        textAnchor="middle"
        fill="#C9A44A"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="16"
        letterSpacing="2"
      >
        A QUATRO MÃOS
      </text>
      <text
        x="120"
        y="92"
        textAnchor="middle"
        fill="#F6EFE3"
        fontFamily="Great Vibes, cursive"
        fontSize="32"
      >
        Ferracini Liso
      </text>
      <g fill="none" stroke="#C9A44A" strokeWidth="1.4" transform="translate(58 120)">
        <circle cx="40" cy="40" r="28" />
        <circle cx="84" cy="40" r="28" />
      </g>
      <text
        x="120"
        y="210"
        textAnchor="middle"
        fill="#F6EFE3"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="13"
        letterSpacing="3"
      >
        SYRAH 2024
      </text>
      <text
        x="120"
        y="248"
        textAnchor="middle"
        fill="#C9A44A"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="11"
      >
        Vinho tinto fino seco
      </text>
      <text
        x="120"
        y="278"
        textAnchor="middle"
        fill="#E8D9C4"
        fontFamily="Source Sans 3, system-ui, sans-serif"
        fontSize="10"
      >
        Vinícola Ferracini · SP
      </text>
    </svg>
  )
}
