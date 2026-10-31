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
}

// Plain white header as in the original page mockups: title, optional lead, breadcrumb.
export function PageHeader({ title, crumbs, lead, titleId }: Props) {
  const { t } = useLang()
  const trail: Crumb[] = [{ label: t('navHome'), to: '/' }, ...crumbs]

  return (
    <header className="border-b border-line bg-white">
      <div className="container-site pb-8 pt-10 sm:pb-10 sm:pt-12">
        <h1
          id={titleId}
          className="max-w-4xl text-[length:calc(1.75rem*var(--a11y-fs,1))] font-bold leading-tight text-ink sm:text-[length:calc(1.875rem*var(--a11y-fs,1))] lg:text-[length:calc(2rem*var(--a11y-fs,1))]"
        >
          {title}
        </h1>
        {lead && <p className="mt-3 max-w-3xl text-base text-ink-soft sm:text-lg">{lead}</p>}

        <nav aria-label={t('breadcrumb')} className="mt-3">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[length:calc(0.9375rem*var(--a11y-fs,1))]">
            {trail.map((c, i) => {
              const last = i === trail.length - 1
              return (
                <Fragment key={`${i}-${c.label}`}>
                  <li className="flex items-center">
                    {last || !c.to ? (
                      <span aria-current={last ? 'page' : undefined} className="font-bold text-ink">
                        {c.label}
                      </span>
                    ) : (
                      <Link
                        to={c.to}
                        className="inline-flex min-h-11 items-center text-ink-soft hover:text-brand-900 hover:underline"
                      >
                        {c.label}
                      </Link>
                    )}
                  </li>
                  {!last && (
                    <li aria-hidden className="flex items-center">
                      <ChevronRight className="size-4 text-ink-soft" />
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
