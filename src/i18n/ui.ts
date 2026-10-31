import type { Localized } from '../data/types'

/* Shared chrome strings only. Page-specific copy lives next to its feature as Localized objects. */
export const ui = {
  // utility bar
  patientsVisitors: { id: 'Pasien & Pengunjung', en: 'Patients & Visitors' },
  welcome: { id: 'Selamat Datang', en: 'Welcome' },
  language: { id: 'Bahasa', en: 'Language' },
  switchToId: { id: 'Ganti ke Bahasa Indonesia', en: 'Switch to Indonesian' },
  switchToEn: { id: 'Ganti ke Bahasa Inggris', en: 'Switch to English' },
  opensNewTab: { id: '(membuka tab baru)', en: '(opens in a new tab)' },

  // navigation
  navHome: { id: 'Beranda', en: 'Home' },
  navMember: { id: 'Member', en: 'Members' },
  navFacilities: { id: 'Fasilitas Ruangan', en: 'Room Facilities' },
  navEducation: { id: 'Edukasi dan Informasi', en: 'Education & Information' },
  navDocuments: { id: 'Berkas ICU', en: 'ICU Documents' },
  mainNav: { id: 'Navigasi utama', en: 'Main navigation' },
  menu: { id: 'Menu', en: 'Menu' },
  closeMenu: { id: 'Tutup menu', en: 'Close menu' },
  homeLink: { id: 'RSUD dr. Loekmono Hadi Kudus, ke beranda', en: 'RSUD dr. Loekmono Hadi Kudus, go to home' },
  skipToContent: { id: 'Lewati ke konten utama', en: 'Skip to main content' },

  // search (agent 4b extends)
  searchPlaceholder: { id: 'Cari ...', en: 'Search ...' },
  searchLabel: { id: 'Cari konten website', en: 'Search the website' },

  // footer
  footerHoursTitle: { id: 'Pelayanan Poliklinik Rawat Jalan', en: 'Outpatient Clinic Services' },
  footerContactTitle: { id: 'Contact Info', en: 'Contact Info' },
  footerSocial: { id: 'Media sosial', en: 'Social media' },
  closed: { id: 'Tutup', en: 'Closed' },
  emergency: { id: 'Pelayanan IGD', en: 'Emergency Department' },
  emergencyHours: { id: '24 Jam', en: '24 Hours' },
  phone: { id: 'Telepon', en: 'Telephone' },
  whatsapp: { id: 'WhatsApp', en: 'WhatsApp' },
  address: { id: 'Alamat', en: 'Address' },
  openMaps: { id: 'Buka di Google Maps', en: 'Open in Google Maps' },
  backToTop: { id: 'Kembali ke atas', en: 'Back to Top' },

  // generic
  readMore: { id: 'Baca Selengkapnya', en: 'Read More' },
  notFoundTitle: { id: 'Halaman tidak ditemukan', en: 'Page not found' },
  notFoundBody: { id: 'Alamat yang Anda buka tidak tersedia di website SERU ICU.', en: 'The address you opened does not exist on the SERU ICU website.' },
  backHome: { id: 'Kembali ke Beranda', en: 'Back to Home' },
  loading: { id: 'Memuat halaman ...', en: 'Loading page ...' },
  medicalDisclaimerTitle: { id: 'Catatan edukasi:', en: 'Education note:' },
  medicalDisclaimer: {
    id: 'Informasi ini ditujukan untuk edukasi umum dan tidak menggantikan konsultasi, pemeriksaan, diagnosis, maupun keputusan medis dari tenaga kesehatan yang merawat.',
    en: 'This information is for general education and does not replace consultation, examination, diagnosis, or medical decisions by the treating healthcare team.',
  },

} satisfies Record<string, Localized>

export type UiKey = keyof typeof ui
