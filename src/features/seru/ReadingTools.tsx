import { useRef, type RefObject } from 'react'
import { seru } from '../../data/seru'
import { useLang } from '../../i18n/LanguageContext'
import { scrollToId, SIZES, useScrollFrame } from './hooks'
import { s } from './strings'

interface ToolbarProps {
  size: number
  onSize: (next: number) => void
  dark: boolean
  onToggleTheme: () => void
}

export function ReadingToolbar({ size, onSize, dark, onToggleTheme }: ToolbarProps) {
  const { l } = useLang()
  return (
    <div className="seru__bar">
      <div className="seru__wrap">
        <p className="seru__bar-name">
          <strong>SERU ICU</strong>
          <span className="seru__hide-sm"> · {l(s.toolbarName)}</span>
        </p>
        <div className="seru__tools" role="group" aria-label={l(s.toolbarName)}>
          <button type="button" className="seru__tool" aria-label={l(s.smaller)} disabled={size === 0} onClick={() => onSize(size - 1)}>
            A−
          </button>
          <button
            type="button"
            className="seru__tool"
            aria-label={l(s.larger)}
            disabled={size === SIZES.length - 1}
            onClick={() => onSize(size + 1)}
          >
            A+
          </button>
          <button type="button" className="seru__tool" aria-pressed={dark} onClick={onToggleTheme}>
            {l(dark ? s.light : s.dark)}
          </button>
        </div>
      </div>
    </div>
  )
}

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
