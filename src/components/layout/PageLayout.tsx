import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useLang } from '../../i18n/LanguageContext'
import { Footer } from './Footer'
import { MainNavbar } from './MainNavbar'
import { UtilityBar } from './UtilityBar'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // Pages are lazy, so the target may appear a few frames after navigation.
    const id = decodeURIComponent(hash.slice(1))
    let frame = 0
    let tries = 0
    const find = () => {
      const el = document.getElementById(id)
      if (el) return el.scrollIntoView()
      if (++tries < 120) frame = requestAnimationFrame(find)
    }
    find()
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
  return null
}

export function PageLayout() {
  const { t } = useLang()
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-accent px-4 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        {t('skipToContent')}
      </a>
      <ScrollManager />
      <header className="sticky top-0 z-40">
        <UtilityBar />
        <MainNavbar />
      </header>
      <main id="main" tabIndex={-1} className="min-h-[60vh] outline-none">
        <Suspense
          fallback={
            <p role="status" className="container-site py-24 text-ink-soft">
              {t('loading')}
            </p>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
