import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useAccessibility } from '../../hooks/useAccessibility'
import { useLang } from '../../i18n/LanguageContext'
import { maskStrings } from './maskStrings'

const PANE_BG = 'rgb(10 20 10 / .55)'

export function ReadingMask() {
  const { prefs, toggle } = useAccessibility()
  const { l } = useLang()
  const topRef = useRef<HTMLDivElement>(null)
  const bandRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const on = prefs.readingMask

  useEffect(() => {
    if (!on) return
    const touch = window.matchMedia('(hover: none)')
    const small = window.matchMedia('(max-width: 639px)')
    let y = window.innerHeight / 2
    let frame = 0

    const paint = () => {
      frame = 0
      const h = small.matches ? 96 : 120
      const center = touch.matches ? window.innerHeight / 2 : y
      const top = Math.round(center - h / 2)
      if (topRef.current) topRef.current.style.transform = `translateY(${top}px)`
      if (bandRef.current) {
        bandRef.current.style.height = `${h}px`
        bandRef.current.style.transform = `translateY(${top}px)`
      }
      if (bottomRef.current) bottomRef.current.style.transform = `translateY(${top + h}px)`
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      y = e.clientY
      schedule()
    }
    const onFocus = (e: FocusEvent) => {
      const t = e.target
      if (!(t instanceof Element) || t.closest('.a11y-panel, .a11y-fab')) return
      const r = t.getBoundingClientRect()
      y = r.top + r.height / 2
      schedule()
    }

    paint()
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    document.addEventListener('focusin', onFocus)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', schedule)
      document.removeEventListener('focusin', onFocus)
    }
  }, [on])

  if (!on) return null

  return (
    <>
      <div className="a11y-mask pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
        {/* top pane is shifted up by its own height so its bottom edge lands on translateY */}
        <div
          ref={topRef}
          className="absolute inset-x-0 h-[200vh] will-change-transform"
          style={{ top: '-200vh', background: PANE_BG }}
        />
        <div ref={bandRef} className="absolute inset-x-0 top-0 border-y-2 border-[#E3A23B] will-change-transform" />
        <div
          ref={bottomRef}
          className="absolute inset-x-0 top-0 h-[200vh] will-change-transform"
          style={{ background: PANE_BG }}
        />
      </div>
      <button
        type="button"
        onClick={() => toggle('readingMask')}
        className="fixed right-4 top-[120px] z-[61] inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#16261A]/30 bg-white px-4 text-sm font-semibold text-[#16261A] shadow-sm hover:bg-[#F3F6F2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C6D0C]"
      >
        <X className="size-4" aria-hidden="true" />
        {l(maskStrings.turnOffMask)}
      </button>
    </>
  )
}
