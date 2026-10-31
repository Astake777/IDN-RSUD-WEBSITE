import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { facilities } from '../data/facilities'
import { educationTopics } from '../data/education'
import { SectionHeading } from '../components/ui/SectionHeading'
import { EducationCard } from '../components/cards/EducationCard'
import { FacilityCard } from '../features/fasilitas/FacilityCard'
import { s } from '../features/fasilitas/strings'
import { useLang } from '../i18n/LanguageContext'

export default function Fasilitas() {
  const { l } = useLang()
  const preview = educationTopics.slice(0, 6)

  return (
    <>
      <section aria-labelledby="fasilitas-title" className="container-site py-12 sm:py-16">
        <SectionHeading as="h1" id="fasilitas-title" title={l(s.title)} lead={l(s.lead)} />
        <div className="mt-10 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
