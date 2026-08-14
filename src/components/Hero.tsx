import { GlassesMark } from './marks/GlassesMark'
import { FacadeScene } from './marks/FacadeScene'

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-svh overflow-hidden bg-sky">
      <FacadeScene className="absolute inset-0 h-full w-full object-cover" />
      <div className="grain" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-ink/55" />

      <div className="relative mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-start px-5 pb-24 pt-28 text-center text-cream sm:pt-32">
        <div className="rise max-w-2xl rounded-sm bg-ink/35 px-6 py-8 backdrop-blur-[2px] sm:px-10">
          <p className="mb-4 font-sans text-xs tracking-[0.42em] uppercase text-cream/90">
            Vinícola · Mirassol, São Paulo
          </p>
          <h1 className="font-script text-7xl leading-none text-cream drop-shadow-md sm:text-8xl md:text-[7.5rem]">
            Casa J. Liso
          </h1>
          <GlassesMark className="mx-auto mt-5 h-14 w-24" />
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl text-cream/95 sm:text-2xl">
            Vinhos Syrah de Mirassol. Da colheita em caixas azuis à garrafa.
          </p>
          <a
            href="#vinhos"
            className="mt-8 inline-flex items-center border border-gold px-7 py-3 font-sans text-xs tracking-[0.28em] text-cream uppercase no-underline transition-colors hover:bg-gold hover:text-ink"
          >
            Ver os vinhos
          </a>
        </div>
      </div>
    </section>
  )
}
