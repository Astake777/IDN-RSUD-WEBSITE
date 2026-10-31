import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, Info, MessageCircleQuestion, Phone, Play } from 'lucide-react'
import { YoutubeIcon } from '../../components/icons/BrandIcons'
import { contact, social } from '../../config/site'
import { educationTopics, icuVisitSchedule, VISIT_SCHEDULE_SECTION } from '../../data/education'
import type { EducationSection, EducationTopic } from '../../data/types'
import { useLang } from '../../i18n/LanguageContext'
import { PageHeader } from '../../components/ui/PageHeader'
import { MedicalDisclaimer } from './MedicalDisclaimer'
import { side } from './sidebarStrings'
import { s } from './strings'

const linkCls = 'font-semibold text-brand-700 underline-offset-4 hover:text-brand-900 hover:underline'

export function EducationDetail({ slug }: { slug: string }) {
  const { t, l } = useLang()
  const index = educationTopics.findIndex((x) => x.slug === slug)
  const topic = educationTopics[index] as EducationTopic | undefined
  const title = topic ? l(topic.title) : l(s.topicNotFound)

  useEffect(() => {
    document.title = `${title} · SERU ICU`
  }, [title])

  if (!topic) {
    return (
      <>
        <PageHeader title={title} crumbs={[{ label: t('navEducation'), to: '/edukasi' }, { label: title }]} />
        <section className="container-site py-12 sm:py-16">
        <p className="max-w-xl text-ink-soft">{l(s.topicNotFoundBody)}</p>
        <Link
          to="/edukasi"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-control bg-brand-900 px-6 font-bold text-white hover:bg-brand-700"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {l(s.backToList)}
        </Link>
        </section>
      </>
    )
  }

  const prev = educationTopics[index - 1]
  const next = educationTopics[index + 1]
  const sectionId = (i: number) => `${topic.slug}-bagian-${i + 1}`
  const messageId = `${topic.slug}-pesan-penting`
  const toc = [
    ...topic.sections.map((sec, i) => ({ id: sectionId(i), label: l(sec.heading) })),
    ...(topic.importantMessage ? [{ id: messageId, label: l(s.importantTitle) }] : []),
  ]

  return (
    <>
    <PageHeader title={title} crumbs={[{ label: t('navEducation'), to: '/edukasi' }, { label: title }]} />
    <article aria-label={title} className="container-site py-12 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="min-w-0">
          <figure className="overflow-hidden rounded-card border border-line bg-brand-50">
            <img
              src={topic.image.src}
              alt={l(topic.image.alt)}
              decoding="async"
              className="aspect-[16/10] w-full object-contain"
            />
          </figure>
          {topic.illustration && (
            <figure className="mt-6 overflow-hidden rounded-card border border-line bg-white">
              <img
                src={topic.illustration.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full object-contain"
              />
              <figcaption className="border-t border-line px-4 py-3 text-sm text-ink-soft">
                {l(topic.illustration.alt)}
              </figcaption>
            </figure>
          )}

          {!topic.complete && (
            <p role="note" className="mt-8 flex gap-3 rounded-card border border-line bg-brand-50 p-5 text-ink">
              <Info className="mt-0.5 size-5 shrink-0 text-brand-700" aria-hidden />
              {l(s.incomplete)}
            </p>
          )}

          <div className="mt-8 max-w-[72ch] space-y-10 text-[1.0625rem] leading-relaxed text-ink sm:text-[1.125rem]">
            {topic.sections.map((sec, i) => (
              <Section
                key={sectionId(i)}
                id={sectionId(i)}
                section={sec}
                schedule={topic.slug === 'masuk-icu' && i === VISIT_SCHEDULE_SECTION}
              />
            ))}

            {topic.importantMessage && (
              <section
                aria-labelledby={messageId}
                className="rounded-card border border-line border-t-4 border-t-brand-700 bg-brand-50 p-6"
              >
                <h2 id={messageId} className="scroll-mt-36 text-xl font-bold text-brand-900">
                  {l(s.importantTitle)}
                </h2>
                <div className="mt-3 space-y-3">
                  {topic.importantMessage.map((p, i) => (
                    <p key={i}>{l(p)}</p>
                  ))}
                </div>
              </section>
            )}
          </div>

          <nav aria-label={l(s.topicNav)} className="mt-10 border-t border-line pt-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {prev && (
                <li>
                  <TopicLink topic={prev} label={l(s.prev)} dir="prev" />
                </li>
              )}
              {next && (
                <li className="sm:col-start-2">
                  <TopicLink topic={next} label={l(s.next)} dir="next" />
                </li>
              )}
            </ul>
            <Link to="/edukasi" className={`mt-6 inline-flex min-h-11 items-center gap-2 ${linkCls}`}>
              <ArrowLeft className="size-4" aria-hidden />
              {l(s.allTopics)}
            </Link>
          </nav>

          <MedicalDisclaimer className="mt-8" />
        </div>


        {/* Desktop: stays in view beside the text. Mobile: stacks after the article. */}
        <aside className="min-w-0">
          <div className="space-y-6 lg:sticky lg:top-[136px]">
            <VideoCard topic={topic} />

            {toc.length > 1 && (
              <nav aria-label={l(s.toc)} className="hidden rounded-card border border-line bg-white p-5 lg:block">
                <p className="text-sm font-bold uppercase tracking-wide text-ink-soft">{l(s.toc)}</p>
                <ul className="mt-3 border-l border-line text-[0.9375rem]">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 leading-snug text-ink-soft hover:border-brand-700 hover:text-brand-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="rounded-card bg-brand-900 p-5 text-white">
              <p className="flex items-center gap-2 font-bold">
                <MessageCircleQuestion className="size-5" aria-hidden />
                {l(side.helpTitle)}
              </p>
              <p className="mt-2 text-[0.9375rem] text-white/90">{l(side.helpBody)}</p>
              <a
                href={contact.phoneHref}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-control bg-white px-4 font-bold text-brand-900 hover:bg-brand-50"
              >
                <Phone className="size-4" aria-hidden />
                <span className="sr-only">{l(side.helpPhone)}: </span>
                {contact.phoneLabel}
              </a>
            </div>
          </div>
        </aside>
      </div>

      <OtherTopics current={topic.slug} />
    </article>
    </>
  )
}

function Section({ id, section, schedule }: { id: string; section: EducationSection; schedule: boolean }) {
  const { l } = useLang()
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="scroll-mt-36 text-xl font-bold leading-snug text-brand-900 sm:text-2xl">
        {l(section.heading)}
      </h2>
      {schedule && <VisitSchedule />}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3">
          {l(p)}
        </p>
      ))}
      {section.points && (
        <ul className="mt-3 list-disc space-y-1.5 pl-6 marker:text-brand-700">
          {l(section.points).map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      )}
      {section.note && (
        <p className="mt-4 rounded-control border border-line bg-white p-4 text-[0.9375rem] text-ink-soft">
          {l(section.note)}
        </p>
      )}
    </section>
  )
}

function VisitSchedule() {
  const { l } = useLang()
  return (
    <div className="mt-4 rounded-card border border-line bg-brand-50 p-5">
      <p className="flex items-center gap-2 font-bold text-brand-900">
        <Clock className="size-5" aria-hidden />
        {l(icuVisitSchedule.title)}
      </p>
      <dl className="mt-3 grid gap-3 sm:grid-cols-2">
        {icuVisitSchedule.slots.map((slot) => (
          <div key={slot.time} className="rounded-control border border-line bg-white px-4 py-3">
            <dt className="text-sm font-semibold uppercase tracking-wide text-ink-soft">{l(slot.label)}</dt>
            <dd className="text-lg font-bold text-ink">{slot.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function TopicLink({ topic, label, dir }: { topic: EducationTopic; label: string; dir: 'prev' | 'next' }) {
  const { l } = useLang()
  const Icon = dir === 'prev' ? ArrowLeft : ArrowRight
  return (
    <Link
      to={`/edukasi/${topic.slug}`}
      rel={dir}
      className={`flex h-full min-h-11 flex-col gap-1 rounded-card border border-line bg-white p-4 hover:border-brand-700/40 hover:shadow-card ${dir === 'next' ? 'items-end text-right' : ''}`}
    >
      <span className="flex items-center gap-1.5 text-sm text-ink-soft">
        {dir === 'prev' && <Icon className="size-4" aria-hidden />}
        {label}
        {dir === 'next' && <Icon className="size-4" aria-hidden />}
      </span>
      <span className="font-bold text-brand-900">{l(topic.title)}</span>
    </Link>
  )
}

/** Video id from youtu.be/<id> or youtube.com/watch?v=<id> links. */
function youtubeId(url: string) {
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') return u.pathname.slice(1) || null
    return u.searchParams.get('v')
  } catch {
    return null
  }
}

function VideoCard({ topic }: { topic: EducationTopic }) {
  const { t, l } = useLang()
  const url = topic.videoUrl ?? social.youtube.url
  const id = topic.videoUrl ? youtubeId(topic.videoUrl) : null
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-card border border-line bg-white hover:border-brand-700/40 hover:shadow-card"
    >
      <span className="relative block aspect-video bg-ink">
        <img
          src={id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : topic.image.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
        <span className="absolute inset-0 grid place-items-center bg-ink/25 transition-colors group-hover:bg-ink/10">
          <span className="grid size-14 place-items-center rounded-full bg-white text-danger shadow-card">
            <Play className="ml-0.5 size-6 fill-current" aria-hidden />
          </span>
        </span>
      </span>
      <span className="flex flex-col gap-1 p-5">
        <span className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
          <YoutubeIcon className="size-5 text-danger" />
          {l(s.videoTitle)}
        </span>
        <span className="text-lg font-bold leading-snug text-ink group-hover:text-brand-900 group-hover:underline">
          {l(s.videoCta)}
        </span>
        <span className="text-sm text-ink-soft">
          {l(topic.videoUrl ? s.videoTopicHint : s.videoChannelHint)}
          <span className="sr-only"> {t('opensNewTab')}</span>
        </span>
      </span>
    </a>
  )
}

function OtherTopics({ current }: { current: string }) {
  const { l } = useLang()
  const others = educationTopics.filter((x) => x.slug !== current)
  return (
    <section aria-labelledby="edu-lainnya" className="mt-16 border-t border-line pt-10">
      <h2 id="edu-lainnya" className="text-2xl font-bold text-ink">
        {l(side.otherTopics)}
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((x) => (
          <li key={x.slug}>
            <Link
              to={`/edukasi/${x.slug}`}
              className="group flex h-full items-center gap-3 rounded-card border border-line bg-white p-3 hover:border-brand-700/40 hover:shadow-card"
            >
              <img
                src={x.image.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="size-16 shrink-0 rounded-control bg-brand-50 object-cover"
              />
              <span className="font-semibold leading-snug text-ink group-hover:text-brand-900 group-hover:underline">
                {l(x.title)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
