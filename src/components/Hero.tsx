import { FacadeScene } from './marks/FacadeScene'
import { OfficialLogo } from './marks/OfficialLogo'

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-svh flex-col bg-sky">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/40 to-transparent" />
      <div className="grain" />
      <div className="relative mx-auto w-full max-w-3xl px-5 pb-4 pt-24 text-center text-cream sm:pt-28">
        <h1 className="m-0">
          <OfficialLogo className="mx-auto block h-28 w-auto sm:h-36 md:h-44" />
        </h1>
        <p className="mt-4 font-sans text-xs tracking-[0.42em] uppercase text-cream/90">
          Mirassol, São Paulo
        </p>
        <p className="mx-auto mt-3 max-w-xl font-serif text-xl text-cream/95 sm:text-2xl">
          Vinhos Casa J Liso, da colheita das uvas para momentos especiais
        </p>
        <a
          href="#vinhos"
          className="mt-6 inline-flex items-center border border-gold px-7 py-3 font-sans text-xs tracking-[0.28em] text-cream uppercase no-underline transition-colors hover:bg-gold hover:text-ink"
        >
          conheça nossos vinhos
        </a>
      </div>
      <div className="relative mt-auto min-h-[max(28rem,32vw)] flex-1 overflow-hidden bg-terracotta sm:min-h-[max(32rem,34vw)]">
        <FacadeScene className="absolute inset-x-0 top-0 h-full w-full" />
      </div>
    </section>
  )
}
