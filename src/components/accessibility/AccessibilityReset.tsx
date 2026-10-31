import { useEffect, useState } from 'react'
import { RotateCcw } from 'lucide-react'
import { useAccessibility } from '../../hooks/useAccessibility'
import { useVoice } from '../../hooks/useVoice'
import { useLang } from '../../i18n/LanguageContext'
import { S } from './strings'

export default function AccessibilityReset() {
  const { reset } = useAccessibility()
  const voice = useVoice()
  const { l } = useLang()
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!done) return
    const t = window.setTimeout(() => setDone(false), 3000)
    return () => window.clearTimeout(t)
  }, [done])

  const onReset = () => {
    reset()
    voice.stop()
    voice.setEnabled(false)
    setDone(true)
  }

  return (
    <div className="sticky bottom-0 flex flex-wrap items-center gap-3 border-t border-line bg-white px-4 py-3">
      <button
        type="button"
        onClick={onReset}
        className="inline-flex min-h-11 items-center gap-2 rounded-control bg-brand-700 px-4 text-sm font-semibold text-white hover:bg-brand-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        {l(S.reset)}
      </button>
      <p role="status" className="text-sm text-ink-soft">
        {done ? l(S.resetDone) : ''}
      </p>
    </div>
  )
}
