import type { Localized } from '../../data/types'

export const s = {
  title: { id: 'Berkas ICU', en: 'ICU Documents' },
  intro: {
    id: 'Arsip pedoman dan SOP Ruang ICU RSUD dr. Loekmono Hadi Kudus, dikelompokkan per kategori.',
    en: 'Archive of ICU guidelines and SOPs at RSUD dr. Loekmono Hadi Kudus, grouped by category.',
  },
  categories: { id: 'Kategori berkas', en: 'Document categories' },
  docCount: { id: 'dokumen', en: 'documents' },
  emptyTitle: { id: 'Belum ada dokumen pada kategori ini.', en: 'There are no documents in this category yet.' },
  emptyBody: {
    id: 'Dokumen akan tampil di sini setelah diunggah oleh pengelola Ruang ICU.',
    en: 'Documents will appear here once they are uploaded by the ICU team.',
  },
  preview: { id: 'Preview', en: 'Preview' },
  download: { id: 'Download', en: 'Download' },
  unavailable: { id: 'File belum tersedia', en: 'File not available yet' },
  updated: { id: 'Diperbarui', en: 'Updated' },
  openNewTab: { id: 'Buka di tab baru', en: 'Open in new tab' },
  close: { id: 'Tutup pratinjau', en: 'Close preview' },
  loadingPdf: { id: 'Memuat dokumen ...', en: 'Loading document ...' },
  mobileNote: {
    id: 'Sebagian browser ponsel tidak dapat menampilkan PDF di halaman. Gunakan Buka di tab baru atau Download.',
    en: 'Some mobile browsers cannot show PDFs inside the page. Use Open in new tab or Download.',
  },
  buildingAlt: { id: 'Gedung RSUD dr. Loekmono Hadi Kudus', en: 'RSUD dr. Loekmono Hadi Kudus hospital building' },
} satisfies Record<string, Localized>
