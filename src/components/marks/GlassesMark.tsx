type GlassesMarkProps = {
  className?: string
  tone?: 'light' | 'gold'
}

export function GlassesMark({ className, tone = 'light' }: GlassesMarkProps) {
  const stroke = tone === 'gold' ? '#C9A44A' : '#F6EFE3'
  const fill = tone === 'gold' ? 'rgba(201,164,74,0.18)' : 'rgba(246,239,227,0.16)'

  return (
    <svg
      className={className}
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 8h28l-4 22c-1.4 8-8.2 13.2-16.2 12.2C18 41.4 13 35.2 12.2 27.2L8 8h10Z"
        stroke={stroke}
        strokeWidth="1.6"
        fill={fill}
      />
      <path d="M22 42.5v12.5" stroke={stroke} strokeWidth="1.6" />
      <path d="M12 58h20" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M74 8h28l4 19.2c.8 8-4.2 14.2-12 15.1-8 .8-14.8-4.4-16.2-12.4L74 8Z"
        stroke={stroke}
        strokeWidth="1.6"
        fill={fill}
      />
      <path d="M90 42.8V55" stroke={stroke} strokeWidth="1.6" />
      <path d="M80 58h20" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M44 18c8-8 24-8 32 0"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
