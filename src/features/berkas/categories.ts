import { BookOpen, ClipboardList, Network, ShieldCheck, type LucideIcon } from 'lucide-react'
import type { DocumentCategory, Localized } from '../../data/types'

export interface DocumentCategoryInfo {
  slug: DocumentCategory
  label: Localized
  description: Localized
  icon: LucideIcon
}

export const documentCategories: DocumentCategoryInfo[] = [
  {
    slug: 'pedoman-pelayanan',
    label: { id: 'Pedoman Pelayanan', en: 'Service Guidelines' },
    description: { id: 'Dokumen pedoman pelayanan Ruang ICU.', en: 'Service guideline documents for the ICU.' },
    icon: BookOpen,
  },
  {
    slug: 'pedoman-organisasi',
    label: { id: 'Pedoman Organisasi', en: 'Organisational Guidelines' },
    description: { id: 'Dokumen pedoman organisasi Ruang ICU.', en: 'Organisational guideline documents for the ICU.' },
    icon: Network,
  },
  {
    slug: 'sop-keperawatan',
    label: { id: 'SOP Keperawatan', en: 'Nursing SOPs' },
    description: { id: 'Standar prosedur operasional keperawatan.', en: 'Standard operating procedures for nursing.' },
    icon: ClipboardList,
  },
  {
    slug: 'sop-ruang-icu',
    label: { id: 'SOP Ruang ICU', en: 'ICU Room SOPs' },
    description: { id: 'Standar prosedur operasional Ruang ICU.', en: 'Standard operating procedures for the ICU room.' },
    icon: ShieldCheck,
  },
]

export const defaultCategory: DocumentCategory = 'pedoman-pelayanan'

export function isDocumentCategory(value: string | null): value is DocumentCategory {
  return documentCategories.some((c) => c.slug === value)
}
