import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang, Localized, LocalizedOf } from '../data/types'
import { ui, type UiKey } from './ui'

const STORAGE_KEY = 'seru-lang'

interface LanguageValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** UI string by key. */
  t: (key: UiKey) => string
  /** Pick the current language from a content field. */
  l: <T>(value: LocalizedOf<T>) => T
}

const pick = <T,>(v: LocalizedOf<T>, lang: Lang): T => v[lang] ?? v.id

const LanguageContext = createContext<LanguageValue | null>(null)

function readStored(): Lang {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'en' || v === 'jv' ? v : 'id'
  } catch {
    return 'id'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStored)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* private mode: preference just won't persist */
    }
  }, [])

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      setLang,
      t: (key) => pick(ui[key], lang),
      l: (v) => pick(v, lang),
    }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}

export type { Localized }
