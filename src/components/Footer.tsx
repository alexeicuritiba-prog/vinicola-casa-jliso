import { INSTAGRAM_URL } from '../data/site'
import { InstagramIcon } from './InstagramIcon'
import { OfficialLogo } from './marks/OfficialLogo'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <OfficialLogo className="block h-9 w-auto sm:h-10" />
          <p className="m-0 font-sans text-sm tracking-wide">
            © {YEAR} Casa J Liso · Mirassol/SP
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.16em] text-gold no-underline hover:text-gold-bright"
        >
          <InstagramIcon variant="brand" className="h-4 w-4" />
          Instagram
        </a>
      </div>
    </footer>
  )
}
