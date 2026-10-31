import { Link } from 'react-router-dom'
import { useLang } from '../../i18n/LanguageContext'
import type { Localized } from '../../data/types'
import { s } from './strings'

const links: { to: string; label: Localized }[] = [
  { to: '#profil', label: { id: 'Profil ICU', en: 'ICU profile', jv: 'Profil ICU' } },
  { to: '/edukasi', label: { id: 'Edukasi', en: 'Education', jv: 'Edukasi' } },
  { to: '/fasilitas', label: { id: 'Fasilitas', en: 'Facilities', jv: 'Fasilitas' } },
  { to: '/member', label: { id: 'Tim ICU', en: 'ICU team', jv: 'Tim ICU' } },
  { to: '/berkas-icu', label: { id: 'Berkas', en: 'Documents', jv: 'Berkas' } },
]

const link =
  'inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-ink/80 transition-colors hover:bg-white/80 hover:text-brand-900'

// Photo first; a frosted panel carries the title and quiet section links over its left side.
export function HomeHero() {
  const { l } = useLang()

  return (
    <section aria-labelledby="hero-title" className="relative border-b border-line bg-brand-50 lg:h-[540px]">
      <img
        src="/images/hero-icu.webp"
        width={1418}
        height={752}
        alt={l(s.heroAlt)}
        loading="eager"
        fetchPriority="high"
        className="block aspect-[16/9] w-full object-cover object-left lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:h-full lg:w-[58%]"
      />
      <div aria-hidden className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--color-brand-50)_42%,transparent_56%)] lg:block" />

      <div className="relative lg:flex lg:h-full lg:items-center">
        <div className="container-site py-8 lg:py-0">
          <div className="max-w-xl lg:max-w-[30rem] lg:rounded-card lg:border lg:border-white/60 lg:bg-white/55 lg:p-9 lg:shadow-[0_8px_32px_rgb(20_80_10/0.12)] lg:backdrop-blur-md">
            <p className="text-sm font-semibold text-brand-700">{l(s.heroKicker)}</p>
            <p
              id="hero-title"
              className="mt-3 text-[length:calc(2rem*var(--a11y-fs,1))] font-extrabold leading-[1.1] tracking-tight text-ink text-balance sm:text-[length:calc(2.75rem*var(--a11y-fs,1))]"
            >
              {l(s.heroTitle)}
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft lg:text-ink/75">{l(s.heroLead)}</p>

            <nav aria-label={l(s.heroNav)} className="mt-6 border-t border-ink/10 pt-4">
              <ul className="-ml-3 flex flex-wrap gap-y-1">
                {links.map(({ to, label }) => (
                  <li key={to}>
                    {to.startsWith('#') ? (
                      <a href={to} className={link}>{l(label)}</a>
                    ) : (
                      <Link to={to} className={link}>{l(label)}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
