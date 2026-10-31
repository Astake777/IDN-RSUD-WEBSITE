import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronRight, X } from 'lucide-react'
import { navItems, registrationUrl } from '../../config/site'
import { useLang } from '../../i18n/LanguageContext'
import { SiteSearch } from '../search/SiteSearch'

interface Props {
  open: boolean
  onClose: () => void
}

export function MobileNavigation({ open, onClose }: Props) {
  const { t } = useLang()
  const panel = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  // Route change closes the drawer.
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  useEffect(() => {
    if (!open) return
    const opener = document.activeElement as HTMLElement | null
    const node = panel.current
    node?.querySelector<HTMLElement>('button, a')?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab' || !node) return
      const items = node.querySelectorAll<HTMLElement>('a, button, input')
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      opener?.focus()
    }
  }, [open, onClose])

  return (
    <div className={`fixed inset-0 z-50 xl:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-200 motion-reduce:transition-none ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        id="mobile-nav"
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={t('mainNav')}
        inert={!open}
        className={`absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col bg-white shadow-card transition-transform duration-250 ease-out motion-reduce:transition-none ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-4">
          <span className="font-bold text-brand-900">{t('menu')}</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-md hover:bg-brand-50"
            aria-label={t('closeMenu')}
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <div className="border-b border-line p-4 md:hidden">
          <SiteSearch variant="mobile" onNavigate={onClose} />
        </div>
        <nav className="overflow-y-auto p-2">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-md border-l-4 px-4 font-semibold ${
                      isActive ? 'border-accent bg-brand-50 text-brand-900' : 'border-transparent text-ink hover:bg-brand-50'
                    }`
                  }
                >
                  {t(item.key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto border-t border-line p-4">
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-1.5 rounded-control bg-brand-900 px-5 font-bold text-white hover:bg-brand-700"
          >
            {t('registerOnline')}
            <ChevronRight className="size-4" aria-hidden />
            <span className="sr-only"> {t('opensNewTab')}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
