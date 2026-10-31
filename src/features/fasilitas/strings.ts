import type { Localized } from '../../data/types'

export const s = {
  title: { id: 'Fasilitas Ruangan ICU', en: 'ICU Room Facilities' },
  lead: {
    id: 'Dalam mendukung pelayanan pasien kritis, ruang ICU dilengkapi dengan sarana dan prasarana medis yang disesuaikan dengan kebutuhan pelayanan intensif.',
    en: 'To support the care of critical patients, the ICU is equipped with medical facilities and infrastructure suited to the needs of intensive care.',
  },
  more: { id: 'Selengkapnya', en: 'Read more' },
  less: { id: 'Tutup', en: 'Show less' },
  functions: { id: 'Fungsi utama', en: 'Main functions' },
  seeEducation: { id: 'Lihat edukasi', en: 'View education' },
  eduTitle: { id: 'Edukasi dan Informasi', en: 'Education and Information' },
  eduAll: {
    id: 'Lihat Semua Edukasi & Informasi Kesehatan',
    en: 'See all health education & information',
  },
} satisfies Record<string, Localized>
