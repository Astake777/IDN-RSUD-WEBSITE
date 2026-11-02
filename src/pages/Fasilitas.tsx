import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { facilities } from '../data/facilities'
import { educationTopics } from '../data/education'
import { SectionHeading } from '../components/ui/SectionHeading'
import { EducationCard } from '../components/cards/EducationCard'
import { PageHeader } from '../components/ui/PageHeader'
import { FacilityCard } from '../features/fasilitas/FacilityCard'
import { s } from '../features/fasilitas/strings'
import { CheckBedsLink } from '../features/ketersediaan/CheckBedsLink'
import { s as bedStrings } from '../features/ketersediaan/strings'
import { useLang } from '../i18n/LanguageContext'

export default function Fasilitas() {
  const { l } = useLang()
  const preview = educationTopics.slice(0, 6)

  return (
    <>
      <PageHeader titleId="fasilitas-title" title={l(s.title)} lead={l(s.lead)} crumbs={[{ label: l(s.title) }]} />
      <section aria-labelledby="fasilitas-title" className="container-site py-12 sm:py-16">
        <div className="mb-10 flex flex-col gap-4 rounded-card border border-line bg-brand-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="max-w-xl text-ink">{l(bedStrings.ctaNote)}</p>
          <CheckBedsLink className="shrink-0 justify-center" />
        </div>
        <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <FacilityCard key={f.slug} facility={f} />
          ))}
        </div>
      </section>

      {preview.length > 0 && (
        <section aria-labelledby="fasilitas-edu-title" className="bg-brand-50 py-12 sm:py-16">
          <div className="container-site">
            <SectionHeading
              id="fasilitas-edu-title"
              title={l(s.eduTitle)}
              action={
                <Link
                  to="/edukasi"
                  className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900 hover:underline"
                >
                  {l(s.eduAll)}
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              }
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {preview.map((topic) => (
                <EducationCard key={topic.slug} topic={topic} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
