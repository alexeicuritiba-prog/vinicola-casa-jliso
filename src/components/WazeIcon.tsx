type WazeIconVariant = 'brand' | 'inverse'

type WazeIconProps = {
  className?: string
  /** brand = Waze-blue ghost with white face. inverse = white ghost for a blue button. */
  variant?: WazeIconVariant
}

function wazeColors(variant: WazeIconVariant): { body: string; face: string } {
  switch (variant) {
    case 'brand':
      return { body: '#33CCFF', face: '#FFFFFF' }
    case 'inverse':
      return { body: '#FFFFFF', face: '#33CCFF' }
    default: {
      const _exhaustive: never = variant
      throw new Error(`Unhandled Waze icon variant: ${_exhaustive}`)
    }
  }
}

export function WazeIcon({ className, variant = 'brand' }: WazeIconProps) {
  const { body, face } = wazeColors(variant)

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2.05c-5.2 0-9.4 3.88-9.4 8.68 0 2.86 1.52 5.4 3.88 6.95l-.98 3.82c-.16.6.5 1.1 1.04.8l4.18-2.08c.4.08.82.12 1.28.12 5.2 0 9.4-3.88 9.4-8.68S17.2 2.05 12 2.05Z"
        fill={body}
      />
      <ellipse cx="9.05" cy="10.15" rx="1.72" ry="2.05" fill={face} />
      <ellipse cx="14.95" cy="10.15" rx="1.72" ry="2.05" fill={face} />
      <path
        d="M8.7 13.55c1 1.55 2.15 2.3 3.3 2.3s2.3-.75 3.3-2.3"
        stroke={face}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  )
}
