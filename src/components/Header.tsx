import { useEffect, useId, useState } from 'react'
import { INSTAGRAM_URL, NAV_ITEMS } from '../data/site'
import { OfficialLogo } from './marks/OfficialLogo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<(typeof NAV_ITEMS)[number]['id']>('inicio')
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (section): section is HTMLElement => section !== null,
    )
    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const id = visible?.target.id
        if (id === 'inicio' || id === 'vinicola' || id === 'vinhos' || id === 'visite') {
          setActive(id)
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.15, 0.4, 0.7] },
    )

    for (const section of sections) {
      observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/92 text-cream shadow-lg backdrop-blur-md' : 'bg-transparent text-cream'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:py-4">
        <a href="#inicio" className="shrink-0 no-underline">
          <OfficialLogo className="block h-10 w-auto md:h-12 lg:h-14" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-sans text-sm tracking-[0.18em] uppercase no-underline transition-colors ${
                active === item.id ? 'text-gold-bright' : 'text-cream/85 hover:text-gold'
              }`}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-[0.14em] text-gold no-underline hover:text-gold-bright"
          >
            Instagram
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-gold/50 text-cream md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          <span aria-hidden="true" className="text-lg leading-none">
            {open ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {open ? (
        <nav id={menuId} className="border-t border-gold/25 px-5 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block py-2 font-serif text-2xl text-cream no-underline"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="block py-2 font-serif text-2xl text-gold no-underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
