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
    label: { id: 'Pedoman Pelayanan', en: 'Service Guidelines', jv: 'Pedoman Pelayanan' },
    description: { id: 'Dokumen pedoman pelayanan Ruang ICU.', en: 'Service guideline documents for the ICU.', jv: 'Dokumen pedoman pelayanan Ruang ICU.' },
    icon: BookOpen,
  },
  {
    slug: 'pedoman-organisasi',
    label: { id: 'Pedoman Organisasi', en: 'Organisational Guidelines', jv: 'Pedoman Organisasi' },
    description: { id: 'Dokumen pedoman organisasi Ruang ICU.', en: 'Organisational guideline documents for the ICU.', jv: 'Dokumen pedoman organisasi Ruang ICU.' },
    icon: Network,
  },
  {
    slug: 'sop-keperawatan',
    label: { id: 'SOP Keperawatan', en: 'Nursing SOPs', jv: 'SOP Keperawatan' },
    description: { id: 'Standar prosedur operasional keperawatan.', en: 'Standard operating procedures for nursing.', jv: 'Standar prosedur operasional keperawatan.' },
    icon: ClipboardList,
  },
  {
    slug: 'sop-ruang-icu',
    label: { id: 'SOP Ruang ICU', en: 'ICU Room SOPs', jv: 'SOP Ruang ICU' },
    description: { id: 'Standar prosedur operasional Ruang ICU.', en: 'Standard operating procedures for the ICU room.', jv: 'Standar prosedur operasional Ruang ICU.' },
    icon: ShieldCheck,
  },
]

export const defaultCategory: DocumentCategory = 'pedoman-pelayanan'

export function isDocumentCategory(value: string | null): value is DocumentCategory {
  return documentCategories.some((c) => c.slug === value)
}
