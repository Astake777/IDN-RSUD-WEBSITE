import type { Localized } from '../../data/types'

export const s = {
  pageTitle: { id: 'Edukasi dan Informasi', en: 'Education & Information' },
  pageIntro: {
    id: 'Materi edukasi untuk pasien dan keluarga pasien di Ruang ICU RSUD dr. Loekmono Hadi Kudus.',
    en: 'Education material for patients and their families in the ICU of RSUD dr. Loekmono Hadi Kudus.',
  },
  breadcrumb: { id: 'Breadcrumb', en: 'Breadcrumb' },
  incomplete: {
    id: 'Materi edukasi lengkap untuk topik ini belum tersedia.',
    en: 'Full education material for this topic is not yet available.',
  },
  importantTitle: { id: 'Pesan penting untuk keluarga', en: 'Important message for families' },
  videoTitle: { id: 'Video edukasi', en: 'Education video' },
  videoCta: {
    id: 'Tonton video edukasi di kanal YouTube RSLH TV',
    en: 'Watch education videos on the RSLH TV YouTube channel',
  },
  videoChannelHint: {
    id: 'Tautan ini membuka kanal YouTube RSLH TV milik RSUD dr. Loekmono Hadi Kudus.',
    en: 'This link opens the RSLH TV YouTube channel of RSUD dr. Loekmono Hadi Kudus.',
  },
  videoTopicHint: {
    id: 'Tautan ini membuka video edukasi topik ini di YouTube.',
    en: 'This link opens the education video for this topic on YouTube.',
  },
  toc: { id: 'Daftar isi', en: 'Contents' },
  topicNav: { id: 'Topik edukasi lainnya', en: 'Other education topics' },
  prev: { id: 'Sebelumnya', en: 'Previous' },
  next: { id: 'Berikutnya', en: 'Next' },
  allTopics: { id: 'Lihat semua edukasi', en: 'See all education topics' },
  topicNotFound: { id: 'Topik edukasi tidak ditemukan', en: 'Education topic not found' },
  topicNotFoundBody: {
    id: 'Topik yang Anda cari tidak tersedia. Silakan pilih dari daftar edukasi.',
    en: 'The topic you are looking for is not available. Please choose from the education list.',
  },
  backToList: { id: 'Kembali ke Edukasi dan Informasi', en: 'Back to Education & Information' },
} satisfies Record<string, Localized>
