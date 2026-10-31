import { Info } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'

export function MedicalDisclaimer({ className = '' }: { className?: string }) {
  const { t } = useLang()
  return (
    <aside className={`flex gap-3 rounded-card border border-line bg-white p-5 text-[0.9375rem] text-ink-soft ${className}`}>
      <Info className="mt-0.5 size-5 shrink-0 text-brand-700" aria-hidden />
      <p>
        <strong className="font-semibold text-ink">{t('medicalDisclaimerTitle')}</strong> {t('medicalDisclaimer')}
      </p>
    </aside>
  )
}
