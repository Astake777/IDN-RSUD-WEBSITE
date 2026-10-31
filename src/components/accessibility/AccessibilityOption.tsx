import type { LucideIcon } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { S } from './strings'

export const cardBase = 'relative flex min-h-[104px] flex-col items-start gap-2 rounded-control border p-3 text-left'
export const cardState = (active: boolean) =>
  active ? 'border-2 border-brand-700 bg-brand-50' : 'border-line bg-[#F4F7F3]'

export function ActiveBadge() {
  const { l } = useLang()
  return (
    <span className="absolute right-2 top-2 rounded-full bg-brand-700 px-2 py-0.5 text-xs font-semibold text-white">
      {l(S.active)}
    </span>
  )
}

interface Props {
  icon: LucideIcon
  label: string
  helper?: string
  pressed: boolean
  disabled?: boolean
  onClick: () => void
}

export default function AccessibilityOption({ icon: Icon, label, helper, pressed, disabled, onClick }: Props) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
      className={`${cardBase} ${cardState(pressed)} hover:border-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-line`}
    >
      {pressed && <ActiveBadge />}
      <Icon className="size-6 text-brand-700" aria-hidden="true" />
      <span className="pr-12 text-sm font-semibold text-ink">{label}</span>
      {helper && <span className="text-xs text-ink-soft">{helper}</span>}
    </button>
  )
}
