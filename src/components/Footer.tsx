import { INSTAGRAM_URL } from '../data/site'
import { TankerMark } from './marks/TankerMark'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <TankerMark className="h-6 w-12 text-gold" />
          <p className="m-0 font-sans text-sm tracking-wide">
            © {YEAR} Casa J Liso · Mirassol/SP
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="font-sans text-sm tracking-[0.16em] text-gold no-underline hover:text-gold-bright"
        >
          Instagram
        </a>
      </div>
    </footer>
  )
}
