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
        <dl className="mt-4 space-y-2 font-sans text-sm text-ink-soft">
          {wine.facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[7.5rem_1fr] gap-2">
              <dt className="tracking-wide text-terracotta uppercase">{fact.label}</dt>
              <dd className="m-0">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
