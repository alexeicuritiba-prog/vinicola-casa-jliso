import { FacadeScene } from './marks/FacadeScene'

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-svh flex-col bg-sky">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/40 to-transparent" />
      <div className="grain" />
      <div className="relative mx-auto w-full max-w-3xl px-5 pb-6 pt-28 text-center text-cream sm:pt-32">
        <p className="font-sans text-xs tracking-[0.42em] uppercase text-cream/90">
          Mirassol, São Paulo
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
          Vinícola Casa J Liso
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-serif text-xl text-cream/95 sm:text-2xl">
          Vinhos Syrah de Mirassol. Da colheita em caixas azuis à garrafa.
        </p>
        <a
          href="#vinhos"
          className="mt-8 inline-flex items-center border border-gold px-7 py-3 font-sans text-xs tracking-[0.28em] text-cream uppercase no-underline transition-colors hover:bg-gold hover:text-ink"
        >
          Ver os vinhos
        </a>
      </div>
      <div className="relative mt-auto min-h-[22rem] flex-1 sm:min-h-[28rem]">
        <FacadeScene className="absolute inset-x-0 bottom-0 h-full w-full" />
      </div>
    </section>
  )
}
