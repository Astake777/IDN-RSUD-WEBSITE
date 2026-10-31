import { Download, Eye } from 'lucide-react'
import type { IcuDocument } from '../../data/types'
import { useLang } from '../../i18n/LanguageContext'
import { s } from './strings'

function PdfIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" aria-hidden="true" className={className}>
      <path d="M4 2h22l10 10v32a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#FDF1EF" stroke="#B42318" strokeWidth="2" />
      <path d="M26 2v10h10" fill="none" stroke="#B42318" strokeWidth="2" strokeLinejoin="round" />
      <rect x="0" y="26" width="30" height="13" rx="2" fill="#B42318" />
      <text x="15" y="35.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
        PDF
      </text>
    </svg>
  )
}

interface Props {
  doc: IcuDocument
  onPreview: (doc: IcuDocument, opener: HTMLElement) => void
}

const btn =
  'inline-flex min-h-11 items-center gap-2 rounded-control px-4 text-sm font-semibold transition-colors motion-reduce:transition-none'

export function DocumentCard({ doc, onPreview }: Props) {
  const { l, lang } = useLang()
  const updated = doc.updatedAt
    ? new Date(doc.updatedAt).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-GB', { dateStyle: 'medium' })
    : null

  return (
    <article className="flex flex-col gap-4 rounded-card border border-line bg-white p-4 shadow-card sm:flex-row sm:items-start sm:p-5">
      <PdfIcon className="h-12 w-10 shrink-0" />
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-bold break-words text-ink">{doc.title}</h3>
        {doc.description && <p className="mt-1 text-ink-soft">{doc.description}</p>}
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-soft">
          <span className="break-all">{doc.fileName}</span>
          {doc.sizeLabel && <span>{doc.sizeLabel}</span>}
          {updated && (
            <span>
              {l(s.updated)} <time dateTime={doc.updatedAt}>{updated}</time>
            </span>
          )}
        </p>
        {doc.available ? (
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={(e) => onPreview(doc, e.currentTarget)}
              className={`${btn} bg-brand-900 text-white hover:bg-brand-700`}
            >
              <Eye aria-hidden="true" className="size-4" />
              {l(s.preview)}
            </button>
            <a
              href={doc.filePath}
              download={doc.fileName}
              className={`${btn} border border-line text-brand-900 hover:bg-brand-50`}
            >
              <Download aria-hidden="true" className="size-4" />
              {l(s.download)}
            </a>
          </div>
        ) : (
          <p className="mt-3 inline-block rounded-control bg-brand-50 px-3 py-1 text-sm font-semibold text-ink-soft">
            {l(s.unavailable)}
          </p>
        )}
      </div>
    </article>
  )
}
