import type { DocumentCategory, IcuDocument } from './types'

/*
  Add an entry only after the PDF is placed under public/documents/<category>/.
  Example shape:
  {
    id: 'spo-transfer-pasien',
    title: 'SPO Transfer Pasien',
    category: 'spo-ruang-icu',
    description: 'Prosedur pemindahan pasien dari dan ke Ruang ICU.',
    filePath: '/documents/spo-ruang-icu/spo-transfer-pasien.pdf',
    fileName: 'spo-transfer-pasien.pdf',
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
  {
    id: 'spo-keperawatan-2026',
    title: 'Standar Prosedur Operasional (SPO) Keperawatan',
    category: 'spo-keperawatan',
    description: 'Kumpulan SPO keperawatan RSUD dr. Loekmono Hadi Kabupaten Kudus tahun 2026.',
    filePath: '/documents/spo-keperawatan/spo-keperawatan-2026.pdf',
    fileName: 'spo-keperawatan-2026.pdf',
    available: true,
    updatedAt: '2026',
    sizeLabel: '64 MB · 955 halaman',
  },
]

export function documentsByCategory(category: DocumentCategory): IcuDocument[] {
  return documents.filter((d) => d.category === category)
}
