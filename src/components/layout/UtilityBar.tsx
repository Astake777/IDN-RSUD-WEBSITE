import { Clock } from 'lucide-react'
import { contact, social } from '../../config/site'
import { useLang } from '../../i18n/LanguageContext'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../icons/BrandIcons'
import { LanguageMenu } from './LanguageMenu'

const links = [
  { ...social.instagram, Icon: InstagramIcon, name: 'Instagram' },
  { ...social.youtube, Icon: YoutubeIcon, name: 'YouTube' },
  { ...social.facebook, Icon: FacebookIcon, name: 'Facebook' },
]

export function UtilityBar() {
  const { t } = useLang()

  return (
    <div className="bg-brand-900 text-white text-[0.8125rem]">
      <div className="container-wide flex min-h-10 items-center justify-between gap-4 lg:text-sm">
        <div className="flex min-w-0 items-center gap-x-5 lg:gap-x-10">
          <span className="hidden whitespace-nowrap font-semibold sm:inline">{t('patientsVisitors')}</span>
          <ul className="flex items-center gap-1 sm:gap-3 lg:gap-8">
            {links.map(({ url, label, Icon, name }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1.5 rounded px-1.5 text-white/90 hover:text-white hover:underline"
                >
                  <Icon className="size-4 shrink-0" />
                  <span className="hidden whitespace-nowrap xl:inline">{label}</span>
                  <span className="sr-only xl:hidden">{name}</span>
                  <span className="sr-only">{t('opensNewTab')}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <p className="hidden items-center gap-1.5 whitespace-nowrap lg:inline-flex">
            <Clock className="size-4 shrink-0" aria-hidden />
            <span>{t('clinicDays')}</span>
            <span className="font-semibold">{contact.clinicHoursShort}</span>
          </p>
          <span className="hidden font-semibold uppercase tracking-wide xl:inline">{t('welcome')}</span>
          <LanguageMenu />
        </div>
      </div>
    </div>
  )
}
