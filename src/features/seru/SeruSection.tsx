import { useRef, useState, type CSSProperties } from 'react'
import { seru } from '../../data/seru'
import { useLang } from '../../i18n/LanguageContext'
import { readStore, scrollToId, SIZES, useActiveOnScroll, useInView, useReducedMotion, writeStore } from './hooks'
import { ReadingProgress, ReadingToolbar, SectionSpy } from './ReadingTools'
import { MisiSection, NextEducation, ProfilSection, VisiSection } from './Sections'
import { s } from './strings'
import './seru.css'

function storedSize() {
  const n = Number(readStore('seru-size'))
  return Number.isInteger(n) && n >= 0 && n < SIZES.length ? n : 0
}

export function SeruSection() {
  const { t, l } = useLang()
  const reduced = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)
  const inView = useInView(root)
  const [size, setSize] = useState(storedSize)
  const [dark, setDark] = useState(() => readStore('seru-theme') === 'dark')
  const [spyActive, spyRef] = useActiveOnScroll(3, '-50% 0px -50% 0px')

  const changeSize = (next: number) => {
    setSize(next)
    writeStore('seru-size', String(next))
  }
  const toggleTheme = () => {
    setDark(!dark)
    writeStore('seru-theme', dark ? 'light' : 'dark')
  }

  return (
    <div
      ref={root}
      className="seru"
      data-theme={dark ? 'dark' : 'light'}
      style={{ '--seru-scale': SIZES[size] } as CSSProperties}
    >
      <ReadingProgress target={root} />
      <ReadingToolbar size={size} onSize={changeSize} dark={dark} onToggleTheme={toggleTheme} />
      {inView && <SectionSpy active={spyActive} reduced={reduced} />}

      <div className="seru__top">
        <div className="seru__wrap">
          <p className="seru__kicker">{l(seru.kicker)}</p>
          <h1 className="seru__title">
            {l(seru.title)} <span className="seru__title-sub">{l(seru.subtitle)}</span>
          </h1>
          <p className="seru__lead">{l(seru.lead)}</p>
          <a
            href="#profil"
            className="seru__go"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('profil', reduced)
            }}
          >
            {l(s.start)}
          </a>
        </div>
      </div>

      <ProfilSection sectionRef={spyRef(0)} reduced={reduced} />
      <VisiSection sectionRef={spyRef(1)} reduced={reduced} />
      <MisiSection sectionRef={spyRef(2)} reduced={reduced} />
      <NextEducation reduced={reduced} />

      <div className="seru__disclaimer">
        <p className="seru__wrap">
          <span className="seru__disclaimer-title">{t('medicalDisclaimerTitle')}</span> {t('medicalDisclaimer')}
        </p>
      </div>
    </div>
  )
}
