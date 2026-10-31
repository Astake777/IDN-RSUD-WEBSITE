import { SeruSection } from '../features/seru/SeruSection'
import { s } from '../features/seru/strings'
import { useLang } from '../i18n/LanguageContext'

export default function Home() {
  const { l } = useLang()
  return (
    <>
      {/* Full photo, uncropped, as in the Landing Page mockup: the sign itself carries the RSUD name. */}
      <div className="bg-brand-50">
        <img
          src="/images/hero-icu.webp"
          width={1418}
          height={752}
          alt={l(s.heroAlt)}
          loading="eager"
          fetchPriority="high"
          className="block h-auto w-full"
        />
      </div>
      <SeruSection />
    </>
  )
}
