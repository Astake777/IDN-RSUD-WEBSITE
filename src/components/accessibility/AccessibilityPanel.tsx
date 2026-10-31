import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { useAccessibility } from '../../hooks/useAccessibility'
import AccessibilityHeader, { A11Y_TITLE_ID } from './AccessibilityHeader'
import AccessibilityGrid from './AccessibilityGrid'
import AccessibilityReset from './AccessibilityReset'

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'

function isEditable(t: EventTarget | null) {
  if (!(t instanceof HTMLElement)) return false
  return t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName)
}

export function AccessibilityPanel() {
  const { panelOpen, setPanelOpen, togglePanel } = useAccessibility()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  // Only listener for the Ctrl+Shift+A shortcut and Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a' && !isEditable(e.target)) {
        e.preventDefault()
        togglePanel()
      } else if (e.key === 'Escape' && panelOpen) {
        setPanelOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [panelOpen, setPanelOpen, togglePanel])

  useEffect(() => {
    if (panelOpen) closeRef.current?.focus()
    else if (wasOpen.current) document.getElementById('a11y-fab')?.focus()
    wasOpen.current = panelOpen
  }, [panelOpen])

  if (!panelOpen) return null

  const trap = (e: ReactKeyboardEvent) => {
    if (e.key !== 'Tab' || !panelRef.current) return
    const items = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
    const first = items[0]
    const last = items[items.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  return (
    <div
      ref={panelRef}
      id="a11y-panel"
      role="dialog"
      aria-modal="false"
      aria-labelledby={A11Y_TITLE_ID}
      onKeyDown={trap}
      className="a11y-panel fixed bottom-20 left-4 right-4 z-[70] flex max-h-[85dvh] flex-col overflow-hidden rounded-card border border-line bg-white text-ink shadow-card sm:bottom-24 sm:left-auto sm:right-6 sm:w-[min(46rem,calc(100vw-2rem))] motion-safe:transition motion-safe:duration-200 motion-safe:starting:translate-y-2 motion-safe:starting:opacity-0"
    >
      <AccessibilityHeader closeRef={closeRef} onClose={() => setPanelOpen(false)} />
      <div className="flex-1 overflow-y-auto overscroll-contain">
        <AccessibilityGrid />
      </div>
      <AccessibilityReset />
    </div>
  )
}
export default AccessibilityPanel
