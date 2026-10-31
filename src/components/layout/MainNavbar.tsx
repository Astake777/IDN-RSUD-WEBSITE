import { useCallback, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { navItems } from '../../config/site'
import { useLang } from '../../i18n/LanguageContext'
import { SiteSearch } from '../search/SiteSearch'
import { MobileNavigation } from './MobileNavigation'

export function MainNavbar() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <div className="border-b border-white/10 bg-brand-700">
      <div className="container-wide flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link to="/" aria-label={t('homeLink')} className="shrink-0 rounded">
          <img src="/images/logo.webp" alt="" width={640} height={255} className="h-10 w-auto brightness-0 invert lg:h-14" />
        </Link>

        <nav aria-label={t('mainNav')} className="hidden flex-1 justify-center xl:flex">
          <ul className="flex items-center gap-1 2xl:gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative inline-flex min-h-11 items-center rounded-md px-3 text-base font-semibold 2xl:px-4 2xl:text-[1.0625rem] transition-colors ${
                      isActive
                        ? 'text-white after:absolute after:inset-x-3 after:-bottom-[13px] after:h-[3px] after:rounded-full after:bg-accent'
                        : 'text-white/85 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {t(item.key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden w-56 md:block 2xl:w-72">
            <SiteSearch variant="desktop" />
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/40 px-3 font-semibold text-white hover:bg-white/10 xl:hidden"
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
