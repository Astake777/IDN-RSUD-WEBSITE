import { useEffect, useRef, useState } from 'react'
import { useAccessibility } from '../../hooks/useAccessibility'

const BLOCKS = 'p, li, h1, h2, h3, h4, h5, h6, a, dd, dt, td, th, figcaption, blockquote, button, label, span'
const IGNORE = '.a11y-panel, .a11y-fab, input, textarea, select, [contenteditable="true"]'
const MAX = 240
const GAP = 16
const EDGE = 8

// The site header lives outside every [data-a11y-scope], so the scope check excludes it.
function findBlock(x: number, y: number): HTMLElement | null {
  const hit = document.elementFromPoint(x, y)
  if (!hit || hit.closest(IGNORE) || !hit.closest('[data-a11y-scope]')) return null
  let el = hit.closest<HTMLElement>(BLOCKS)
  while (el && el.closest('[data-a11y-scope]')) {
    if (el.innerText.trim()) return el
    el = el.parentElement?.closest<HTMLElement>(BLOCKS) ?? null
  }
  return null
}

export function TextMagnifier() {
  const { prefs } = useAccessibility()
  const [canHover] = useState(() => window.matchMedia('(hover: hover)').matches)
  const bubbleRef = useRef<HTMLDivElement>(null)
  const on = prefs.magnifier && canHover

  useEffect(() => {
    if (!on) return
    const bubble = bubbleRef.current
    if (!bubble) return
    let frame = 0
    let px = 0
    let py = 0
    let current: HTMLElement | null = null

    const hide = () => {
      current = null
      bubble.style.visibility = 'hidden'
    }
    const paint = () => {
      frame = 0
      const el = findBlock(px, py)
      if (!el) return hide()
      if (el !== current) {
        current = el
        const text = el.innerText.trim().replace(/\s+/g, ' ')
        bubble.textContent = text.length > MAX ? `${text.slice(0, MAX).trimEnd()}…` : text
        bubble.style.fontWeight = /^H[1-6]$/.test(el.tagName) ? '700' : '400'
      }
      const w = bubble.offsetWidth
      const h = bubble.offsetHeight
      const vw = window.innerWidth
      const vh = window.innerHeight
      let left = px + GAP
      let top = py + GAP
      if (left + w > vw - EDGE) left = px - GAP - w
      if (top + h > vh - EDGE) top = py - GAP - h
      left = Math.max(EDGE, Math.min(left, vw - w - EDGE))
      top = Math.max(EDGE, Math.min(top, vh - h - EDGE))
      bubble.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`
      bubble.style.visibility = 'visible'
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      px = e.clientX
      py = e.clientY
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget) hide()
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = 0
      hide()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    window.addEventListener('blur', hide)
    window.addEventListener('scroll', onScroll, { passive: true, capture: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('blur', hide)
      window.removeEventListener('scroll', onScroll, { capture: true })
    }
  }, [on])

  if (!on) return null

  return (
    <div
      ref={bubbleRef}
      className="a11y-magnifier pointer-events-none fixed left-0 top-0 z-[65] w-max max-w-[min(28rem,calc(100vw-2rem))] break-words rounded-[12px] border-2 border-[#1C6D0C] bg-white px-4 py-3 text-[1.75rem] leading-[1.4] text-[#16261A] shadow-[0_6px_20px_rgb(22_38_26/0.15)]"
      style={{ visibility: 'hidden' }}
      aria-hidden="true"
    />
  )
}
