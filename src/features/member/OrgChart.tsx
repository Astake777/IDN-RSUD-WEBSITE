import { useLang } from '../../i18n/LanguageContext'
import {
  functionLeads,
  functionLeadsNote,
  headNurse,
  orgSource,
  orgSummary,
  shifts,
  type OrgPerson,
  type Shift,
} from '../../data/organization'
import { s } from './strings'

// Three distinct shift colours inside the green theme: amber, brand green, deep teal.
const shiftTone: Record<Shift['id'], { head: string; border: string; rail: string; dot: string; role: string }> = {
  pagi: { head: 'bg-accent text-ink', border: 'border-accent', rail: 'bg-accent', dot: 'bg-accent', role: 'text-[#8a5a12]' },
  siang: { head: 'bg-brand-700 text-white', border: 'border-brand-700', rail: 'bg-brand-700', dot: 'bg-brand-700', role: 'text-brand-700' },
  malam: { head: 'bg-[#0f4a4a] text-white', border: 'border-[#0f4a4a]', rail: 'bg-[#0f4a4a]', dot: 'bg-[#0f4a4a]', role: 'text-[#0f4a4a]' },
}

function Badges({ items, dark = false }: { items: OrgPerson['badges']; dark?: boolean }) {
  const { l } = useLang()
  return (
    <ul aria-label={l(s.certifications)} className="mt-3 flex flex-wrap gap-1.5">
      {items.map((b) => (
        <li
          key={b.id}
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${dark ? 'bg-white/15 text-white' : 'border border-line bg-brand-50 text-brand-900'}`}
        >
          {l(b)}
        </li>
      ))}
    </ul>
  )
}

function PersonBody({ person, roleClass = 'text-brand-700' }: { person: OrgPerson; roleClass?: string }) {
  const { l } = useLang()
  return (
    <>
      <h4 className="font-bold leading-snug text-ink">{person.name}</h4>
      <p className={`text-sm font-semibold ${roleClass}`}>{l(person.role)}</p>
      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-snug text-ink-soft marker:text-line">
        {person.duties.map((d) => (
          <li key={d.id}>{l(d)}</li>
        ))}
      </ul>
      <Badges items={person.badges} />
    </>
  )
}

function ShiftColumn({ shift }: { shift: Shift }) {
  const { l } = useLang()
  const tone = shiftTone[shift.id]
  return (
    <section aria-labelledby={`shift-${shift.id}`}>
      <div className={`flex items-center justify-between gap-3 rounded-card px-4 py-2.5 ${tone.head}`}>
        <h3 id={`shift-${shift.id}`} className="font-bold">
          {l(shift.name)}
        </h3>
        <p className="text-sm font-semibold tabular-nums">{shift.hours}</p>
      </div>

      <div className={`mt-3 rounded-card border-2 bg-white p-4 shadow-card ${tone.border}`}>
        <PersonBody person={shift.lead} roleClass={tone.role} />
      </div>

      <div className="relative mt-3 pl-7">
        <span aria-hidden="true" className={`absolute top-0 bottom-6 left-2.5 w-0.5 rounded-full ${tone.rail}`} />
        <ul aria-label={l(s.staffList)} className="space-y-3">
          {shift.staff.map((p) => (
            <li key={p.name} className="relative rounded-card border border-line bg-white p-4 shadow-card">
              <span aria-hidden="true" className={`absolute top-6 -left-[1.4rem] size-3 rounded-full ring-4 ring-[#f6f9f5] ${tone.dot}`} />
              <PersonBody person={p} roleClass="text-ink-soft" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function OrgChart() {
  const { l } = useLang()
  return (
    <section aria-labelledby="org-title" className="py-14 sm:py-20">
      <div className="container-site">
        <div className="overflow-hidden rounded-card border border-line bg-[#f6f9f5] shadow-card">
          {/* Header band */}
          <header className="relative overflow-hidden bg-brand-900 px-5 py-7 text-white sm:px-8 sm:py-9">
            <svg
              aria-hidden="true"
              viewBox="0 0 600 80"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-0 bottom-3 h-16 w-full text-white/10"
            >
              <path
                d="M0 50 H180 L195 50 L205 20 L218 70 L230 8 L242 62 L252 50 H420 L432 50 L440 34 L450 60 L458 50 H600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 id="org-title" className="font-serif text-[length:calc(1.75rem*var(--a11y-fs,1))] font-bold leading-tight sm:text-[length:calc(2.25rem*var(--a11y-fs,1))]">
                  {l(s.orgTitle)}
                </h2>
                <p className="mt-1 text-white/80">{l(s.orgLead)}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-[length:calc(1.875rem*var(--a11y-fs,1))] font-extrabold leading-none text-accent">{l(orgSummary.nurses)}</p>
                <p className="mt-2 text-sm text-white/80">{orgSummary.breakdown.slice(0, 2).map((b) => l(b)).join(' · ')}</p>
                <p className="text-sm text-white/80">{l(orgSummary.breakdown[2])}</p>
              </div>
            </div>
          </header>

          <div className="p-4 sm:p-8">
            <div className="relative">
              {/* Head of unit */}
              <div className="relative z-10 mx-auto max-w-xl rounded-card bg-brand-900 p-5 text-white shadow-card sm:p-6">
                <h3 className="text-lg font-bold sm:text-xl">{headNurse.name}</h3>
                <p className="font-semibold text-[#F2C06B]">{l(headNurse.role)}</p>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-snug text-white/85 marker:text-white/50">
                  {headNurse.duties.map((d) => (
                    <li key={d.id}>{l(d)}</li>
                  ))}
                </ul>
                <Badges items={headNurse.badges} dark />
              </div>

              {/* Connector: stem down from the head card, a bar across the three column centres on desktop. */}
              <div aria-hidden="true" className="mx-auto h-8 w-0.5 bg-ink-soft/40" />
              <div aria-hidden="true" className="relative hidden h-6 lg:block">
                <span className="absolute top-0 h-0.5 bg-ink-soft/40" style={{ left: 'calc((100% - 3rem) / 6)', right: 'calc((100% - 3rem) / 6)' }} />
                <span className="absolute top-0 left-[calc((100%-3rem)/6)] h-6 w-0.5 bg-ink-soft/40" />
                <span className="absolute top-0 left-1/2 h-6 w-0.5 bg-ink-soft/40" />
                <span className="absolute top-0 right-[calc((100%-3rem)/6)] h-6 w-0.5 bg-ink-soft/40" />
              </div>

              <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
                {shifts.map((shift) => (
                  <ShiftColumn key={shift.id} shift={shift} />
                ))}
              </div>
            </div>

            {/* Function leads report straight to the head of unit: dashed line and dashed group. */}
            <div aria-hidden="true" className="mx-auto mt-6 h-10 w-0 border-l-2 border-dashed border-brand-700/50" />
            <section
              aria-labelledby="function-leads"
              className="rounded-card border-2 border-dashed border-brand-700/40 bg-white/60 p-4 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h3 id="function-leads" className="rounded-full bg-brand-700 px-4 py-1 font-bold text-white">
                  {l(s.functionLeads)}
                </h3>
                <p className="text-sm text-ink-soft">{l(functionLeadsNote)}</p>
              </div>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {functionLeads.map((p) => (
                  <li key={p.name} className="rounded-card border border-line bg-white p-4 shadow-card">
                    <PersonBody person={p} />
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-6 border-t border-line pt-4 text-sm text-ink-soft">{l(orgSource)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
