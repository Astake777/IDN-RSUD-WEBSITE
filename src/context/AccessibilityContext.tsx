import { createContext, useEffect, useMemo, useReducer, useState, type ReactNode } from 'react'
import {
  A11Y_DEFAULTS,
  A11Y_RANGES,
  clampStep,
  loadPrefs,
  savePrefs,
  type A11yPrefs,
  type Align,
  type NumericKey,
  type ToggleKey,
} from '../utils/accessibilityUtils'

export interface AccessibilityValue {
  prefs: A11yPrefs
  step(key: NumericKey, dir: 1 | -1): void
  toggle(key: ToggleKey): void
  setAlign(a: Align): void
  reset(): void
  panelOpen: boolean
  setPanelOpen(open: boolean): void
  togglePanel(): void
}

type Action =
  | { type: 'step'; key: NumericKey; dir: 1 | -1 }
  | { type: 'toggle'; key: ToggleKey }
  | { type: 'align'; value: Align }
  | { type: 'reset' }

function reducer(s: A11yPrefs, a: Action): A11yPrefs {
  switch (a.type) {
    case 'step':
      return { ...s, [a.key]: clampStep(a.key, s[a.key] + a.dir * A11Y_RANGES[a.key].step) }
    case 'toggle':
      return { ...s, [a.key]: !s[a.key] }
    case 'align':
      return { ...s, align: s.align === a.value ? 'default' : a.value }
    case 'reset':
      return { ...A11Y_DEFAULTS }
  }
}

const FONT_LINK_ID = 'a11y-dyslexic-font'
const FONT_HREF = 'https://cdn.jsdelivr.net/npm/@fontsource/opendyslexic@5.2.5/index.css'

function applyToDom(p: A11yPrefs) {
  const root = document.documentElement
  root.style.setProperty('--a11y-fs', String(p.fontSize / 100))
  root.style.setProperty('--a11y-lh', String(p.lineHeight / 100))
  root.style.setProperty('--a11y-ls', String(p.letterSpacing / 100))
  root.style.setProperty('--a11y-zoom', String(p.contentScale / 100))

  const flags: [string, boolean][] = [
    ['data-a11y-fs', p.fontSize !== A11Y_DEFAULTS.fontSize],
    ['data-a11y-lh', p.lineHeight !== A11Y_DEFAULTS.lineHeight],
    ['data-a11y-ls', p.letterSpacing !== A11Y_DEFAULTS.letterSpacing],
    ['data-a11y-zoom', p.contentScale !== A11Y_DEFAULTS.contentScale],
    ['data-a11y-contrast', p.highContrast],
    ['data-a11y-dyslexia', p.dyslexiaFont],
    ['data-a11y-hide-images', p.hideImages],
    ['data-a11y-links', p.highlightLinks],
    ['data-a11y-headings', p.highlightHeadings],
    ['data-a11y-dark', p.darkMode],
    ['data-a11y-mask', p.readingMask],
    ['data-a11y-magnifier', p.magnifier],
  ]
  for (const [name, on] of flags) {
    if (on) root.setAttribute(name, '')
    else root.removeAttribute(name)
  }
  if (p.align === 'default') root.removeAttribute('data-a11y-align')
  else root.setAttribute('data-a11y-align', p.align)

  if (p.dyslexiaFont && !document.getElementById(FONT_LINK_ID)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = FONT_HREF
    link.id = FONT_LINK_ID
    document.head.appendChild(link)
  }
}

export const AccessibilityContext = createContext<AccessibilityValue | null>(null)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [prefs, dispatch] = useReducer(reducer, undefined, loadPrefs)
  const [panelOpen, setPanelOpen] = useState(false)

  useEffect(() => {
    savePrefs(prefs)
    applyToDom(prefs)
  }, [prefs])

  const value = useMemo<AccessibilityValue>(
    () => ({
      prefs,
      step: (key, dir) => dispatch({ type: 'step', key, dir }),
      toggle: (key) => dispatch({ type: 'toggle', key }),
      setAlign: (value) => dispatch({ type: 'align', value }),
      reset: () => dispatch({ type: 'reset' }),
      panelOpen,
      setPanelOpen,
      togglePanel: () => setPanelOpen((o) => !o),
    }),
    [prefs, panelOpen],
  )

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
}
