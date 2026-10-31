import { Download, ExternalLink, Loader2, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { IcuDocument } from '../../data/types'
import { useLang } from '../../i18n/LanguageContext'
import { s } from './strings'

interface Props {
  doc: IcuDocument
  opener: HTMLElement | null
  onClose: () => void
}

const link =
  'inline-flex min-h-11 items-center gap-2 rounded-control border border-line px-3 text-sm font-semibold text-brand-900 hover:bg-brand-50'

/* Native <dialog> + showModal() gives focus trapping, Escape and top-layer for free. */
export function PDFPreview({ doc, opener, onClose }: Props) {
  const { l, t } = useLang()
  const ref = useRef<HTMLDialogElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  // Closing via close() here (not in effect cleanup) so StrictMode's remount can't fire a stray close event.
  const close = () => {
    ref.current?.close()
    onClose()
    opener?.focus()
  }

  return (
    <dialog
      ref={ref}
      aria-labelledby="pdf-preview-title"
      onClose={() => {
        onClose()
        opener?.focus()
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
      className="m-auto h-[min(92dvh,900px)] w-[min(96vw,1100px)] max-w-none overflow-hidden rounded-card bg-white p-0 text-ink shadow-card backdrop:bg-ink/60"
    >
      <div className="flex h-full flex-col">
        <header className="flex items-start gap-3 border-b border-line p-3 sm:p-4">
          <div className="min-w-0 flex-1">
            <h2 id="pdf-preview-title" className="text-lg font-bold break-words">
              {doc.title}
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <a href={doc.filePath} target="_blank" rel="noopener" className={link}>
                <ExternalLink aria-hidden="true" className="size-4" />
                {l(s.openNewTab)}
                <span className="sr-only"> {t('opensNewTab')}</span>
              </a>
              <a href={doc.filePath} download={doc.fileName} className={link}>
                <Download aria-hidden="true" className="size-4" />
                {l(s.download)}
              </a>
            </div>
            <p className="mt-2 text-xs text-ink-soft">{l(s.mobileNote)}</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={l(s.close)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-control text-ink hover:bg-brand-50"
          >
            <X aria-hidden="true" className="size-6" />
          </button>
        </header>
        <div className="relative flex-1 bg-brand-50">
          {!loaded && (
            <p role="status" className="absolute inset-0 flex items-center justify-center gap-2 text-ink-soft">
              <Loader2 aria-hidden="true" className="size-5 animate-spin motion-reduce:animate-none" />
              {l(s.loadingPdf)}
            </p>
          )}
          <iframe src={doc.filePath} title={doc.title} onLoad={() => setLoaded(true)} className="size-full border-0" />
        </div>
      </div>
    </dialog>
  )
}
