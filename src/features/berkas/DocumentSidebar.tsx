import type { DocumentCategory } from '../../data/types'
import { useLang } from '../../i18n/LanguageContext'
import { documentCategories } from './categories'
import { s } from './strings'

interface Props {
  active: DocumentCategory
  counts: Record<DocumentCategory, number>
  onSelect: (category: DocumentCategory) => void
}

export function DocumentSidebar({ active, counts, onSelect }: Props) {
  const { l } = useLang()
  return (
    <nav
      aria-label={l(s.categories)}
      className="rounded-card border border-line bg-white p-2"
    >
      <ul className="grid grid-cols-1 gap-1 min-[480px]:grid-cols-2 min-[480px]:gap-2 lg:grid-cols-1">
        {documentCategories.map(({ slug, label, icon: Icon }) => {
          const isActive = slug === active
          return (
            <li key={slug} className="min-w-0">
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelect(slug)}
                className={`relative flex min-h-11 w-full items-center gap-2 rounded-control px-3 py-2.5 text-left text-sm font-semibold transition-colors motion-reduce:transition-none sm:gap-3 sm:text-base ${
                  isActive ? 'bg-brand-50 text-brand-900' : 'text-ink hover:bg-brand-50/60 hover:text-brand-900'
                }`}
              >
                {isActive && (
                  <span aria-hidden="true" className="absolute inset-y-2 left-0 w-1 rounded-full bg-accent" />
                )}
                <Icon aria-hidden="true" className="size-5 shrink-0 text-brand-700" />
                <span className="min-w-0 flex-1 break-words">{l(label)}</span>
                <span className="shrink-0 rounded-full border border-line bg-white px-2 text-xs font-semibold text-ink-soft">
                  {counts[slug]}
                  <span className="sr-only"> {l(s.docCount)}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
