import type { Ref } from 'react'
import { PersonStanding, X } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { S } from './strings'

export const A11Y_TITLE_ID = 'a11y-panel-title'

export default function AccessibilityHeader({ onClose, closeRef }: { onClose: () => void; closeRef: Ref<HTMLButtonElement> }) {
  const { l } = useLang()
  return (
    <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-line bg-white px-4 py-3">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
        <PersonStanding className="size-6" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <h2 id={A11Y_TITLE_ID} className="text-lg font-bold text-ink">
          {l(S.title)}
        </h2>
        <p className="text-sm text-ink-soft">
          {l(S.shortcut)}{' '}
          <kbd className="rounded border border-line bg-brand-50 px-1.5 py-0.5 font-mono text-xs text-ink">Ctrl + Shift + A</kbd>
        </p>
      </div>
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={l(S.close)}
        className="flex size-11 shrink-0 items-center justify-center rounded-control text-ink-soft hover:bg-brand-50 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        <X className="size-5" aria-hidden="true" />
      </button>
    </div>
  )
}
