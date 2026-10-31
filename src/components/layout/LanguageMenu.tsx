import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import type { Lang } from '../../data/types'
import { useLang } from '../../i18n/LanguageContext'

const languages: { code: Lang; short: string; name: string }[] = [
  { code: 'id', short: 'ID', name: 'Bahasa Indonesia' },
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'jv', short: 'JV', name: 'Basa Jawa' },
]

export function LanguageMenu() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const items = useRef<(HTMLButtonElement | null)[]>([])
  const menuId = useId()
  const current = languages.find((l) => l.code === lang) ?? languages[0]

  useEffect(() => {
    if (!open) return
    items.current[languages.findIndex((l) => l.code === lang)]?.focus()
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open, lang])

  const choose = (code: Lang) => {
    setLang(code)
    setOpen(false)
    button.current?.focus()
  }

  const onMenuKey = (e: KeyboardEvent) => {
    const i = items.current.indexOf(document.activeElement as HTMLButtonElement)
    const move = (n: number) => {
      e.preventDefault()
      items.current[(n + languages.length) % languages.length]?.focus()
    }
    if (e.key === 'ArrowDown') move(i + 1)
    else if (e.key === 'ArrowUp') move(i - 1)
    else if (e.key === 'Home') move(0)
    else if (e.key === 'End') move(languages.length - 1)
    else if (e.key === 'Escape') {
      e.preventDefault()
      setOpen(false)
      button.current?.focus()
    } else if (e.key === 'Tab') setOpen(false)
  }

  return (
    <div ref={root} className="relative">
      <button
        ref={button}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t('chooseLanguage')}: ${current.name}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault()
            setOpen(true)
          }
        }}
        className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-white/40 bg-white/10 px-2.5 font-bold text-white hover:bg-white/20"
      >
        <Globe className="size-4" aria-hidden />
        {current.short}
        <ChevronDown className={`size-4 transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={t('chooseLanguage')}
        onKeyDown={onMenuKey}
        className={`absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-card border border-line bg-white py-1 text-ink shadow-card ${
          open ? '' : 'hidden'
        }`}
      >
        {languages.map((l, i) => {
          const selected = l.code === lang
          return (
            <button
              key={l.code}
              ref={(el) => {
                items.current[i] = el
              }}
              type="button"
              role="menuitemradio"
              aria-checked={selected}
              lang={l.code}
              tabIndex={-1}
              onClick={() => choose(l.code)}
              className={`flex min-h-11 w-full items-center gap-3 px-3 text-left text-sm hover:bg-brand-50 focus-visible:bg-brand-50 ${
                selected ? 'font-bold text-brand-900' : ''
              }`}
            >
              <span className="w-7 text-xs font-bold text-ink-soft">{l.short}</span>
              <span className="flex-1">{l.name}</span>
              {selected && <Check className="size-4 text-brand-700" aria-hidden />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
