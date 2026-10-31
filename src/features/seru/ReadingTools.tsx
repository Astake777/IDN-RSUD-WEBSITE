import { useRef, type RefObject } from 'react'
import { seru } from '../../data/seru'
import { useLang } from '../../i18n/LanguageContext'
import { scrollToId, useScrollFrame } from './hooks'
import { s } from './strings'

export function ReadingProgress({ target }: { target: RefObject<HTMLElement | null> }) {
  const fill = useRef<HTMLElement>(null)
  useScrollFrame(() => {
    const el = target.current
    if (!el || !fill.current) return
    const r = el.getBoundingClientRect()
    const span = r.height - innerHeight
    const p = span > 0 ? Math.min(Math.max(-r.top / span, 0), 1) : 0
    fill.current.style.transform = `scaleX(${p})`
  })
  return (
    <div className="seru__progress" aria-hidden="true">
      <i ref={fill} className="seru__progress-fill" />
    </div>
  )
}

const spyItems = [
  { id: 'profil', no: '01', label: seru.profil.label },
  { id: 'visi', no: '02', label: seru.visi.label },
  { id: 'misi', no: '03', label: seru.misi.label },
]

export function SectionSpy({ active, reduced }: { active: number; reduced: boolean }) {
  const { l } = useLang()
  return (
    <nav aria-label={l(s.sectionsNav)}>
      <ul className="seru__spy">
        {spyItems.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="seru__spy-link"
              aria-label={l(item.label)}
              aria-current={i === active ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault()
                scrollToId(item.id, reduced)
              }}
            >
              {item.no}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
