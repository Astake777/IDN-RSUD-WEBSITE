import type { ReactNode } from 'react'

interface Props {
  id?: string
  title: ReactNode
  lead?: ReactNode
  /** Right-aligned slot, e.g. a "see all" link. */
  action?: ReactNode
  as?: 'h1' | 'h2'
  className?: string
}

export function SectionHeading({ id, title, lead, action, as: Tag = 'h2', className = '' }: Props) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-x-8 gap-y-3 ${className}`}>
      <div className="max-w-3xl">
        <Tag id={id} className="h-section text-ink">
          {title}
        </Tag>
        {lead && <p className="mt-3 text-lg text-ink-soft">{lead}</p>}
      </div>
      {action}
    </div>
  )
}
