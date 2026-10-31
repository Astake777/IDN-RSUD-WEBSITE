import { BriefcaseMedical, ClipboardList, HeartPulse, Stethoscope, UserRound, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { useLang } from '../../i18n/LanguageContext'
import { roomData, type RoomCategory } from '../../data/organization'
import { people, s } from './strings'

const icons: Record<RoomCategory['id'], LucideIcon> = {
  konsultan: BriefcaseMedical,
  spesialis: Stethoscope,
  umum: UserRound,
  perawat: HeartPulse,
  administrasi: ClipboardList,
}

// Connector line colour, shared by the stem, rail and ticks.
const line = 'border-danger/40'

export function RoomData() {
  const { l } = useLang()
  return (
    <section aria-labelledby="room-title" className="bg-brand-50 py-14 sm:py-20">
      <div className="container-site">
        <SectionHeading id="room-title" title={l(s.roomTitle)} lead={l(s.roomLead)} />

        <div className="mt-10 flex flex-col lg:flex-row lg:items-center">
          <div
            className={`relative rounded-card bg-danger p-6 text-white shadow-card lg:w-80 lg:shrink-0 lg:p-8 lg:after:absolute lg:after:top-1/2 lg:after:left-full lg:after:w-8 lg:after:border-t-2 lg:after:border-danger/40`}
          >
            <h3 id="room-card" className="text-2xl font-extrabold tracking-wide lg:text-3xl">
              {l(s.roomCard)}
            </h3>
            <p className="mt-1 text-sm text-white/85">{l(s.roomCardSub)}</p>
          </div>

          <ul aria-labelledby="room-card" className="mt-6 ml-10 flex flex-1 flex-col gap-4 lg:mt-0 lg:ml-16">
            {roomData.map((c, i) => {
              const Icon = icons[c.id]
              return (
                <li
                  key={c.id}
                  className="relative flex min-h-20 items-center gap-4 rounded-card border border-danger/20 bg-white p-4 shadow-card"
                >
                  {/* Tick from the rail into the card. */}
                  <span aria-hidden="true" className={`absolute top-1/2 -left-6 w-6 border-t-2 lg:-left-8 lg:w-8 ${line}`} />
                  {/* Rail segment: mobile covers the gap above plus this item, desktop runs from this centre to the next. */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-6 border-l-2 lg:bottom-auto lg:-left-8 lg:top-1/2 lg:h-[calc(100%+1rem)] ${i === 0 ? '-top-6' : '-top-4'} ${i === roomData.length - 1 ? 'bottom-1/2 lg:hidden' : 'bottom-0'} ${line}`}
                  />
                  <span className="grid size-11 shrink-0 place-items-center rounded-control bg-danger-50 text-danger">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-ink">{l(c.label)}</p>
                    <p className={c.count === undefined ? 'text-sm text-ink-soft' : 'text-lg font-extrabold text-danger'}>
                      {c.count === undefined ? l(s.noCount) : l(people(c.count))}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
