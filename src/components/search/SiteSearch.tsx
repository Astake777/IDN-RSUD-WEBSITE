import { Search } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'

export interface SiteSearchProps {
  variant: 'desktop' | 'mobile'
  /** Called after a result is chosen (mobile drawer closes itself). */
  onNavigate?: () => void
}

// TODO(agent-search): replace with the real search (index + results dropdown).
export function SiteSearch({ variant }: SiteSearchProps) {
  const { t } = useLang()
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-soft" aria-hidden />
      <input
        type="search"
        id={`site-search-${variant}`}
        aria-label={t('searchLabel')}
        placeholder={t('searchPlaceholder')}
        className="h-11 w-full rounded-md border border-line bg-brand-50 pl-9 pr-3 text-sm placeholder:text-ink-soft"
      />
    </div>
  )
}
