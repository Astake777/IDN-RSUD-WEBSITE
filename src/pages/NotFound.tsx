import { Link } from 'react-router-dom'
import { PageHeader } from '../components/ui/PageHeader'
import { useLang } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLang()
  return (
    <>
      <PageHeader title={t('notFoundTitle')} crumbs={[{ label: t('notFoundTitle') }]} />
      <section className="container-site py-12 sm:py-16">
        <p className="text-5xl font-extrabold text-brand-700">404</p>
        <p className="mt-3 max-w-xl text-ink-soft">{t('notFoundBody')}</p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-control bg-brand-900 px-6 font-bold text-white hover:bg-brand-700"
        >
          {t('backHome')}
        </Link>
      </section>
    </>
  )
}
