import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLang()
  return (
    <section className="container-site py-24">
      <p className="text-6xl font-extrabold text-brand-700">404</p>
      <h1 className="h-section mt-4">{t('notFoundTitle')}</h1>
      <p className="mt-3 max-w-xl text-ink-soft">{t('notFoundBody')}</p>
      <Link to="/" className="mt-8 inline-flex min-h-12 items-center rounded-control bg-brand-900 px-6 font-bold text-white hover:bg-brand-700">
        {t('backHome')}
      </Link>
    </section>
  )
}
