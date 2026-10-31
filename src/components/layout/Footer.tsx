import { ArrowUp, Clock, Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { contact, serviceHours, social } from '../../config/site'
import { useLang } from '../../i18n/LanguageContext'
import { FacebookIcon, InstagramIcon, WhatsappIcon, YoutubeIcon } from '../icons/BrandIcons'

// Only accounts with a verified URL are listed; Twitter/X and Google have none in the sources.
const socials = [
  { name: 'Facebook', url: social.facebook.url, Icon: FacebookIcon },
  { name: 'Instagram', url: social.instagram.url, Icon: InstagramIcon },
  { name: 'YouTube', url: social.youtube.url, Icon: YoutubeIcon },
]

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-lg font-bold text-white">
      {children}
      <span className="mt-3 block h-0.5 w-10 bg-accent" aria-hidden />
    </h2>
  )
}

function ContactRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-footer-chip text-white" aria-hidden>
        {icon}
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="text-sm text-footer-text">{label}</p>
        <div className="font-semibold text-white">{children}</div>
      </div>
    </li>
  )
}

export function Footer() {
  const { t, l } = useLang()

  const toTop = () => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <footer className="bg-footer text-footer-text">
      <div className="container-site grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.2fr] lg:gap-12 lg:py-14">
        <div>
          <img
            src="/images/logo.webp"
            alt="RSUD dr. Loekmono Hadi Kudus"
            width={640}
            height={255}
            loading="lazy"
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            SERU ICU (Smart Education Ruang ICU), Instalasi Rawat Intensif RSUD dr. Loekmono Hadi Kudus.
          </p>
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-white hover:underline">
              <Mail className="size-4" aria-hidden />
              {contact.email}
            </a>
          )}
          <ul className="mt-6 flex gap-3" aria-label={t('footerSocial')}>
            {socials.map(({ name, url, Icon }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} ${t('opensNewTab')}`}
                  className="flex size-11 items-center justify-center rounded-full bg-white text-black transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnTitle>{t('footerHoursTitle')}</ColumnTitle>
          <dl className="mt-5 divide-y divide-footer-line text-sm">
            {serviceHours.map((d) => (
              <div key={d.day.en} className="flex items-center justify-between gap-4 py-2">
                <dt>{l(d.day)}</dt>
                <dd className={d.closed ? 'rounded bg-brand-900 px-2 py-0.5 font-semibold text-white' : 'font-semibold text-white tabular-nums'}>
                  {d.closed ? t('closed') : d.hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <ColumnTitle>{t('footerContactTitle')}</ColumnTitle>
          <ul className="mt-5 space-y-4">
            <ContactRow icon={<Clock className="size-4" />} label={t('emergency')}>
              {t('emergencyHours')}
            </ContactRow>
            <ContactRow icon={<Phone className="size-4" />} label={t('phone')}>
              <a href={contact.phoneHref} className="hover:underline">{contact.phoneLabel}</a>
            </ContactRow>
            <ContactRow icon={<WhatsappIcon className="size-4" />} label={t('whatsapp')}>
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {contact.whatsappLabel}
                <span className="sr-only"> {t('opensNewTab')}</span>
              </a>
            </ContactRow>
            <ContactRow icon={<MapPin className="size-4" />} label={t('address')}>
              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-normal leading-relaxed hover:underline">
                {contact.address}
                <span className="sr-only"> ({t('openMaps')}, {t('opensNewTab')})</span>
              </a>
            </ContactRow>
          </ul>
        </div>
      </div>

      <div className="border-t border-footer-line">
        <div className="container-site flex flex-col-reverse items-start justify-between gap-3 py-4 text-sm sm:flex-row sm:items-center">
          <p>© 2025 SIMRS - RSUD dr. Loekmono Hadi Kudus.</p>
          <button
            type="button"
            onClick={toTop}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-footer-line px-4 font-semibold text-white hover:bg-footer-chip"
          >
            <ArrowUp className="size-4" aria-hidden />
            {t('backToTop')}
          </button>
        </div>
      </div>
    </footer>
  )
}
