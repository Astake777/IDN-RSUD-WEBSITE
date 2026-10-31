import type { Lang, Localized } from '../../data/types'
import { navItems } from '../../config/site'
import { ui } from '../../i18n/ui'
import { seru } from '../../data/seru'
import { facilities } from '../../data/facilities'
import { educationTopics } from '../../data/education'
import { documentCategories } from '../../features/berkas/categories'
import { documents } from '../../data/documents'

export type SearchType = 'page' | 'profil' | 'fasilitas' | 'edukasi' | 'berkas'

export interface SearchEntry {
  id: string
  type: SearchType
  title: Localized
  text: Localized
  url: string
}

export interface SearchResult {
  entry: SearchEntry
  /** Language whose text matched (current lang, or the other one as fallback). */
  matchLang: Lang
  snippet: string
}

const join = (parts: (Localized | undefined)[], lists: (string[] | undefined)[][] = [[], []]): Localized => ({
  id: [...parts.map((p) => p?.id ?? ''), ...lists[0].flatMap((l) => l ?? [])].filter(Boolean).join(' '),
  en: [...parts.map((p) => p?.en ?? ''), ...lists[1].flatMap((l) => l ?? [])].filter(Boolean).join(' '),
  jv: [...parts.map((p) => p?.jv ?? p?.id ?? ''), ...(lists[2] ?? lists[0]).flatMap((l) => l ?? [])].filter(Boolean).join(' '),
})

const textOf = (v: Localized, lang: Lang) => v[lang] ?? v.id

let cache: SearchEntry[] | null = null

export function getIndex(): SearchEntry[] {
  if (cache) return cache
  const entries: SearchEntry[] = navItems.map((n) => ({
    id: `page-${n.to}`,
    type: 'page',
    title: ui[n.key],
    text: { id: '', en: '' },
    url: n.to,
  }))
  const p = seru.profil
  entries.push(
    { id: 'profil', type: 'profil', title: p.heading, text: join([p.statement, ...p.paragraphs]), url: '/#profil' },
    { id: 'visi', type: 'profil', title: seru.visi.heading, text: seru.visi.text, url: '/#visi' },
    ...seru.misi.items.map((m, i) => ({
      id: `misi-${i}`,
      type: 'profil' as const,
      title: seru.misi.label,
      text: m,
      url: '/#misi',
    })),
  )
  for (const f of facilities) {
    entries.push({
      id: `fasilitas-${f.slug}`,
      type: 'fasilitas',
      title: f.name,
      text: join([f.description], [[f.functions?.id], [f.functions?.en]]),
      url: `/fasilitas#fasilitas-${f.slug}`,
    })
  }
  for (const e of educationTopics) {
    const parts: Localized[] = [e.summary]
    const idLists: (string[] | undefined)[] = []
    const enLists: (string[] | undefined)[] = []
    for (const s of e.sections) {
      parts.push(s.heading, ...(s.paragraphs ?? []))
      if (s.note) parts.push(s.note)
      idLists.push(s.points?.id)
      enLists.push(s.points?.en)
    }
    parts.push(...(e.importantMessage ?? []))
    entries.push({
      id: `edukasi-${e.slug}`,
      type: 'edukasi',
      title: e.title,
      text: join(parts, [idLists, enLists]),
      url: `/edukasi/${e.slug}`,
    })
  }
  for (const c of documentCategories) {
    entries.push({
      id: `berkas-${c.slug}`,
      type: 'berkas',
      title: c.label,
      text: c.description,
      url: `/berkas-icu?kategori=${c.slug}`,
    })
  }
  for (const d of documents) {
    // Document titles are Indonesian only.
    entries.push({
      id: `doc-${d.id}`,
      type: 'berkas',
      title: { id: d.title, en: d.title },
      text: { id: d.description, en: d.description },
      url: `/berkas-icu?kategori=${d.category}`,
    })
  }
  return (cache = entries)
}

/** Lowercase, strip diacritics; `map[i]` is the index in the source string of folded char i. */
export function fold(s: string): { s: string; map: number[] } {
  let out = ''
  const map: number[] = []
  for (let i = 0; i < s.length; i++) {
    const f = s[i].normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()
    for (let k = 0; k < f.length; k++) map.push(i)
    out += f
  }
  return { s: out, map }
}

export const words = (q: string) => fold(q.trim()).s.split(/\s+/).filter(Boolean)

/** Source-string range of the first occurrence of `word`, or null. */
export function findRange(source: string, word: string): [number, number] | null {
  const f = fold(source)
  const at = f.s.indexOf(word)
  if (at < 0) return null
  return [f.map[at], f.map[at + word.length - 1] + 1]
}

function scoreIn(entry: SearchEntry, lang: Lang, ws: string[]): number {
  const title = fold(textOf(entry.title, lang)).s
  const text = fold(textOf(entry.text, lang)).s
  let score = 0
  for (const w of ws) {
    if (title.startsWith(w) || title.includes(' ' + w)) score += 3
    else if (title.includes(w)) score += 2
    else if (text.includes(w)) score += 1
    else return 0
  }
  return score
}

function snippet(text: string, ws: string[], size = 90): string {
  if (!text) return ''
  const r = ws.map((w) => findRange(text, w)).find(Boolean)
  if (!r) return text.length > size ? text.slice(0, size).trimEnd() + '...' : text
  const start = Math.max(0, r[0] - Math.floor(size / 3))
  const end = Math.min(text.length, start + size)
  return (start > 0 ? '...' : '') + text.slice(start, end).trim() + (end < text.length ? '...' : '')
}

export function search(query: string, lang: Lang, limit = 8): SearchResult[] {
  const ws = words(query)
  if (ws.join('').length < 2) return []
  // Fallback language: English readers also match Indonesian text and vice versa.
  const other: Lang = lang === 'en' ? 'id' : 'en'
  const scored: (SearchResult & { score: number })[] = []
  for (const entry of getIndex()) {
    let matchLang = lang
    let score = scoreIn(entry, lang, ws)
    if (!score) {
      // Other language counts as a weaker fallback.
      score = scoreIn(entry, other, ws) * 0.5
      matchLang = other
    }
    if (score) scored.push({ entry, matchLang, score, snippet: snippet(textOf(entry.text, matchLang), ws) })
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit)
}

export function demo() {
  console.assert(fold('Pédoman').s === 'pedoman')
  console.assert(findRange('Café ICU', 'icu')?.join() === '5,8')
  console.assert(search('visi', 'id')[0]?.entry.id === 'visi')
  console.assert(search('mission', 'id').length > 0, 'fallback language')
  console.assert(search('x', 'id').length === 0)
}
