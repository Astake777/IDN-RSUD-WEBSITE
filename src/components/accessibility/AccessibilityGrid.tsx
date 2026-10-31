import { useState } from 'react'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Baseline,
  CaseSensitive,
  Contrast,
  Heading,
  ImageOff,
  Link,
  Moon,
  MoveHorizontal,
  ScanLine,
  Search,
  Type,
  Volume2,
  ZoomIn,
  type LucideIcon,
} from 'lucide-react'
import { useAccessibility } from '../../hooks/useAccessibility'
import { useVoice } from '../../hooks/useVoice'
import { A11Y_RANGES, type Align, type NumericKey, type ToggleKey } from '../../utils/accessibilityUtils'
import { useLang } from '../../i18n/LanguageContext'
import AccessibilityOption from './AccessibilityOption'
import AccessibilitySlider from './AccessibilitySlider'
import { S } from './strings'

export default function AccessibilityGrid() {
  const { prefs, step, toggle, setAlign } = useAccessibility()
  const voice = useVoice()
  const { l } = useLang()
  const [touch] = useState(() => window.matchMedia('(hover: none)').matches)

  const tog = (key: ToggleKey, icon: LucideIcon, extra?: { helper?: string; disabled?: boolean }) => (
    <AccessibilityOption icon={icon} label={l(S[key])} pressed={prefs[key]} onClick={() => toggle(key)} {...extra} />
  )
  const num = (key: NumericKey, icon: LucideIcon) => (
    <AccessibilitySlider icon={icon} label={l(S[key])} value={prefs[key]} {...A11Y_RANGES[key]} onStep={(d) => step(key, d)} />
  )
  const align = (a: Exclude<Align, 'default'>, label: string, icon: LucideIcon) => (
    <AccessibilityOption icon={icon} label={label} pressed={prefs.align === a} onClick={() => setAlign(a)} />
  )

  return (
    <div className="grid grid-cols-1 gap-3 p-4 min-[400px]:grid-cols-2 sm:grid-cols-3">
      {tog('readingMask', ScanLine)}
      {tog('highContrast', Contrast)}
      {num('fontSize', Type)}
      {num('lineHeight', Baseline)}
      {num('letterSpacing', MoveHorizontal)}
      {num('contentScale', ZoomIn)}
      {tog('dyslexiaFont', CaseSensitive, { helper: l(S.dyslexiaHelp) })}
      {align('left', l(S.alignLeft), AlignLeft)}
      {align('center', l(S.alignCenter), AlignCenter)}
      {align('right', l(S.alignRight), AlignRight)}
      {tog('hideImages', ImageOff)}
      {tog('highlightLinks', Link)}
      {tog('magnifier', Search, touch ? { helper: l(S.noTouch), disabled: true } : undefined)}
      {tog('highlightHeadings', Heading)}
      {tog('darkMode', Moon)}
      <AccessibilityOption
        icon={Volume2}
        label={l(S.voice)}
        helper={l(voice.supported ? S.voiceHelp : S.voiceUnsupported)}
        pressed={voice.enabled}
        disabled={!voice.supported}
        onClick={() => voice.setEnabled(!voice.enabled)}
      />
    </div>
  )
}
