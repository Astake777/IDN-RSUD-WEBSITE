import { useId } from 'react'
import { Minus, Plus, type LucideIcon } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { ActiveBadge, cardBase, cardState } from './AccessibilityOption'
import { S } from './strings'

interface Props {
  icon: LucideIcon
  label: string
  value: number
  min: number
  max: number
  def: number
  onStep: (dir: 1 | -1) => void
}

const stepBtn =
  'flex size-11 items-center justify-center rounded-control border border-line bg-white text-ink hover:border-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 disabled:cursor-not-allowed disabled:opacity-40'

export default function AccessibilitySlider({ icon: Icon, label, value, min, max, def, onStep }: Props) {
  const { l } = useLang()
  const labelId = useId()
  const active = value !== def
  return (
    <div role="group" aria-labelledby={labelId} className={`${cardBase} ${cardState(active)}`}>
      {active && <ActiveBadge />}
      <Icon className="size-6 text-brand-700" aria-hidden="true" />
      <span id={labelId} className="pr-12 text-sm font-semibold text-ink">
        {label}
      </span>
      <div className="mt-auto flex w-full items-center justify-between gap-2">
        <button type="button" className={stepBtn} aria-label={`${l(S.decrease)} ${label}`} disabled={value <= min} onClick={() => onStep(-1)}>
          <Minus className="size-4" aria-hidden="true" />
        </button>
        <output aria-live="polite" className="text-sm font-bold tabular-nums text-ink">
          {value}%
        </output>
        <button type="button" className={stepBtn} aria-label={`${l(S.increase)} ${label}`} disabled={value >= max} onClick={() => onStep(1)}>
          <Plus className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
