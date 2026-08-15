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
            <p>
              A Vinícola Casa J Liso fica em Mirassol, no interior de São Paulo. É dali que saem os
              Syrah da casa — e a colaboração A Quatro Mãos com a Vinícola Ferracini.
            </p>
            <p>
              Na colheita, uvas verdes e brancas enchem caixas plásticas azuis impressas com{' '}
              <strong className="font-semibold text-ink">CASA J. LISO</strong>.
            </p>
            <p>
              A identidade visual atravessa a fachada terracota com o nome em cursiva branca e duas
              taças, o selo circular do caminhão de caixas de uva e o caminhão-tanque dourado que
              marca os rótulos.
            </p>
          </div>

          <figure className="lg:col-span-5">
            <HarvestCrates className="h-auto w-full" />
            <figcaption className="mt-3 font-sans text-sm tracking-wide text-ink-soft">
              Caixas da colheita com a marca CASA J. LISO — ilustração a partir da identidade da casa.
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <figure className="flex flex-col items-center gap-4 bg-ink px-6 py-8">
            <CircularTruckLogo className="h-56 w-56" />
            <figcaption className="text-center font-sans text-sm text-cream/80">
              Selo circular: <span lang="pt">Vinicula Casa J Liso</span>, como escrito na marca, sobre
              o caminhão de caixas.
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center bg-ink px-6 py-8">
            <OfficialLogo className="h-auto w-full max-w-xs" />
          </figure>
        </div>
      </div>
    </section>
  )
}
