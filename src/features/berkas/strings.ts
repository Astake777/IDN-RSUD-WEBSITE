import type { Localized } from '../../data/types'

export const s = {
  title: { id: 'Berkas ICU', en: 'ICU Documents', jv: 'Berkas ICU' },
  intro: {
    id: 'Arsip pedoman dan SPO Ruang ICU RSUD dr. Loekmono Hadi Kudus, dikelompokkan per kategori.',
    en: 'Archive of ICU guidelines and SPOs at RSUD dr. Loekmono Hadi Kudus, grouped by category.',
    jv: 'Arsip pedoman lan SPO Ruang ICU RSUD dr. Loekmono Hadi Kudus, dipunkelompokaken miturut kategori.',
  },
  categories: { id: 'Kategori berkas', en: 'Document categories', jv: 'Kategori berkas' },
  docCount: { id: 'dokumen', en: 'documents', jv: 'dokumen' },
  emptyTitle: { id: 'Belum ada dokumen pada kategori ini.', en: 'There are no documents in this category yet.', jv: 'Dereng wonten dokumen ing kategori punika.' },
  emptyBody: {
    id: 'Dokumen akan tampil di sini setelah diunggah oleh pengelola Ruang ICU.',
    en: 'Documents will appear here once they are uploaded by the ICU team.',
    jv: 'Dokumen badhe katingal ing ngriki sasampunipun dipununggah dening pengelola Ruang ICU.',
  },
  preview: { id: 'Preview', en: 'Preview', jv: 'Preview' },
  download: { id: 'Download', en: 'Download', jv: 'Download' },
  unavailable: { id: 'File belum tersedia', en: 'File not available yet', jv: 'File dereng cumawis' },
  updated: { id: 'Diperbarui', en: 'Updated', jv: 'Dipunanyari' },
  openNewTab: { id: 'Buka di tab baru', en: 'Open in new tab', jv: 'Bikak ing tab enggal' },
  close: { id: 'Tutup pratinjau', en: 'Close preview', jv: 'Tutup pratinjau' },
  loadingPdf: { id: 'Memuat dokumen ...', en: 'Loading document ...', jv: 'Ngemot dokumen ...' },
  mobileNote: {
    id: 'Sebagian browser ponsel tidak dapat menampilkan PDF di halaman. Gunakan Buka di tab baru atau Download.',
    en: 'Some mobile browsers cannot show PDFs inside the page. Use Open in new tab or Download.',
    jv: 'Sawetawis browser ponsel mboten saged nampilaken PDF ing kaca. Ginakaken Bikak ing tab enggal utawi Download.',
  },
  buildingAlt: { id: 'Gedung RSUD dr. Loekmono Hadi Kudus', en: 'RSUD dr. Loekmono Hadi Kudus hospital building', jv: 'Gedhung RSUD dr. Loekmono Hadi Kudus' },
} satisfies Record<string, Localized>
