export type Align = 'default' | 'left' | 'center' | 'right'

export interface A11yPrefs {
  fontSize: number
  lineHeight: number
  letterSpacing: number
  contentScale: number
  readingMask: boolean
  highContrast: boolean
  dyslexiaFont: boolean
  align: Align
  hideImages: boolean
  highlightLinks: boolean
  magnifier: boolean
  highlightHeadings: boolean
  darkMode: boolean
}

export type NumericKey = 'fontSize' | 'lineHeight' | 'letterSpacing' | 'contentScale'
export type ToggleKey =
  | 'readingMask'
  | 'highContrast'
  | 'dyslexiaFont'
  | 'hideImages'
  | 'highlightLinks'
  | 'magnifier'
  | 'highlightHeadings'
  | 'darkMode'

export const A11Y_RANGES: Record<NumericKey, { min: number; max: number; step: number; def: number }> = {
  fontSize: { min: 80, max: 200, step: 10, def: 100 },
  lineHeight: { min: 100, max: 200, step: 10, def: 120 },
  letterSpacing: { min: 100, max: 200, step: 25, def: 100 },
  contentScale: { min: 80, max: 150, step: 10, def: 100 },
}

export const A11Y_DEFAULTS: A11yPrefs = {
  fontSize: 100,
  lineHeight: 120,
  letterSpacing: 100,
  contentScale: 100,
  readingMask: false,
  highContrast: false,
  dyslexiaFont: false,
  align: 'default',
  hideImages: false,
  highlightLinks: false,
  magnifier: false,
  highlightHeadings: false,
  darkMode: false,
}

const STORAGE_KEY = 'seru-a11y'
const ALIGNS: Align[] = ['default', 'left', 'center', 'right']

export function clampStep(key: NumericKey, value: number): number {
  const { min, max, step, def } = A11Y_RANGES[key]
  if (!Number.isFinite(value)) return def
  // Snap to the step grid anchored at min so stored odd values cannot drift.
  const snapped = min + Math.round((value - min) / step) * step
  return Math.min(max, Math.max(min, snapped))
}

export function loadPrefs(): A11yPrefs {
  const out = { ...A11Y_DEFAULTS }
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
    if (!raw || typeof raw !== 'object') return out
    for (const k of Object.keys(A11Y_RANGES) as NumericKey[]) {
      if (typeof raw[k] === 'number') out[k] = clampStep(k, raw[k])
    }
    const bools = out as unknown as Record<string, unknown>
    for (const k of Object.keys(A11Y_DEFAULTS)) {
      if (typeof bools[k] === 'boolean' && typeof raw[k] === 'boolean') bools[k] = raw[k]
    }
    if (ALIGNS.includes(raw.align)) out.align = raw.align
    return out
  } catch {
    return { ...A11Y_DEFAULTS }
  }
}

export function savePrefs(p: A11yPrefs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
  } catch {
    // Storage blocked (private mode, quota): prefs just will not persist.
  }
}

export function isDefault(p: A11yPrefs): boolean {
  return (Object.keys(A11Y_DEFAULTS) as (keyof A11yPrefs)[]).every((k) => p[k] === A11Y_DEFAULTS[k])
}

// Manual self-check; call from the browser console when touching this file.
export function demo(): void {
  const assert = (c: boolean, m: string) => {
    if (!c) throw new Error(m)
  }
  assert(clampStep('fontSize', 999) === 200 && clampStep('fontSize', 10) === 80, 'clamp')
  assert(clampStep('letterSpacing', 112) === 100 && clampStep('letterSpacing', 113) === 125, 'snap')
  assert(clampStep('lineHeight', NaN) === 120, 'nan')
  localStorage.setItem(STORAGE_KEY, '{bad json')
  assert(isDefault(loadPrefs()), 'bad json falls back')
  localStorage.setItem(STORAGE_KEY, '{"fontSize":150,"darkMode":"yes","align":"up"}')
  const p = loadPrefs()
  assert(p.fontSize === 150 && !p.darkMode && p.align === 'default', 'validation')
  localStorage.removeItem(STORAGE_KEY)
}
