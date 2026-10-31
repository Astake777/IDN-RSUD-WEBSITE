import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Building2, FolderOpen, HeartPulse, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import type { Localized } from '../../data/types'
import { s } from './strings'

const links: { to: string; label: Localized; Icon: LucideIcon }[] = [
  { to: '#profil', label: { id: 'Profil, visi & misi ICU', en: 'ICU profile, vision & mission', jv: 'Profil, visi & misi ICU' }, Icon: HeartPulse },
  { to: '/edukasi', label: { id: 'Edukasi pasien & keluarga', en: 'Patient & family education', jv: 'Edukasi pasien & kulawarga' }, Icon: BookOpen },
  { to: '/fasilitas', label: { id: 'Fasilitas ruangan', en: 'Room facilities', jv: 'Fasilitas ruangan' }, Icon: Building2 },
  { to: '/member', label: { id: 'Tim & struktur organisasi', en: 'Team & organisation chart', jv: 'Tim & struktur organisasi' }, Icon: Users },
  { to: '/berkas-icu', label: { id: 'Berkas & pedoman ICU', en: 'ICU documents & guidelines', jv: 'Berkas & pedoman ICU' }, Icon: FolderOpen },
]

// Figures come from the unit's own data (organization.ts, service hours); nothing invented.
const facts: { value: string; label: Localized }[] = [
  { value: '24/7', label: { id: 'Layanan intensif', en: 'Intensive care', jv: 'Layanan intensif' } },
  { value: '26', label: { id: 'Perawat ICU', en: 'ICU nurses', jv: 'Perawat ICU' } },
  { value: '3', label: { id: 'Tim dinas', en: 'Shift teams', jv: 'Tim dinas' } },
]

const tile =
  'group flex h-full min-h-14 items-center gap-3 rounded-card border border-line bg-white px-4 py-3 font-semibold text-ink transition-colors hover:border-brand-700 hover:text-brand-900'

export function HomeHero() {
  const { l } = useLang()

  return (
    <section aria-labelledby="hero-title" className="border-b border-line bg-white">
      <div className="container-site py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-14">
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold text-brand-700">
              <span aria-hidden className="h-0.5 w-8 rounded-full bg-accent" />
              {l(s.heroKicker)}
            </p>
            <p
              id="hero-title"
              className="mt-4 text-[length:calc(2.25rem*var(--a11y-fs,1))] font-extrabold leading-[1.08] tracking-tight text-ink text-balance sm:text-[length:calc(3rem*var(--a11y-fs,1))] xl:text-[length:calc(3.5rem*var(--a11y-fs,1))]"
            >
              {l(s.heroTitle)}
            </p>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">{l(s.heroLead)}</p>

            <dl className="mt-8 grid max-w-md grid-cols-3 border-t border-line pt-5">
              {facts.map((f, i) => (
                <div key={f.value} className={i ? 'border-l border-line pl-4' : ''}>
                  <dt className="sr-only">{l(f.label)}</dt>
                  <dd className="text-[length:calc(1.75rem*var(--a11y-fs,1))] font-extrabold leading-none text-brand-900 tabular-nums">{f.value}</dd>
                  <dd className="mt-1.5 text-sm text-ink-soft">{l(f.label)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="overflow-hidden rounded-card shadow-card">
            <img
              src="/images/hero-icu.webp"
              width={1418}
              height={752}
              alt={l(s.heroAlt)}
              loading="eager"
              fetchPriority="high"
              className="block aspect-[1418/752] w-full object-cover"
            />
          </figure>
        </div>

        <nav aria-label={l(s.heroNav)} className="mt-10 lg:mt-14">
          <p className="text-sm font-bold text-ink">{l(s.heroNav)}</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {links.map(({ to, label, Icon }) => {
              const body = (
                <>
                  <Icon className="size-5 shrink-0 text-brand-700" aria-hidden />
                  <span className="flex-1 leading-snug">{l(label)}</span>
                  <ArrowRight className="size-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden />
                </>
              )
              return (
                <li key={to}>
                  {to.startsWith('#') ? (
                    <a href={to} className={tile}>{body}</a>
                  ) : (
                    <Link to={to} className={tile}>{body}</Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </section>
  )
}
