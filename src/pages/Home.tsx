import { SeruSection } from '../features/seru/SeruSection'
import { s } from '../features/seru/strings'
import { useLang } from '../i18n/LanguageContext'

export default function Home() {
  const { l } = useLang()
  return (
    <>
      <div className="relative bg-brand-50">
        {/* Left-anchored crop keeps the whole sign in frame on narrow screens. */}
        <img
          src="/images/hero-icu.webp"
          width={1418}
          height={752}
          alt={l(s.heroAlt)}
          loading="eager"
          fetchPriority="high"
          className="block aspect-[4/3] max-h-[640px] w-full object-cover object-[0%_40%] sm:aspect-[16/9] lg:aspect-[16/7]"
        />
        <div className="absolute inset-x-0 bottom-3 sm:bottom-5">
          <p className="container-site">
            <span className="inline-block rounded-control bg-brand-900 px-3 py-1.5 text-sm font-semibold text-white">
              {l(s.heroCaption)} · SERU ICU
            </span>
          </p>
        </div>
      </div>
      <SeruSection />
    </>
  )
}
