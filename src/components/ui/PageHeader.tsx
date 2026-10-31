import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'

export interface Crumb {
  label: string
  /** Omit for the current page. */
  to?: string
}

interface Props {
  title: string
  /** Trail after Beranda; the last item is the current page. */
  crumbs: Crumb[]
  lead?: string
  titleId?: string
  image?: string
}

// Overlay stays within brand-900 at 86% or more so white text keeps at least 6.6:1 over the brightest part of the photo.
const overlay =
  'linear-gradient(100deg, rgb(13 58 7 / 0.97) 0%, rgb(20 80 10 / 0.92) 55%, rgb(20 80 10 / 0.86) 100%)'

export function PageHeader({ title, crumbs, lead, titleId, image = '/images/gedung-rs.webp' }: Props) {
  const { t } = useLang()
  const trail: Crumb[] = [{ label: t('navHome'), to: '/' }, ...crumbs]

  return (
    <header className="relative isolate overflow-hidden bg-brand-900 text-white">
      <img
        src={image}
        alt=""
        aria-hidden
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: overlay }} aria-hidden />

      <div className="container-site py-12 sm:py-16 lg:py-[88px]">
        <h1 id={titleId} className="max-w-4xl text-[1.75rem] font-bold leading-tight sm:text-[1.875rem] lg:text-[2rem]">
          {title}
        </h1>
        {lead && <p className="mt-3 max-w-3xl text-base text-white/85 sm:text-lg">{lead}</p>}

        <nav aria-label={t('breadcrumb')} className="mt-4">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.9375rem]">
            {trail.map((c, i) => {
              const last = i === trail.length - 1
              return (
                <Fragment key={`${i}-${c.label}`}>
                  <li className="flex items-center">
                    {last || !c.to ? (
                      <span aria-current={last ? 'page' : undefined} className="font-bold text-white">
                        {c.label}
                      </span>
                    ) : (
                      <Link
                        to={c.to}
                        className="inline-flex min-h-11 items-center text-white/85 hover:text-white hover:underline"
                      >
                        {c.label}
                      </Link>
                    )}
                  </li>
                  {!last && (
                    <li aria-hidden className="flex items-center">
                      <ChevronRight className="size-4 text-white/60" />
                    </li>
                  )}
                </Fragment>
              )
            })}
          </ol>
        </nav>
      </div>
    </header>
  )
}
