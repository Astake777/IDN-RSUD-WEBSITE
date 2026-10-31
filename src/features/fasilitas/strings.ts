import type { Localized } from '../../data/types'

export const s = {
  title: { id: 'Fasilitas Ruangan ICU', en: 'ICU Room Facilities', jv: 'Fasilitas Ruangan ICU' },
  lead: {
    id: 'Dalam mendukung pelayanan pasien kritis, ruang ICU dilengkapi dengan sarana dan prasarana medis yang disesuaikan dengan kebutuhan pelayanan intensif.',
    en: 'To support the care of critical patients, the ICU is equipped with medical facilities and infrastructure suited to the needs of intensive care.',
    jv: 'Kangge nyengkuyung pelayanan pasien kritis, ruang ICU dipunjangkepi sarana lan prasarana medis ingkang dipunjumbuhaken kaliyan kabetahan pelayanan intensif.',
  },
  more: { id: 'Selengkapnya', en: 'Read more', jv: 'Langkung jangkep' },
  less: { id: 'Tutup', en: 'Show less', jv: 'Tutup' },
  functions: { id: 'Fungsi utama', en: 'Main functions', jv: 'Fungsi utami' },
  seeEducation: { id: 'Lihat edukasi', en: 'View education', jv: 'Pirsani edukasi' },
  eduTitle: { id: 'Edukasi dan Informasi', en: 'Education and Information', jv: 'Edukasi lan Informasi' },
  eduAll: {
    id: 'Lihat Semua Edukasi & Informasi Kesehatan',
    en: 'See all health education & information',
    jv: 'Pirsani Sedaya Edukasi & Informasi Kesehatan',
  },
} satisfies Record<string, Localized>
