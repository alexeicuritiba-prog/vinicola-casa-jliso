import type { Wine } from '../data/wines'
import { WineLabelArt } from './marks/WineLabelArt'

type WineCardProps = {
  wine: Wine
}

export function WineCard({ wine }: WineCardProps) {
  return (
    <article className="flex h-full flex-col bg-paper shadow-[0_18px_40px_-24px_rgba(26,18,16,0.45)]">
      <WineLabelArt motif={wine.motif} className="h-auto w-full" />
      <div className="flex flex-1 flex-col px-5 py-5">
        <h3 className="font-serif text-2xl leading-snug text-burgundy">{wine.name}</h3>
      </div>
    </article>
  )
}
