import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_EMBED_URL,
  STREET_ADDRESS,
  WAZE_URL,
} from '../data/site'
import { InstagramIcon } from './InstagramIcon'
import { GlassesMark } from './marks/GlassesMark'
import { WazeIcon } from './WazeIcon'

const mapActionButtonClassName =
  'inline-flex h-12 w-12 items-center justify-center rounded-full no-underline shadow-[0_4px_14px_rgba(26,18,16,0.18)] transition-opacity hover:opacity-90'

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

        <div className="mt-12 text-center">
          <h3 className="font-serif text-2xl text-burgundy sm:text-3xl">Como chegar</h3>
          <p className="mx-auto mt-3 max-w-md font-sans text-base leading-relaxed text-ink-soft">
            {STREET_ADDRESS}
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border-2 border-gold/55 bg-cream-deep shadow-[0_16px_40px_rgba(107,28,40,0.16)]">
            <img
              src="/propriedade-aerea.png"
              alt="Vista aérea da Vinícola Casa J Liso, km 456 da SP-310, Mirassol-SP"
              className="block h-auto w-full"
            />
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border-2 border-gold/55 bg-cream-deep shadow-[0_16px_40px_rgba(107,28,40,0.16)]">
            <div className="relative aspect-[4/3] w-full sm:aspect-video">
              <iframe
                title="Como chegar — Vinícola Casa J Liso, Mirassol-SP"
                src={MAPS_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href={WAZE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir no Waze"
              className={`${mapActionButtonClassName} bg-[#33CCFF]`}
            >
              <WazeIcon variant="inverse" className="h-7 w-7" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram"
              className={`${mapActionButtonClassName} instagram-gradient`}
            >
              <InstagramIcon variant="mono" className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 bg-burgundy px-8 py-4 font-sans text-sm tracking-[0.22em] text-cream uppercase no-underline transition-colors hover:bg-wine"
        >
          <InstagramIcon variant="mono" className="h-5 w-5 text-cream" />
          Seguir {INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  )
}
