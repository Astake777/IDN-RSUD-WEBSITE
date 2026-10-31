import type { Localized } from '../data/types'

/* Shared chrome strings only. Page-specific copy lives next to its feature as Localized objects. */
export const ui = {
  // utility bar
  patientsVisitors: { id: 'Pasien & Pengunjung', en: 'Patients & Visitors', jv: 'Pasien lan Tamu' },
  welcome: { id: 'Selamat Datang', en: 'Welcome', jv: 'Sugeng Rawuh' },
  language: { id: 'Bahasa', en: 'Language', jv: 'Basa' },
  chooseLanguage: { id: 'Pilih bahasa', en: 'Choose language', jv: 'Pilih basa' },
  opensNewTab: { id: '(membuka tab baru)', en: '(opens in a new tab)', jv: '(mbikak tab enggal)' },

  // navigation
  navHome: { id: 'Beranda', en: 'Home', jv: 'Kaca Ngajeng' },
  navMember: { id: 'Member', en: 'Members', jv: 'Anggota' },
  navFacilities: { id: 'Fasilitas Ruangan', en: 'Room Facilities', jv: 'Fasilitas Ruangan' },
  navEducation: { id: 'Edukasi dan Informasi', en: 'Education & Information', jv: 'Edukasi lan Informasi' },
  navDocuments: { id: 'Berkas ICU', en: 'ICU Documents', jv: 'Berkas ICU' },
  mainNav: { id: 'Navigasi utama', en: 'Main navigation', jv: 'Navigasi utama' },
  menu: { id: 'Menu', en: 'Menu', jv: 'Menu' },
  closeMenu: { id: 'Tutup menu', en: 'Close menu', jv: 'Tutup menu' },
  homeLink: {
    id: 'RSUD dr. Loekmono Hadi Kudus, ke beranda',
    en: 'RSUD dr. Loekmono Hadi Kudus, go to home',
    jv: 'RSUD dr. Loekmono Hadi Kudus, dhateng kaca ngajeng',
  },
  skipToContent: { id: 'Lewati ke konten utama', en: 'Skip to main content', jv: 'Langsung dhateng isi utama' },

  // search
  searchPlaceholder: { id: 'Cari ...', en: 'Search ...', jv: 'Madosi ...' },
  searchLabel: { id: 'Cari konten website', en: 'Search the website', jv: 'Madosi isi website' },

  // footer
  footerHoursTitle: {
    id: 'Pelayanan Poliklinik Rawat Jalan',
    en: 'Outpatient Clinic Services',
    jv: 'Pelayanan Poliklinik Rawat Jalan',
  },
  footerContactTitle: { id: 'Contact Info', en: 'Contact Info', jv: 'Contact Info' },
  footerSocial: { id: 'Media sosial', en: 'Social media', jv: 'Media sosial' },
  closed: { id: 'Tutup', en: 'Closed', jv: 'Tutup' },
  emergency: { id: 'Pelayanan IGD', en: 'Emergency Department', jv: 'Pelayanan IGD' },
  emergencyHours: { id: '24 Jam', en: '24 Hours', jv: '24 Jam' },
  phone: { id: 'Telepon', en: 'Telephone', jv: 'Telepon' },
  whatsapp: { id: 'WhatsApp', en: 'WhatsApp', jv: 'WhatsApp' },
  address: { id: 'Alamat', en: 'Address', jv: 'Alamat' },
  openMaps: { id: 'Buka di Google Maps', en: 'Open in Google Maps', jv: 'Bikak wonten Google Maps' },
  viewOnMaps: { id: 'Lihat Lokasi di Google Maps', en: 'View Location on Google Maps', jv: 'Pirsani Lokasi wonten Google Maps' },
  mapTitle: {
    id: 'Peta lokasi RSUD dr. Loekmono Hadi Kudus',
    en: 'Location map of RSUD dr. Loekmono Hadi Kudus',
    jv: 'Peta lokasi RSUD dr. Loekmono Hadi Kudus',
  },
  breadcrumb: { id: 'Breadcrumb', en: 'Breadcrumb', jv: 'Breadcrumb' },
  backToTop: { id: 'Kembali ke atas', en: 'Back to Top', jv: 'Wangsul ing nginggil' },

  // generic
  readMore: { id: 'Baca Selengkapnya', en: 'Read More', jv: 'Waos Jangkepipun' },
  notFoundTitle: { id: 'Halaman tidak ditemukan', en: 'Page not found', jv: 'Kaca mboten kepanggih' },
  notFoundBody: {
    id: 'Alamat yang Anda buka tidak tersedia di website SERU ICU.',
    en: 'The address you opened does not exist on the SERU ICU website.',
    jv: 'Alamat ingkang panjenengan bikak mboten wonten ing website SERU ICU.',
  },
  backHome: { id: 'Kembali ke Beranda', en: 'Back to Home', jv: 'Wangsul dhateng Kaca Ngajeng' },
  loading: { id: 'Memuat halaman ...', en: 'Loading page ...', jv: 'Ngemot kaca ...' },
  medicalDisclaimerTitle: { id: 'Catatan edukasi:', en: 'Education note:', jv: 'Cathetan edukasi:' },
  medicalDisclaimer: {
    id: 'Informasi ini ditujukan untuk edukasi umum dan tidak menggantikan konsultasi, pemeriksaan, diagnosis, maupun keputusan medis dari tenaga kesehatan yang merawat.',
    en: 'This information is for general education and does not replace consultation, examination, diagnosis, or medical decisions by the treating healthcare team.',
    jv: 'Informasi menika kangge edukasi umum lan mboten nggantosi konsultasi, pamriksan, diagnosis, utawi keputusan medis saking tenaga kesehatan ingkang ngrawat.',
  },
} satisfies Record<string, Localized>

export type UiKey = keyof typeof ui
