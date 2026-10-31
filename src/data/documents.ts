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
export const documents: IcuDocument[] = [
  {
    id: 'pp-anestesiologi-terapi-intensif-2026',
    title: 'Pedoman Pelayanan Instalasi Anestesiologi dan Terapi Intensif',
    category: 'pedoman-pelayanan',
    description:
      'Pedoman pelayanan Instalasi Anestesiologi dan Terapi Intensif RSUD dr. Loekmono Hadi Kabupaten Kudus tahun 2026.',
    filePath: '/documents/pedoman-pelayanan/pedoman-pelayanan-instalasi-anestesiologi-dan-terapi-intensif-2026.pdf',
    fileName: 'pedoman-pelayanan-instalasi-anestesiologi-dan-terapi-intensif-2026.pdf',
    available: true,
    updatedAt: '2026',
    sizeLabel: '683 KB · 71 halaman',
  },
]

export function documentsByCategory(category: DocumentCategory): IcuDocument[] {
  return documents.filter((d) => d.category === category)
}
