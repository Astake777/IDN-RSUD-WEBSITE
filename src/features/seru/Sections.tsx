import { ArrowRight } from 'lucide-react'
import { useId, useRef, useState, type Ref } from 'react'
import { Link } from 'react-router-dom'
import { seru } from '../../data/seru'
import { useLang } from '../../i18n/LanguageContext'
import { scrollToId, useActiveOnScroll, useScrollFrame } from './hooks'
import { nextTopics, s } from './strings'

interface SectionProps {
  sectionRef: Ref<HTMLElement>
  reduced: boolean
}

const readBand = '-42% 0px -42% 0px'
const cls = (...names: (string | false)[]) => names.filter(Boolean).join(' ')

export function ProfilSection({ sectionRef, reduced }: SectionProps) {
  const { l } = useLang()
  const h = useId()
  const p = seru.profil
  const [active, readRef] = useActiveOnScroll(p.paragraphs.length + 1, readBand)

  return (
    <section ref={sectionRef} id="profil" tabIndex={-1} aria-labelledby={h} className="seru__section seru__profil">
      <div className="seru__wrap seru__row">
        <div className="seru__label">
          <span className="seru__no">01</span>
          <span className="seru__name">{l(p.label)}</span>
        </div>
        <div className="seru__body">
          <h2 id={h} className="seru__h2">
            {l(p.heading)}
          </h2>
          <div className="seru__key">
            <h3 className="seru__key-title">{l(p.keyTitle)}</h3>
            <ul className="seru__key-list">
              {p.keyPoints.map((k, i) => (
                <li key={i}>
                  <span className={i === 0 ? 'seru__hours' : 'seru__strong'}>{l(k.strong)}</span> {l(k.rest)}
                </li>
              ))}
            </ul>
          </div>
          <p ref={readRef(0)} className={cls('seru__statement seru__read', active === 0 && 'is-current')}>
            {l(p.statement)}
          </p>
          {p.paragraphs.map((text, i) => (
            <p key={i} ref={readRef(i + 1)} className={cls('seru__p seru__read', active === i + 1 && 'is-current')}>
              {l(text)}
            </p>
          ))}
          <a
            href="#visi"
            className="seru__link seru__skip"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('visi', reduced)
            }}
          >
            {l(p.toVisi)}
          </a>
        </div>
      </div>
    </section>
  )
}

export function VisiSection({ sectionRef, reduced }: SectionProps) {
  const { l } = useLang()
  const h = useId()
  const track = useRef<HTMLElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const words = `“${l(seru.visi.text)}”`.split(' ')
  const [lit, setLit] = useState(0)

  useScrollFrame(() => {
    if (!track.current || !inner.current) return
    const stick = parseFloat(getComputedStyle(inner.current).top) || 0
    const r = track.current.getBoundingClientRect()
    // The inner panel pins at `stick`, so progress runs from pinning until the track's end leaves the viewport.
    const span = r.height - innerHeight + stick
    const p = span > 0 ? Math.min(Math.max((stick - r.top) / span, 0), 1) : 1
    setLit(Math.round(Math.min(p * 1.15, 1) * words.length))
  })

  const setRefs = (el: HTMLElement | null) => {
    track.current = el
    if (typeof sectionRef === 'function') sectionRef(el)
  }

  return (
    <section ref={setRefs} id="visi" tabIndex={-1} aria-labelledby={h} className="seru__section seru__visi">
      <div ref={inner} className="seru__visi-in">
        <div className="seru__wrap seru__row">
          <div className="seru__label">
            <span className="seru__no">02</span>
            <span className="seru__name">{l(seru.visi.label)}</span>
          </div>
          <div>
            <h2 id={h} className="seru__visi-h2">
              {l(seru.visi.heading)}
            </h2>
            <blockquote className="seru__quote">
              {words.map((w, i) => (
                <span key={i}>
                  <span className={cls('seru__w', (reduced || i < lit) && 'is-on')}>{w}</span>{' '}
                </span>
              ))}
            </blockquote>
            {!reduced && <p className="seru__hint">{l(seru.visi.hint)}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export function MisiSection({ sectionRef, reduced }: SectionProps) {
  const { l } = useLang()
  const h = useId()
  const items = seru.misi.items
  const [active, itemRef, els] = useActiveOnScroll(items.length, readBand, 0)

  return (
    <section ref={sectionRef} id="misi" tabIndex={-1} aria-labelledby={h} className="seru__section seru__misi">
      <div className="seru__wrap seru__row">
        <div className="seru__label seru__panel">
          <div>
            <span className="seru__idx" aria-live="polite">
              {active + 1}
              <small className="seru__idx-total"> / {items.length}</small>
            </span>
            <span className="seru__name">{l(seru.misi.label)}</span>
          </div>
          <ul className="seru__dots" aria-label={l(s.missionDots)}>
            {items.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  className="seru__dot"
                  aria-label={`${l(s.missionN)} ${i + 1}`}
                  aria-current={i === active ? 'true' : undefined}
                  onClick={() => els.current[i]?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' })}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 id={h} className="seru__h2">
            {l(seru.misi.heading)}
          </h2>
          <ol className="seru__mission">
            {items.map((text, i) => (
              <li key={i} ref={itemRef(i)} className={cls('seru__mission-item seru__read', active === i && 'is-current')}>
                <span className="seru__mission-n" aria-hidden="true">
                  {i + 1}
                </span>
                {l(text)}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function NextEducation({ reduced }: { reduced: boolean }) {
  const { l } = useLang()
  const h = useId()
  const toTop = () => {
    scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <section aria-labelledby={h} className="seru__next">
      <div className="seru__wrap">
        <div className="seru__next-in">
          <h2 id={h} className="seru__h2">
            {l(s.nextTitle)}
          </h2>
          <p className="seru__p">{l(s.nextLead)}</p>
          <ul className="seru__more">
            {nextTopics.map((topic) => (
              <li key={topic.to}>
                <Link to={topic.to} className="seru__more-link">
                  <span className="seru__more-label">{l(topic.label)}</span>
                  <ArrowRight className="seru__more-icon" size={20} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className="seru__up" onClick={toTop}>
            {l(s.backToTop)}
          </button>
        </div>
      </div>
    </section>
  )
}
