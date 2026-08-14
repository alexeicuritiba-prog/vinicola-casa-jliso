type TankerMarkProps = {
  className?: string
  title?: string
}

export function TankerMark({ className, title }: TankerMarkProps) {
  const labelled = Boolean(title)

  return (
    <svg
      className={className}
      viewBox="0 0 120 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={labelled ? 'img' : undefined}
      aria-hidden={labelled ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <ellipse cx="60" cy="48" rx="46" ry="5" fill="currentColor" opacity="0.22" />
      <path
        d="M14 34c0-8 8-14 22-14h36c10 0 16 4 20 8l10 2c6 1 10 5 10 10v4H14v-10Z"
        fill="currentColor"
      />
      <path d="M18 24h8v-6H22c-2.2 0-4 1.8-4 4v2Z" fill="currentColor" />
      <circle cx="32" cy="42" r="6" fill="currentColor" />
      <circle cx="32" cy="42" r="2.4" fill="#1A1210" />
      <circle cx="86" cy="42" r="6" fill="currentColor" />
      <circle cx="86" cy="42" r="2.4" fill="#1A1210" />
      <path
        d="M20 48c10-6 22-6 32 0 10 6 22 6 32 0 8-5 18-5 26 0"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.7"
      />
    </svg>
  )
}
