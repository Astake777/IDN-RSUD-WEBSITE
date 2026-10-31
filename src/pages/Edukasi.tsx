import { useEffect } from 'react'
import { EducationCard } from '../components/cards/EducationCard'
import { PageHeader } from '../components/ui/PageHeader'
import { educationTopics } from '../data/education'
import { MedicalDisclaimer } from '../features/edukasi/MedicalDisclaimer'
import { s } from '../features/edukasi/strings'
import { useLang } from '../i18n/LanguageContext'

export default function Edukasi() {
  const { l } = useLang()
  const title = l(s.pageTitle)

  useEffect(() => {
    document.title = `${title} · SERU ICU`
  }, [title])

  return (
    <>
    <PageHeader title={title} lead={l(s.pageIntro)} crumbs={[{ label: title }]} />
    <section className="container-site py-12 sm:py-16">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {educationTopics.map((topic) => (
          <li key={topic.slug}>
            <EducationCard topic={topic} headingLevel="h2" />
          </li>
        ))}
      </ul>
      <MedicalDisclaimer className="mt-12 max-w-3xl" />
    </section>
    </>
  )
}
