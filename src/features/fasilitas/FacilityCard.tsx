import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import type { Facility } from '../../data/types'
import { useLang } from '../../i18n/LanguageContext'
import { s } from './strings'

// Product photos shot on white: shown whole instead of cropped.
const productShots = new Set(['syringe-pump', 'bedside-monitor'])

export function FacilityCard({ facility: f }: { facility: Facility }) {
  const { l } = useLang()
  const [open, setOpen] = useState(false)
  const titleId = `fasilitas-${f.slug}-title`
  const bodyId = `fasilitas-${f.slug}-body`
  const paragraphs = l(f.description).split('\n\n')
  const functions = f.functions ? l(f.functions) : []
  const expandable = paragraphs.length > 1 || functions.length > 0 || paragraphs[0].length > 220
  const product = productShots.has(f.slug)

  return (
    <article
      id={`fasilitas-${f.slug}`}
      aria-labelledby={titleId}
      className="flex scroll-mt-32 flex-col overflow-hidden rounded-card border border-line bg-white transition-[box-shadow,border-color] duration-200 hover:border-brand-700/40 hover:shadow-card motion-reduce:transition-none"
    >
      <div className={`aspect-[16/10] ${product ? 'bg-white p-6' : 'bg-brand-50'}`}>
        <img
          src={f.image.src}
          alt={l(f.image.alt)}
          loading="lazy"
          decoding="async"
          className={`size-full ${product ? 'object-contain' : 'object-cover'}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 id={titleId} className="text-lg font-bold leading-snug text-ink">
          {l(f.name)}
        </h2>
        <div id={bodyId} className="mt-2 space-y-3 text-[0.9375rem] text-ink-soft">
          {open ? (
            <>
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              {functions.length > 0 && (
                <div>
                  <h3 className="font-semibold text-ink">{l(s.functions)}</h3>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5">
                    {functions.map((fn) => (
                      <li key={fn}>{fn}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <p className={expandable ? 'line-clamp-4' : undefined}>{paragraphs[0]}</p>
          )}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 pt-3">
          {expandable && (
            <button
              type="button"
              aria-expanded={open}
              aria-controls={bodyId}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex min-h-11 items-center gap-1 font-semibold text-brand-700 hover:text-brand-900 hover:underline"
            >
              {l(open ? s.less : s.more)}
              <ChevronDown
                aria-hidden
                className={`size-4 transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
              />
            </button>
          )}
          {f.educationSlug && (
            <Link
              to={`/edukasi/${f.educationSlug}`}
              aria-describedby={titleId}
              className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900 hover:underline"
            >
              {l(s.seeEducation)}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
