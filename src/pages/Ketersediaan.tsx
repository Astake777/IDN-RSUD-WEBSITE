import { useMemo, useState } from 'react'
import { RefreshCw, Search } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { BedCard, type BedRow } from '../features/ketersediaan/BedCard'
import { cleanName, emptyBeds, useBedData } from '../features/ketersediaan/api'
import { s } from '../features/ketersediaan/strings'
import { useLang } from '../i18n/LanguageContext'

type View = 'room' | 'class'

interface Item {
  name: string
  tt: number
  isi: number
  rows: BedRow[]
  discharge?: { today: number; tomorrow: number }
}

export default function Ketersediaan() {
  const { l, lang } = useLang()
  const { data, error, loading, updatedAt, reload } = useBedData()
  const [view, setView] = useState<View>('room')
  const [query, setQuery] = useState('')
  const [onlyEmpty, setOnlyEmpty] = useState(false)

  const icu = data?.rooms.find((r) => r.ruang_name === 'ICU')

  const items = useMemo<Item[]>(() => {
    if (!data) return []
    const list: Item[] =
      view === 'room'
        ? data.rooms
            .filter((r) => r.ruang_name !== 'ICU')
            .map((r) => ({
              name: r.ruang_name,
              tt: r.total_tt,
              isi: r.total_isi,
              rows: r.kelas.map((k) => ({ name: k.kls_name, tt: k.jml_tt, isi: k.jml_isi })),
              discharge: { today: r.dc_today.length, tomorrow: r.dc_tomorrow.length },
            }))
        : data.kelas.map((k) => ({
            name: k.kls_name,
            tt: k.total_tt,
            isi: k.total_isi,
            rows: k.ruangan.map((r) => ({ name: r.ruang_name, tt: r.jml_tt, isi: r.jml_isi })),
          }))
    const q = query.trim().toLowerCase()
    return list.filter(
      (it) =>
        (!onlyEmpty || emptyBeds(it.tt, it.isi) > 0) &&
        (!q || [it.name, ...it.rows.map((r) => r.name)].some((n) => cleanName(n).toLowerCase().includes(q))),
    )
  }, [data, view, query, onlyEmpty])

  const time = updatedAt?.toLocaleTimeString(lang === 'en' ? 'en-GB' : 'id-ID', { hour: '2-digit', minute: '2-digit' })

  return (
    <>
      <PageHeader titleId="beds-title" title={l(s.title)} lead={l(s.lead)} crumbs={[{ label: l(s.title) }]} />

      <section aria-labelledby="beds-title" className="container-site py-10 sm:py-14">
        {!data && loading && (
          <p role="status" className="flex items-center gap-3 rounded-card border border-line bg-brand-50 p-6 text-ink-soft">
            <RefreshCw aria-hidden className="size-5 animate-spin text-brand-700" />
            {l(s.loading)}
          </p>
        )}

        {!data && error && !loading && (
          <div role="alert" className="rounded-card border border-danger/30 bg-danger-50 p-6">
            <p className="text-ink">{l(s.error)}</p>
            <button
              type="button"
              onClick={() => void reload()}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-control bg-brand-700 px-5 font-bold text-white hover:bg-brand-900"
            >
              <RefreshCw aria-hidden className="size-4" />
              {l(s.retry)}
            </button>
          </div>
        )}

        {data && (
          <>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
              {icu && (
                <div>
                  <h2 className="mb-3 text-sm font-bold text-brand-700">{l(s.icuTitle)}</h2>
                  <BedCard
                    featured
                    name={icu.ruang_name}
                    tt={icu.total_tt}
                    isi={icu.total_isi}
                    rows={icu.kelas.map((k) => ({ name: k.kls_name, tt: k.jml_tt, isi: k.jml_isi }))}
                    rowsLabel={l(s.className)}
                    detailsLabel={l(s.perClass)}
                    discharge={{ today: icu.dc_today.length, tomorrow: icu.dc_tomorrow.length }}
                  />
                </div>
              )}

              <div className="lg:pt-8">
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line">
                  {[
                    { label: s.total, value: data.stats.total },
                    { label: s.occupied, value: data.stats.isi },
                    { label: s.empty, value: data.stats.kosong, strong: true },
                    { label: s.bor, value: `${data.stats.bor.toLocaleString(lang === 'en' ? 'en-GB' : 'id-ID')}%` },
                  ].map((st) => (
                    <div key={st.label.id} className="bg-white p-4 sm:p-5">
                      <dt className="text-sm text-ink-soft">{l(st.label)}</dt>
                      <dd className={`mt-1 text-2xl font-extrabold tabular-nums sm:text-3xl ${st.strong ? 'text-brand-700' : 'text-ink'}`}>
                        {st.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-ink-soft" aria-live="polite">
                    {l(s.updated)} {time}
                  </p>
                  <button
                    type="button"
                    onClick={() => void reload()}
                    disabled={loading}
                    className="inline-flex min-h-11 items-center gap-2 rounded-control border border-line px-4 font-semibold text-ink hover:bg-brand-50 disabled:opacity-60"
                  >
                    <RefreshCw aria-hidden className={`size-4 ${loading ? 'animate-spin' : ''}`} />
                    {l(s.refresh)}
                  </button>
                </div>
                {error && <p role="alert" className="mt-3 text-sm text-danger">{l(s.error)}</p>}
                <p className="mt-4 text-sm text-ink-soft">{l(s.privacy)}</p>
              </div>
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <h2 className="text-2xl font-bold text-ink">{l(s.allRooms)}</h2>

              <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
                <div role="group" aria-label={l(s.allRooms)} className="inline-flex shrink-0 rounded-control border border-line p-1">
                  {(['room', 'class'] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      aria-pressed={view === v}
                      onClick={() => setView(v)}
                      className={`min-h-10 flex-1 whitespace-nowrap rounded-[6px] px-4 text-sm font-semibold ${view === v ? 'bg-brand-700 text-white' : 'text-ink hover:bg-brand-50'}`}
                    >
                      {l(v === 'room' ? s.byRoom : s.byClass)}
                    </button>
                  ))}
                </div>

                <label className="relative block md:w-80">
                  <span className="sr-only">{l(s.search)}</span>
                  <Search aria-hidden className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-soft" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={l(s.search)}
                    className="min-h-11 w-full rounded-control border border-line bg-white pr-3 pl-9 text-ink placeholder:text-ink-soft"
                  />
                </label>

                <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-ink md:ml-auto">
                  <input
                    type="checkbox"
                    checked={onlyEmpty}
                    onChange={(e) => setOnlyEmpty(e.target.checked)}
                    className="size-5 accent-brand-700"
                  />
                  {l(s.onlyEmpty)}
                </label>
              </div>

              {items.length === 0 ? (
                <p className="mt-8 rounded-card border border-dashed border-line p-8 text-center text-ink-soft">{l(s.noMatch)}</p>
              ) : (
                <div className="mt-8 grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((it) => (
                    <BedCard
                      key={it.name}
                      name={it.name}
                      tt={it.tt}
                      isi={it.isi}
                      rows={it.rows}
                      rowsLabel={l(view === 'room' ? s.className : s.wards)}
                      detailsLabel={l(view === 'room' ? s.perClass : s.perRoom)}
                      discharge={it.discharge}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </>
  )
}
