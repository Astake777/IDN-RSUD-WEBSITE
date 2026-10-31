import { SectionHeading } from '../../components/ui/SectionHeading'
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

const shiftTone: Record<Shift['id'], { head: string; rail: string; dot: string }> = {
  pagi: { head: 'bg-accent text-ink', rail: 'border-accent', dot: 'bg-accent' },
  siang: { head: 'bg-brand-700 text-white', rail: 'border-brand-700', dot: 'bg-brand-700' },
  malam: { head: 'bg-ink text-white', rail: 'border-ink', dot: 'bg-ink' },
}

function Badges({ items, dark = false }: { items: OrgPerson['badges']; dark?: boolean }) {
  const { l } = useLang()
  return (
    <ul aria-label={l(s.certifications)} className="mt-3 flex flex-wrap gap-1.5">
      {items.map((b) => (
        <li
          key={b.id}
          className={`rounded px-2 py-0.5 text-xs font-semibold ${dark ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-900'}`}
        >
          {l(b)}
        </li>
      ))}
    </ul>
  )
}

function PersonBody({ person, heading: H = 'h4' }: { person: OrgPerson; heading?: 'h3' | 'h4' }) {
  const { l } = useLang()
  return (
    <>
      <H className="font-bold leading-snug text-ink">{person.name}</H>
      <p className="text-sm font-semibold text-brand-700">{l(person.role)}</p>
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
    <section aria-labelledby={`shift-${shift.id}`} className="relative">
      <div className="overflow-hidden rounded-card border border-line bg-white shadow-card">
        <div className={`flex items-center justify-between gap-3 px-4 py-2 ${tone.head}`}>
          <h3 id={`shift-${shift.id}`} className="font-bold">
            {l(shift.name)}
          </h3>
          <p className="text-sm font-semibold tabular-nums">{shift.hours}</p>
        </div>
        <div className="p-4">
          <PersonBody person={shift.lead} />
        </div>
      </div>

      <ul aria-label={l(s.staffList)} className={`ml-4 space-y-3 border-l-2 pt-3 pl-5 ${tone.rail}`}>
        {shift.staff.map((p) => (
          <li key={p.name} className="relative rounded-card border border-line bg-white p-4 shadow-card">
            <span aria-hidden="true" className={`absolute top-7 -left-5 h-0.5 w-5 ${tone.dot}`} />
            <span aria-hidden="true" className={`absolute top-7 -left-[1.6rem] size-2.5 -translate-y-1 rounded-full ${tone.dot}`} />
            <PersonBody person={p} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function OrgChart() {
  const { l } = useLang()
  return (
    <section aria-labelledby="org-title" className="py-14 sm:py-20">
      <div className="container-site">
        <SectionHeading
          id="org-title"
          title={l(s.orgTitle)}
          lead={l(s.orgLead)}
          action={
            <div className="text-left sm:text-right">
              <p className="text-2xl font-extrabold text-brand-900">{l(orgSummary.nurses)}</p>
              <p className="text-sm text-ink-soft">{orgSummary.breakdown.map((b) => l(b)).join(' · ')}</p>
            </div>
          }
        />

        <div className="mt-10">
          <div className="mx-auto max-w-2xl rounded-card border-b-4 border-accent bg-brand-900 p-5 text-white shadow-card sm:p-6">
            <h3 className="text-lg font-bold sm:text-xl">{headNurse.name}</h3>
            <p className="font-semibold text-accent">{l(headNurse.role)}</p>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-snug text-white/85 marker:text-white/50">
              {headNurse.duties.map((d) => (
                <li key={d.id}>{l(d)}</li>
              ))}
            </ul>
            <Badges items={headNurse.badges} dark />
          </div>

          {/* Connector: stem from the head card, then a bar over the three column centres on desktop. */}
          <div aria-hidden="true" className="mx-auto h-8 w-0.5 bg-ink-soft/50 max-lg:ml-6" />
          <div className="relative max-lg:ml-6 max-lg:border-l-2 max-lg:border-ink-soft/50 max-lg:pl-5">
            <div
              aria-hidden="true"
              className="absolute top-0 hidden h-0.5 bg-ink-soft/50 lg:block"
              style={{ left: 'calc((100% - 3rem) / 6)', right: 'calc((100% - 3rem) / 6)' }}
            />
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
              {shifts.map((shift) => (
                <div key={shift.id} className="relative lg:pt-6">
                  <span aria-hidden="true" className="absolute top-0 left-1/2 hidden h-6 w-0.5 bg-ink-soft/50 lg:block" />
                  <span aria-hidden="true" className="absolute top-5 -left-5 h-0.5 w-5 bg-ink-soft/50 lg:hidden" />
                  <ShiftColumn shift={shift} />
                </div>
              ))}
            </div>
          </div>

          <section
            aria-labelledby="function-leads"
            className="mt-12 rounded-card border-2 border-dashed border-line p-4 sm:p-6"
          >
            <h3 id="function-leads" className="inline-block rounded-control bg-brand-700 px-3 py-1 font-bold text-white">
              {l(s.functionLeads)}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">{l(functionLeadsNote)}</p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {functionLeads.map((p) => (
                <li key={p.name} className="rounded-card border border-t-4 border-line border-t-brand-700 bg-white p-4 shadow-card">
                  <PersonBody person={p} />
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-8 border-t border-line pt-4 text-sm text-ink-soft">{l(orgSource)}</p>
        </div>
      </div>
    </section>
  )
}
