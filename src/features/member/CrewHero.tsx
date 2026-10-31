import { useLang } from '../../i18n/LanguageContext'
import { s } from './strings'

export function CrewHero() {
  const { l } = useLang()
  return (
    // Backdrop matches the photo's own near-black edges so the contained image reads as full bleed.
    <section aria-labelledby="crew-title" className="bg-[#020912] py-8 sm:py-12">
      <figure className="container-site">
        <img
          src="/images/crew-icu.webp"
          alt={l(s.crewAlt)}
          width={2000}
          height={1333}
          fetchPriority="high"
          className="mx-auto block aspect-[3/2] max-h-[calc(100svh-12rem)] w-full object-contain"
        />
        {/* The photo carries its own script caption, so the heading is for screen readers only. */}
        <figcaption>
          <h1 id="crew-title" className="sr-only">
            {l(s.crewTitle)}
          </h1>
        </figcaption>
      </figure>
    </section>
  )
}
