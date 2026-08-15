type CircularTruckLogoProps = {
  className?: string
}

export function CircularTruckLogo({ className }: CircularTruckLogoProps) {
  return (
    <img
      src="/selo-circular.png"
      alt="Vinicula Casa J Liso"
      className={className}
    />
  )
}
