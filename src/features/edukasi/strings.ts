import type { Localized } from '../../data/types'

export const s = {
  pageTitle: { id: 'Edukasi dan Informasi', en: 'Education & Information', jv: 'Edukasi lan Informasi' },
  pageIntro: {
    id: 'Materi edukasi untuk pasien dan keluarga pasien di Ruang ICU RSUD dr. Loekmono Hadi Kudus.',
    en: 'Education material for patients and their families in the ICU of RSUD dr. Loekmono Hadi Kudus.',
    jv: 'Materi edukasi kangge pasien lan kulawarga pasien wonten ing Ruang ICU RSUD dr. Loekmono Hadi Kudus.',
  },
  incomplete: {
    id: 'Materi edukasi lengkap untuk topik ini belum tersedia.',
    en: 'Full education material for this topic is not yet available.',
    jv: 'Materi edukasi jangkep kangge topik menika dereng wonten.',
  },
  importantTitle: { id: 'Pesan penting untuk keluarga', en: 'Important message for families', jv: 'Pesen wigati kangge kulawarga' },
  videoTitle: { id: 'Video edukasi', en: 'Education video', jv: 'Video edukasi' },
  videoCta: {
    id: 'Tonton video edukasi di kanal YouTube RSLH TV',
    en: 'Watch education videos on the RSLH TV YouTube channel',
    jv: 'Mirsani video edukasi wonten ing kanal YouTube RSLH TV',
  },
  videoTopicHint: {
    id: 'Tautan ini membuka video edukasi topik ini di YouTube.',
    en: 'This link opens the education video for this topic on YouTube.',
    jv: 'Tautan menika mbikak video edukasi topik menika wonten ing YouTube.',
  },
  toc: { id: 'Daftar isi', en: 'Contents', jv: 'Daftar isi' },
  topicNav: { id: 'Topik edukasi lainnya', en: 'Other education topics', jv: 'Topik edukasi sanesipun' },
  prev: { id: 'Sebelumnya', en: 'Previous', jv: 'Saderengipun' },
  next: { id: 'Berikutnya', en: 'Next', jv: 'Salajengipun' },
  allTopics: { id: 'Lihat semua edukasi', en: 'See all education topics', jv: 'Ningali sedaya edukasi' },
  topicNotFound: { id: 'Topik edukasi tidak ditemukan', en: 'Education topic not found', jv: 'Topik edukasi mboten kapanggihaken' },
  topicNotFoundBody: {
    id: 'Topik yang Anda cari tidak tersedia. Silakan pilih dari daftar edukasi.',
    en: 'The topic you are looking for is not available. Please choose from the education list.',
    jv: 'Topik ingkang panjenengan padosi mboten wonten. Mangga pilih saking daftar edukasi.',
  },
  backToList: { id: 'Kembali ke Edukasi dan Informasi', en: 'Back to Education & Information', jv: 'Wangsul dhateng Edukasi lan Informasi' },
} satisfies Record<string, Localized>
