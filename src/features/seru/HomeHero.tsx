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

export function HomeHero() {
  const { l } = useLang()

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line bg-brand-50 lg:h-[540px]">
      {/* Blurred copy fills the left so the photo runs edge to edge; the sharp photo fades in on the right, clear of the text. */}
      <img src="/images/hero-icu.webp" alt="" aria-hidden className="absolute inset-0 hidden size-full scale-110 object-cover opacity-70 blur-2xl lg:block" />
      <img
        src="/images/hero-icu.webp"
        width={1418}
        height={752}
        alt={l(s.heroAlt)}
        loading="eager"
        fetchPriority="high"
        className="relative block aspect-[16/9] w-full object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:h-full lg:w-[60%] lg:object-left lg:[mask-image:linear-gradient(90deg,transparent,#000_7%)]"
      />
      <div aria-hidden className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgb(237_245_234/0.85)_0%,rgb(237_245_234/0.6)_30%,transparent_42%)] lg:block" />

      <div className="relative lg:flex lg:h-full lg:items-center">
        <div className="container-site py-8 lg:py-0">
          <div className="max-w-xl lg:max-w-[24rem] xl:max-w-[31rem]">
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
