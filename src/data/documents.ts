import type { DocumentCategory, IcuDocument } from './types'

/*
  Add an entry only after the PDF is placed under public/documents/<category>/.
  Example shape:
  {
    id: 'sop-transfer-pasien',
    title: 'SOP Transfer Pasien',
    category: 'sop-ruang-icu',
    description: 'Prosedur pemindahan pasien dari dan ke Ruang ICU.',
    filePath: '/documents/sop-ruang-icu/sop-transfer-pasien.pdf',
    fileName: 'sop-transfer-pasien.pdf',
    available: true,
    updatedAt: '2026-01-15',
    sizeLabel: '240 KB',
  },
*/
export const documents: IcuDocument[] = []

export function documentsByCategory(category: DocumentCategory): IcuDocument[] {
  return documents.filter((d) => d.category === category)
}
