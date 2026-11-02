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
      className={`inline-flex min-h-11 items-center gap-2 rounded-control border border-brand-700/30 bg-white/70 px-4 text-[length:calc(0.9375rem*var(--a11y-fs,1))] font-semibold text-brand-900 transition-colors hover:border-brand-700/60 hover:bg-white ${className}`}
    >
      <BedDouble aria-hidden className="size-[1.125rem] text-brand-700" />
      {l(s.cta)}
    </Link>
  )
}
