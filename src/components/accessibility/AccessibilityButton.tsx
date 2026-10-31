import { PersonStanding } from 'lucide-react'
import { useAccessibility } from '../../hooks/useAccessibility'
import { isDefault } from '../../utils/accessibilityUtils'
import { useLang } from '../../i18n/LanguageContext'
import { S } from './strings'

export function AccessibilityButton() {
  const { prefs, panelOpen, togglePanel } = useAccessibility()
  const { l } = useLang()
  const label = l(S.fab)

  return (
    <button
      id="a11y-fab"
      type="button"
      className="a11y-fab group fixed bottom-4 right-4 z-[70] flex size-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-[0_4px_12px_rgba(20,80,10,0.25)] hover:bg-brand-900 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent motion-safe:transition motion-safe:hover:scale-105 sm:bottom-6 sm:right-6"
      aria-label={label}
      aria-expanded={panelOpen}
      aria-controls="a11y-panel"
      onClick={togglePanel}
    >
      <PersonStanding className="size-7" aria-hidden="true" />
      {!isDefault(prefs) && (
        <span className="absolute right-0.5 top-0.5 size-3.5 rounded-full border-2 border-white bg-accent" aria-hidden="true" />
      )}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-control bg-ink px-3 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:transition-opacity [@media(hover:none)]:hidden"
      >
        {label}
      </span>
    </button>
  )
}
export default AccessibilityButton
