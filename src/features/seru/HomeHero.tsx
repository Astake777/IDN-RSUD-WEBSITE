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

const row =
  'group flex min-h-12 items-center gap-3 border-b border-line py-2.5 font-semibold text-ink transition-colors hover:text-brand-900'

// Split hero: a short orientation panel on the left so visitors see where to go, the ICU photo on the right.
export function HomeHero() {
  const { l } = useLang()

  return (
    <section aria-labelledby="hero-title" className="grid border-b border-line lg:min-h-[500px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:min-h-[540px]">
      <div className="order-2 flex items-center bg-brand-50 lg:order-1">
        <div className="w-full px-[clamp(1rem,4vw,2rem)] py-10 lg:py-12 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-10">
          <p className="text-sm font-semibold text-brand-700">{l(s.heroKicker)}</p>
          <p id="hero-title" className="mt-2 text-[length:calc(1.75rem*var(--a11y-fs,1))] font-extrabold leading-tight text-ink lg:text-[length:calc(2.25rem*var(--a11y-fs,1))]">
            {l(s.heroTitle)}
          </p>
          <p className="mt-3 max-w-md text-ink-soft">{l(s.heroLead)}</p>

          <nav aria-label={l(s.heroNav)} className="mt-6 max-w-md">
            <p className="text-sm font-bold text-ink">{l(s.heroNav)}</p>
            <ul className="mt-2 border-t border-line">
              {links.map(({ to, label, Icon }) => (
                <li key={to}>
                  {to.startsWith('#') ? (
                    <a href={to} className={row}>
                      <Icon className="size-5 shrink-0 text-brand-700" aria-hidden />
                      <span className="flex-1">{l(label)}</span>
                      <ArrowRight className="size-4 text-ink-soft transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden />
                    </a>
                  ) : (
                    <Link to={to} className={row}>
                      <Icon className="size-5 shrink-0 text-brand-700" aria-hidden />
                      <span className="flex-1">{l(label)}</span>
                      <ArrowRight className="size-4 text-ink-soft transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <img
          src="/images/hero-icu.webp"
          width={1418}
          height={752}
          alt={l(s.heroAlt)}
          loading="eager"
          fetchPriority="high"
          className="block aspect-[16/9] size-full object-cover object-left lg:aspect-auto"
        />
      </div>
    </section>
  )
}
