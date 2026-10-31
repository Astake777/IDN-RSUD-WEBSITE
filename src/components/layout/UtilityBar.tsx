import { social } from '../../config/site'
import { useLang } from '../../i18n/LanguageContext'
import type { Lang } from '../../data/types'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../icons/BrandIcons'

const links = [
  { ...social.instagram, Icon: InstagramIcon, name: 'Instagram' },
  { ...social.youtube, Icon: YoutubeIcon, name: 'YouTube' },
  { ...social.facebook, Icon: FacebookIcon, name: 'Facebook' },
]

export function UtilityBar() {
  const { t, lang, setLang } = useLang()

  return (
    <div className="bg-brand-900 text-white text-[0.8125rem]">
      <div className="container-site flex min-h-10 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-x-5">
          <span className="hidden font-semibold sm:inline">{t('patientsVisitors')}</span>
          <ul className="flex items-center gap-1 sm:gap-3">
            {links.map(({ url, label, Icon, name }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1.5 rounded px-1.5 text-white/90 hover:text-white hover:underline"
                >
                  <Icon className="size-4 shrink-0" />
                  <span className="hidden lg:inline">{label}</span>
                  <span className="sr-only lg:hidden">{name}</span>
                  <span className="sr-only">{t('opensNewTab')}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden font-semibold uppercase tracking-wide md:inline">{t('welcome')}</span>
          <div role="group" aria-label={t('language')} className="flex rounded-md border border-white/30 p-0.5">
            {(['id', 'en'] as Lang[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                aria-label={code === 'id' ? t('switchToId') : t('switchToEn')}
                className={`min-h-8 min-w-10 rounded px-2 font-bold uppercase transition-colors ${
                  lang === code ? 'bg-white text-brand-900' : 'text-white hover:bg-white/15'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
