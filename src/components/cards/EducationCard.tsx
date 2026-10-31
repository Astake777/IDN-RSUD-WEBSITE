import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { EducationTopic } from '../../data/types'
import { useLang } from '../../i18n/LanguageContext'

interface Props {
  topic: EducationTopic
  headingLevel?: 'h2' | 'h3'
}

export function EducationCard({ topic, headingLevel: H = 'h3' }: Props) {
  const { t, l } = useLang()
  const titleId = `edu-${topic.slug}`

  return (
    <article
      aria-labelledby={titleId}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-[box-shadow,border-color] duration-200 hover:border-brand-700/40 hover:shadow-card motion-reduce:transition-none"
    >
      <div className="aspect-[16/10] overflow-hidden bg-brand-50">
        <img
          src={topic.image.src}
          alt={l(topic.image.alt)}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <H id={titleId} className="text-lg font-bold leading-snug text-ink">
          {l(topic.title)}
        </H>
        <p className="mt-2 line-clamp-4 text-[0.9375rem] text-ink-soft">{l(topic.summary)}</p>
        <Link
          to={`/edukasi/${topic.slug}`}
          aria-describedby={titleId}
          className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-4 font-semibold text-brand-700 hover:text-brand-900 hover:underline"
        >
          {t('readMore')}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
