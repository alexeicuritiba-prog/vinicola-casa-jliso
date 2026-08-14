import { WINES } from '../data/wines'
import { WineCard } from './WineCard'

export function Vinhos() {
  return (
    <section id="vinhos" className="relative bg-burgundy py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-sans text-xs tracking-[0.36em] text-gold uppercase">Os vinhos</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl">Syrah da casa</h2>
        <p className="mt-5 max-w-2xl font-sans text-lg text-cream/85">
          Cinco rótulos confirmados da Casa J Liso. Os cartões abaixo são composições tipográficas —
          não são fotos das garrafas.
        </p>
        <div className="gold-rule mt-6 max-w-xs" />

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {WINES.map((wine) => (
            <div key={wine.id} className="w-full sm:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]">
              <WineCard wine={wine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
