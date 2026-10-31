import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type RefObject } from 'react'


const motionQuery = '(prefers-reduced-motion: reduce)'

export function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = matchMedia(motionQuery)
      mq.addEventListener('change', cb)
      return () => mq.removeEventListener('change', cb)
    },
    () => matchMedia(motionQuery).matches,
  )
}

/** Runs `onFrame` at most once per animation frame while scrolling or resizing, plus once on mount. */
export function useScrollFrame(onFrame: () => void) {
  const cb = useRef(onFrame)
  useEffect(() => {
    cb.current = onFrame
  })
  useEffect(() => {
    let frame = 0
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(() => ((frame = 0), cb.current()))
    }
    addEventListener('scroll', schedule, { passive: true })
    addEventListener('resize', schedule, { passive: true })
    cb.current()
    return () => {
      removeEventListener('scroll', schedule)
      removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [])
}

/**
 * Tracks which of several elements is crossing a band of the viewport.
 * `ref(i)` returns a callback ref for element i.
 */
export function useActiveOnScroll(count: number, rootMargin: string, initial = -1) {
  const els = useRef<(Element | null)[]>([])
  const [active, setActive] = useState(initial)
  const ref = useCallback((i: number) => (el: Element | null) => void (els.current[i] = el), [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(els.current.indexOf(e.target))
        }
      },
      { rootMargin },
    )
    els.current.slice(0, count).forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [count, rootMargin])

  return [active, ref, els] as const
}

export function useInView(target: RefObject<Element | null>) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = target.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [target])
  return inView
}

export function scrollToId(id: string, reduced: boolean) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  el.focus({ preventScroll: true })
}
