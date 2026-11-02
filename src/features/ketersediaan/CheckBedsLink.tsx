import { Link } from 'react-router-dom'
import { BedDouble } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { s } from './strings'

export const BEDS_PATH = '/ketersediaan-tempat-tidur'

export function CheckBedsLink({ className = '' }: { className?: string }) {
  const { l } = useLang()
  return (
    <Link
      to={BEDS_PATH}
      className={`inline-flex min-h-12 items-center gap-2.5 rounded-control bg-brand-700 px-5 font-bold text-white shadow-card transition-colors hover:bg-brand-900 ${className}`}
    >
      <BedDouble aria-hidden className="size-5" />
      {l(s.cta)}
    </Link>
  )
}
