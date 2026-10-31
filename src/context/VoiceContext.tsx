import { createContext, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { voiceStrings } from '../components/layout/voiceStrings'

export interface VoiceValue {
  supported: boolean
  enabled: boolean
  setEnabled: (b: boolean) => void
  speaking: boolean
  speak: (text: string) => void
  stop: () => void
}

export const VoiceContext = createContext<VoiceValue | null>(null)

const STORAGE_KEY = 'seru-voice'
const WELCOME_KEY = 'seru-voice-welcome'
const supported =
  typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window

function readEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function welcomed() {
  try {
    return sessionStorage.getItem(WELCOME_KEY) === '1'
  } catch {
    return false
  }
}

function markWelcomed() {
  try {
    sessionStorage.setItem(WELCOME_KEY, '1')
  } catch {
    /* ignore */
  }
}

function ignoredSelection(sel: Selection) {
  const active = document.activeElement
  if (active?.closest('input, textarea, [contenteditable]:not([contenteditable="false"]), .a11y-panel')) return true
  const node = sel.anchorNode
  const el = node instanceof Element ? node : node?.parentElement
  return !!el?.closest('input, textarea, [contenteditable]:not([contenteditable="false"]), .a11y-panel')
}

export function VoiceProvider({ children }: { children: ReactNode }) {
  const { lang } = useLang()
  const [enabled, setEnabledState] = useState(() => supported && readEnabled())
  const [speaking, setSpeaking] = useState(false)
  const voicesRef = useRef<SpeechSynthesisVoice[]>([])
  const langRef = useRef(lang)

  useEffect(() => {
    if (!supported) return
    const load = () => {
      voicesRef.current = window.speechSynthesis.getVoices()
    }
    load()
    window.speechSynthesis.addEventListener('voiceschanged', load)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', load)
      window.speechSynthesis.cancel()
    }
  }, [])

  const stop = useCallback(() => {
    if (!supported) return
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [])

  const speak = useCallback((text: string) => {
    if (!supported) return
    const clean = text.trim().slice(0, 1500)
    if (!clean) return
    const synth = window.speechSynthesis
    synth.cancel()
    const u = new SpeechSynthesisUtterance(clean)
    const bcp = langRef.current === 'en' ? 'en-US' : 'id-ID'
    u.lang = bcp
    const base = bcp.slice(0, 2)
    const voice =
      voicesRef.current.find((v) => v.lang.replace('_', '-') === bcp) ??
      voicesRef.current.find((v) => v.lang.toLowerCase().startsWith(base))
    if (voice) u.voice = voice
    u.onstart = () => setSpeaking(true)
    u.onend = () => setSpeaking(false)
    u.onerror = () => setSpeaking(false)
    synth.speak(u)
  }, [])

  useEffect(() => {
    langRef.current = lang
    return stop
  }, [lang, stop])

  const setEnabled = useCallback(
    (b: boolean) => {
      if (!supported) return
      setEnabledState(b)
      try {
        localStorage.setItem(STORAGE_KEY, b ? '1' : '0')
      } catch {
        /* ignore */
      }
      if (b) {
        markWelcomed()
        speak(voiceStrings.enabled[langRef.current])
      } else {
        stop()
      }
    },
    [speak, stop],
  )

  useEffect(() => {
    if (!enabled || welcomed()) return
    const greet = () => {
      cleanup()
      if (welcomed()) return
      markWelcomed()
      speak(voiceStrings.welcome[langRef.current])
    }
    const cleanup = () => {
      document.removeEventListener('pointerdown', greet)
      document.removeEventListener('keydown', greet)
    }
    document.addEventListener('pointerdown', greet)
    document.addEventListener('keydown', greet)
    return cleanup
  }, [enabled, speak])

  useEffect(() => {
    if (!enabled) return
    let timer: number | undefined
    let last = ''
    const onSelect = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        const sel = window.getSelection()
        const text = sel?.toString().trim() ?? ''
        if (!sel || text.length < 2) {
          last = ''
          return
        }
        if (text === last || ignoredSelection(sel)) return
        last = text
        speak(text)
      }, 400)
    }
    const events = ['mouseup', 'keyup', 'touchend'] as const
    events.forEach((e) => document.addEventListener(e, onSelect))
    return () => {
      window.clearTimeout(timer)
      events.forEach((e) => document.removeEventListener(e, onSelect))
    }
  }, [enabled, speak])

  const value = useMemo<VoiceValue>(
    () => ({ supported, enabled, setEnabled, speaking, speak, stop }),
    [enabled, setEnabled, speaking, speak, stop],
  )

  return <VoiceContext.Provider value={value}>{children}</VoiceContext.Provider>
}
