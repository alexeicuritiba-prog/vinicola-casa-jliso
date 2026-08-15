type WazeIconProps = {
  className?: string
}

export function WazeIcon({ className }: WazeIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3.1c-4.7 0-8.4 3.5-8.4 7.7 0 2.5 1.3 4.8 3.4 6.2l-.9 3.5 3.9-1.5c.6.2 1.3.3 2 .3 4.7 0 8.4-3.5 8.4-7.7S16.7 3.1 12 3.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="9.2" cy="10.2" r="1.15" fill="currentColor" />
      <circle cx="14.8" cy="10.2" r="1.15" fill="currentColor" />
      <path
        d="M8.8 13.2c.9 1.3 2 1.9 3.2 1.9s2.3-.6 3.2-1.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
