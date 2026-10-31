import { useCallback, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronRight, Menu } from 'lucide-react'
import { navItems, registrationUrl } from '../../config/site'
import { useLang } from '../../i18n/LanguageContext'
import { SiteSearch } from '../search/SiteSearch'
import { MobileNavigation } from './MobileNavigation'
import { VoiceToggle } from './VoiceToggle'

export function MainNavbar() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <div className="border-b border-line bg-white shadow-[0_1px_0_rgb(22_38_26/0.04)]">
      <div className="container-wide flex h-16 items-center gap-4 lg:h-[72px]">
        <Link to="/" aria-label={t('homeLink')} className="shrink-0 rounded">
          <img src="/images/logo.webp" alt="" width={640} height={255} className="h-10 w-auto lg:h-12" />
        </Link>

        <nav aria-label={t('mainNav')} className="ml-6 hidden flex-1 xl:flex 2xl:ml-10">
          <ul className="flex items-center gap-0.5 2xl:gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-3 text-base font-bold 2xl:px-4 2xl:text-[1.0625rem] transition-colors ${
                      isActive
                        ? 'text-brand-700 after:absolute after:inset-x-3 after:-bottom-[13px] after:h-[3px] after:rounded-full after:bg-accent'
                        : 'text-ink hover:bg-brand-50 hover:text-brand-900'
                    }`
                  }
                >
                  {t(item.key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden w-56 md:block xl:w-44 2xl:w-60">
            <SiteSearch variant="desktop" />
          </div>
          <VoiceToggle />
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-12 shrink-0 items-center gap-1 rounded-control bg-brand-700 px-6 font-bold text-white hover:bg-brand-900 xl:inline-flex"
          >
            {t('registerOnline')}
            <ChevronRight className="size-4" aria-hidden />
            <span className="sr-only"> {t('opensNewTab')}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-3 font-semibold text-ink hover:bg-brand-50 xl:hidden"
          >
            <Menu className="size-5" aria-hidden />
            {t('menu')}
          </button>
        </div>
      </div>

      <MobileNavigation open={open} onClose={close} />
    </div>
  )
}
