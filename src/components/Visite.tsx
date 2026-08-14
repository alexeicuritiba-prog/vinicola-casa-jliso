import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/site'
import { InstagramIcon } from './InstagramIcon'
import { GlassesMark } from './marks/GlassesMark'

export function Visite() {
  return (
    <section id="visite" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <GlassesMark className="mx-auto h-12 w-20" tone="gold" />
        <p className="mt-6 font-sans text-xs tracking-[0.36em] text-terracotta uppercase">
          Visite / Contato
        </p>
        <h2 className="mt-3 font-serif text-4xl text-burgundy sm:text-5xl">Estamos em Mirassol-SP</h2>
        <div className="gold-rule mx-auto mt-6 max-w-xs" />
        <p className="mt-8 font-sans text-lg leading-relaxed text-ink-soft">
          A Vinícola Casa J Liso fica em Mirassol, São Paulo. O canal oficial para acompanhar a casa
          e falar com a vinícola é o Instagram.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 bg-burgundy px-8 py-4 font-sans text-sm tracking-[0.22em] text-cream uppercase no-underline transition-colors hover:bg-wine"
        >
          <InstagramIcon className="h-5 w-5" />
          Seguir {INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  )
}
