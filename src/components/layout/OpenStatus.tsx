import { useEffect, useState } from 'react'
import { serviceHours } from '../../config/site'
import { useLang } from '../../i18n/LanguageContext'

const fmt = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta',
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.trim().split(':').map(Number)
  return h * 60 + m
}

/** Today's schedule entry and whether the clinic is open right now, in Kudus time (WIB). */
function clinicStatus(now = new Date()) {
  const parts = Object.fromEntries(fmt.formatToParts(now).map((p) => [p.type, p.value]))
  const today = serviceHours.find((d) => d.day.en === parts.weekday)
  const minutes = Number(parts.hour) * 60 + Number(parts.minute)
  if (!today || today.closed) return { today, open: false }
  const [start, end] = today.hours.split('-').map(toMinutes)
  return { today, open: minutes >= start && minutes < end }
}

export function OpenStatus() {
  const { t } = useLang()
  const [status, setStatus] = useState(() => clinicStatus())

  useEffect(() => {
    const id = setInterval(() => setStatus(clinicStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm" aria-live="polite">
      <span
        className={`inline-flex items-center gap-2 font-bold ${status.open ? 'text-[#7DD36A]' : 'text-[#FFB3A7]'}`}
      >
        <span className={`size-2 rounded-full ${status.open ? 'bg-[#7DD36A]' : 'bg-[#FFB3A7]'}`} aria-hidden />
        {status.open ? t('openNow') : t('closedNow')}
      </span>
      <span className="text-footer-text">· {t('wibNote')}</span>
    </p>
  )
}
