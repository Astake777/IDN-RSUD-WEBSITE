import { useLang } from '../../i18n/LanguageContext'
import { cleanName, emptyBeds, statusOf, type Status } from './api'
import { s, statusLabel } from './strings'

export interface BedRow {
  name: string
  tt: number
  isi: number
}

interface Props {
  name: string
  tt: number
  isi: number
  rows: BedRow[]
  rowsLabel: string
  detailsLabel: string
  discharge?: { today: number; tomorrow: number }
  /** The ICU card: dark header, breakdown always open. */
  featured?: boolean
}

// Status carries meaning (free / filling / full), so it is the only place amber and red appear on this page.
const tone: Record<Status, { chip: string; bar: string; num: string }> = {
  longgar: { chip: 'bg-brand-50 text-brand-900', bar: 'bg-brand-700', num: 'text-brand-700' },
  sedang: { chip: 'bg-[#fdf3e1] text-[#8a5a12]', bar: 'bg-accent', num: 'text-[#8a5a12]' },
  penuh: { chip: 'bg-danger-50 text-danger', bar: 'bg-danger', num: 'text-danger' },
}

function RowsTable({ rows, label }: { rows: BedRow[]; label: string }) {
  const { l } = useLang()
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-line text-left text-ink-soft">
          <th scope="col" className="py-2 pr-2 font-semibold">{label}</th>
          <th scope="col" className="px-2 py-2 text-right font-semibold">TT</th>
          <th scope="col" className="px-2 py-2 text-right font-semibold">{l(s.occupied)}</th>
          <th scope="col" className="py-2 pl-2 text-right font-semibold">{l(s.empty)}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => {
          const free = emptyBeds(r.tt, r.isi)
          return (
            <tr key={r.name} className="border-b border-line/60 last:border-0">
              <th scope="row" className="py-2 pr-2 text-left font-medium text-ink">{cleanName(r.name)}</th>
              <td className="px-2 py-2 text-right tabular-nums text-ink-soft">{r.tt}</td>
              <td className="px-2 py-2 text-right tabular-nums text-ink-soft">{r.isi}</td>
              <td className={`py-2 pl-2 text-right font-bold tabular-nums ${free > 0 ? 'text-brand-700' : 'text-ink-soft'}`}>{free}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export function BedCard({ name, tt, isi, rows, rowsLabel, detailsLabel, discharge, featured = false }: Props) {
  const { l } = useLang()
  const status = statusOf(tt, isi)
  const free = emptyBeds(tt, isi)
  const pct = tt ? Math.min(100, Math.round((isi / tt) * 100)) : 0
  const t = tone[status]
  const title = cleanName(name)

  return (
    <article
      aria-label={title}
      className={`flex flex-col overflow-hidden rounded-card border bg-white ${featured ? 'border-brand-900 shadow-card' : 'border-line'}`}
    >
      <header className={`flex items-center justify-between gap-3 px-5 py-3 ${featured ? 'bg-brand-900 text-white' : 'border-b border-line'}`}>
        <h3 className={`font-bold ${featured ? 'text-lg' : 'text-ink'}`}>{title}</h3>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${featured ? 'bg-white text-brand-900' : t.chip}`}>
          {l(statusLabel[status])}
        </span>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <p className="flex flex-wrap items-baseline gap-x-2 text-ink-soft">
          <span className={`font-extrabold leading-none tabular-nums ${t.num} ${featured ? 'text-5xl' : 'text-4xl'}`}>{free}</span>
          <span>
            {l(s.emptyOf)} <strong className="font-bold text-ink tabular-nums">{tt}</strong> {l(s.beds)}
          </span>
        </p>

        <div>
          <div aria-hidden className="h-2 overflow-hidden rounded-full bg-[#eef2ec]">
            <div className={`h-full rounded-full ${t.bar}`} style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-1.5 text-sm text-ink-soft">
            {isi} {l(s.occupied).toLowerCase()} · {pct}%
          </p>
        </div>

        {discharge && (discharge.today > 0 || discharge.tomorrow > 0) && (
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-control bg-brand-50 px-3 py-2">
              <dt className="text-ink-soft">{l(s.dischargeToday)}</dt>
              <dd className="font-bold tabular-nums text-ink">{discharge.today}</dd>
            </div>
            <div className="rounded-control bg-brand-50 px-3 py-2">
              <dt className="text-ink-soft">{l(s.dischargeTomorrow)}</dt>
              <dd className="font-bold tabular-nums text-ink">{discharge.tomorrow}</dd>
            </div>
          </dl>
        )}

        {rows.length > 0 &&
          (featured ? (
            <RowsTable rows={rows} label={rowsLabel} />
          ) : (
            <details className="group mt-auto border-t border-line pt-1">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between font-semibold text-brand-700 hover:text-brand-900 [&::-webkit-details-marker]:hidden">
                {detailsLabel}
                <span aria-hidden className="text-lg leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <RowsTable rows={rows} label={rowsLabel} />
            </details>
          ))}
      </div>
    </article>
  )
}
