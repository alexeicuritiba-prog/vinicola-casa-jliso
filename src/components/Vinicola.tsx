import { CircularTruckLogo } from './marks/CircularTruckLogo'
import { HarvestCrates } from './marks/HarvestCrates'
import { OfficialLogo } from './marks/OfficialLogo'

export function Vinicola() {
  return (
    <section id="vinicola" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-sans text-xs tracking-[0.36em] text-terracotta uppercase">A vinícola</p>
        <h2 className="mt-3 font-serif text-4xl text-burgundy sm:text-5xl md:text-6xl">
          Casa J Liso em Mirassol
        </h2>
        <div className="gold-rule mt-6 max-w-xs" />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-ink-soft lg:col-span-7">
            <p>A Vinícola Casa J Liso fica em Mirassol, no interior de São Paulo.</p>
            <p>É dali que saem as uvas para a elaboração dos tão apreciados vinhos.</p>
            <p>
              Na colheita, realizada duas vezes por ano, uvas verdes e rubis enchem as tradicionais
              caixas azuis impressas com{' '}
              <strong className="font-semibold text-ink">CASA J. LISO</strong>.
            </p>
          </div>

          <figure className="lg:col-span-5">
            <HarvestCrates className="h-auto w-full" />
          </figure>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <figure className="flex flex-col items-center bg-ink px-6 py-8">
            <CircularTruckLogo className="h-56 w-56" />
          </figure>
          <figure className="flex flex-col items-center bg-ink px-6 py-8">
            <OfficialLogo className="h-auto w-full max-w-xs" />
          </figure>
        </div>
      </div>
    </section>
  )
}
