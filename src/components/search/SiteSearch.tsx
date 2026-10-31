import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { findRange, search, words, type SearchResult } from './searchIndex'
import { searchStrings as s, typeLabels } from './strings'

export interface SiteSearchProps {
  variant: 'desktop' | 'mobile'
  /** Called after a result is chosen (mobile drawer closes itself). */
  onNavigate?: () => void
}

function Highlight({ text, query }: { text: string; query: string }) {
  const r = words(query).map((w) => findRange(text, w)).find(Boolean)
  if (!r) return <>{text}</>
  return (
    <>
      {text.slice(0, r[0])}
      <mark className="rounded-sm bg-brand-50 text-ink">{text.slice(r[0], r[1])}</mark>
      {text.slice(r[1])}
    </>
  )
}

export function SiteSearch({ variant, onNavigate }: SiteSearchProps) {
  const { t, l, lang } = useLang()
  const navigate = useNavigate()
  const root = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)

  const ready = query.trim().length >= 2
  const results = useMemo(() => (ready ? search(query, lang) : []), [query, lang, ready])
  const expanded = open && ready
  // Desktop field sits on the green navbar; the mobile one lives in the white drawer.
  const onGreen = variant === 'desktop'
  const base = `site-search-${variant}`
  const listId = `${base}-list`
  const optId = (i: number) => `${base}-opt-${i}`

  useEffect(() => {
    if (!expanded) return
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [expanded])

  const go = (r: SearchResult) => {
    navigate(r.entry.url)
    setQuery('')
    setOpen(false)
    setActive(-1)
    onNavigate?.()
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        if (!results.length) return
        e.preventDefault()
        setOpen(true)
        const d = e.key === 'ArrowDown' ? 1 : -1
        setActive((i) => (i + d + results.length) % results.length)
        break
      }
      case 'Enter': {
        const r = results[active] ?? results[0]
        if (expanded && r) {
          e.preventDefault()
          go(r)
        }
        break
      }
      case 'Escape':
        if (query || expanded) {
          e.preventDefault()
          // Keep the drawer's own Escape handler from closing it while clearing the field.
          e.nativeEvent.stopPropagation()
          setQuery('')
          setOpen(false)
          setActive(-1)
        }
        break
      case 'Tab':
        setOpen(false)
        break
    }
  }

  const panel =
    variant === 'desktop'
      ? 'absolute right-0 top-full z-50 mt-2 w-[min(26rem,calc(100vw-2rem))] max-h-[min(28rem,70vh)] shadow-card'
      : 'mt-2 w-full max-h-[50vh]'

  return (
    <div ref={root} className="relative">
      <Search className={`pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 ${onGreen ? 'text-white/80' : 'text-ink-soft'}`} aria-hidden />
      <input
        type="search"
        id={base}
        role="combobox"
        aria-label={t('searchLabel')}
        aria-autocomplete="list"
        aria-expanded={expanded}
        aria-controls={listId}
        aria-activedescendant={expanded && active >= 0 && results[active] ? optId(active) : undefined}
        autoComplete="off"
        placeholder={t('searchPlaceholder')}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
          setActive(-1)
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        className={`h-11 w-full rounded-md border pl-9 pr-3 text-sm ${
          onGreen
            ? 'border-white/30 bg-white/10 text-white placeholder:text-white/80 focus:bg-white/15'
            : 'border-line bg-brand-50 placeholder:text-ink-soft'
        }`}
      />
      <p className="sr-only" aria-live="polite">
        {expanded ? l(s.count).replace('{n}', String(results.length)) : ''}
      </p>
      <div
        className={`${panel} overflow-y-auto rounded-card border border-line bg-white ${expanded ? '' : 'hidden'}`}
      >
        <ul id={listId} role="listbox" aria-label={l(s.results)} className="p-1">
          {results.map((r, i) => (
            <li
              key={r.entry.id}
              id={optId(i)}
              role="option"
              aria-selected={i === active}
              onClick={() => go(r)}
              onPointerMove={() => setActive(i)}
              className={`block min-h-11 cursor-pointer rounded-control px-3 py-2 ${i === active ? 'bg-brand-50 outline-2 outline-brand-700' : 'hover:bg-brand-50'}`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                {l(typeLabels[r.entry.type])}
              </span>
              <span className="block font-semibold text-ink">
                <Highlight text={l(r.entry.title)} query={query} />
              </span>
              {r.snippet && <span className="mt-0.5 block text-sm text-ink-soft">{r.snippet}</span>}
            </li>
          ))}
        </ul>
        {expanded && !results.length && (
          <div className="px-4 py-3 text-sm">
            <p className="font-semibold text-ink">
              {l(s.noResults)} “{query.trim()}”
            </p>
            <p className="mt-1 text-ink-soft">{l(s.hint)}</p>
          </div>
        )}
      </div>
    </div>
  )
}
