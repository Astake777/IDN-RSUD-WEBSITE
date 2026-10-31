import { Volume2, VolumeX } from 'lucide-react'
import { useVoice } from '../../hooks/useVoice'
import { useLang } from '../../i18n/LanguageContext'
import { voiceStrings } from './voiceStrings'

export function VoiceToggle() {
  const { supported, enabled, setEnabled, speaking } = useVoice()
  const { l } = useLang()
  if (!supported) return null
  const Icon = enabled ? Volume2 : VolumeX

  return (
    <button
      type="button"
      onClick={() => setEnabled(!enabled)}
      aria-pressed={enabled}
      aria-label={l(enabled ? voiceStrings.ariaOn : voiceStrings.ariaOff)}
      className="relative inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-white/40 px-3 font-semibold text-white hover:bg-white/10"
    >
      <Icon className="size-5" aria-hidden />
      <span className="hidden sm:inline">{l(voiceStrings.label)}</span>
      {speaking && (
        <span
          aria-hidden
          className="absolute right-1 top-1 size-2 rounded-full bg-accent motion-safe:animate-pulse"
        />
      )}
    </button>
  )
}
