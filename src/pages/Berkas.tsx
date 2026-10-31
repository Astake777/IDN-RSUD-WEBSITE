import { FolderOpen } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { documents, documentsByCategory } from '../data/documents'
import type { DocumentCategory, IcuDocument } from '../data/types'
import { DocumentCard } from '../features/berkas/DocumentCard'
import { DocumentSidebar } from '../features/berkas/DocumentSidebar'
import { PDFPreview } from '../features/berkas/PDFPreview'
import { defaultCategory, documentCategories, isDocumentCategory } from '../features/berkas/categories'
import { s } from '../features/berkas/strings'
import { useLang } from '../i18n/LanguageContext'

const counts = Object.fromEntries(
  documentCategories.map((c) => [c.slug, documents.filter((d) => d.category === c.slug).length]),
) as Record<DocumentCategory, number>

export default function Berkas() {
  const { l } = useLang()
  const [params, setParams] = useSearchParams()
  const raw = params.get('kategori')
  const active = isDocumentCategory(raw) ? raw : defaultCategory
  const category = documentCategories.find((c) => c.slug === active)!
  const list = documentsByCategory(active)
  const [preview, setPreview] = useState<{ doc: IcuDocument; opener: HTMLElement } | null>(null)

  return (
    <>
      <PageHeader title={l(s.title)} lead={l(s.intro)} crumbs={[{ label: l(s.title) }]} />
      <div className="container-site py-10 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-10">
          <aside className="min-w-0 lg:sticky lg:top-[136px]">
            <DocumentSidebar
              active={active}
              counts={counts}
              onSelect={(slug) => setParams({ kategori: slug }, { replace: true })}
            />
          </aside>

          <section aria-labelledby="berkas-list-heading" className="min-w-0">
            <div aria-live="polite">
              <h2 id="berkas-list-heading" className="text-2xl font-extrabold text-ink">
                {l(category.label)}
              </h2>
              <p className="mt-1 text-ink-soft">
                {l(category.description)} {list.length} {l(s.docCount)}.
              </p>
            </div>

            {list.length > 0 ? (
              <ul className="mt-6 space-y-4">
                {list.map((doc) => (
                  <li key={doc.id}>
                    <DocumentCard doc={doc} onPreview={(d, opener) => setPreview({ doc: d, opener })} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 flex flex-col items-center rounded-card border border-line bg-brand-50 px-6 py-12 text-center">
                <FolderOpen aria-hidden="true" className="size-10 text-brand-700" />
                <p className="mt-4 text-lg font-bold text-ink">{l(s.emptyTitle)}</p>
                <p className="mt-1 max-w-md text-ink-soft">{l(s.emptyBody)}</p>
              </div>
            )}
          </section>
        </div>
      </div>

      <img
        src="/images/gedung-rs.webp"
        alt={l(s.buildingAlt)}
        width={1024}
        height={576}
        loading="lazy"
        decoding="async"
        className="block h-[280px] w-full object-cover sm:h-[340px]"
      />

      {preview && <PDFPreview doc={preview.doc} opener={preview.opener} onClose={() => setPreview(null)} />}
    </>
  )
}
