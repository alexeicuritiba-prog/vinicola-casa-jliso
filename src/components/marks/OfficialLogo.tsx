type OfficialLogoProps = {
  className?: string
}

export function OfficialLogo({ className }: OfficialLogoProps) {
  return <img src="/logo-casa-j-liso.png" alt="Casa J Liso" className={className} />
}
