import type { Localized } from '../../data/types'

export const s = {
  heroKicker: { id: 'RSUD dr. Loekmono Hadi Kudus', en: 'RSUD dr. Loekmono Hadi Kudus', jv: 'RSUD dr. Loekmono Hadi Kudus' },
  heroTitle: { id: 'Instalasi Rawat Intensif (ICU)', en: 'Intensive Care Unit (ICU)', jv: 'Instalasi Rawat Intensif (ICU)' },
  heroLead: {
    id: 'Perawatan intensif 24 jam bagi pasien dengan kondisi kritis, melalui kolaborasi multidisiplin yang berorientasi pada keselamatan pasien.',
    en: 'Round-the-clock intensive care for critically ill patients, delivered by a multidisciplinary team focused on patient safety.',
    jv: 'Perawatan intensif 24 jam kangge pasien ingkang kawontenanipun kritis, lumantar kolaborasi multidisiplin ingkang ngutamakaken keselamatan pasien.',
  },
  heroNav: { id: 'Mau ke mana?', en: 'Where would you like to go?', jv: 'Badhe tindak pundi?' },
  heroAlt: {
    id: 'Papan nama ICU-HCU RSUD dr Loekmonohadi Kudus',
    en: 'ICU-HCU sign at RSUD dr Loekmonohadi Kudus',
    jv: 'Papan nama ICU-HCU RSUD dr Loekmonohadi Kudus',
  },
  start: { id: 'Mulai membaca', en: 'Start reading', jv: 'Wiwit maos' },
  sectionsNav: { id: 'Bagian halaman', en: 'Page sections', jv: 'Perangan kaca' },
  missionN: { id: 'Misi', en: 'Mission', jv: 'Misi' },
  missionDots: { id: 'Pilih misi', en: 'Choose a mission', jv: 'Pilih misi' },
  nextTitle: { id: 'Edukasi berikutnya', en: 'Next education topics', jv: 'Edukasi salajengipun' },
  nextLead: {
    id: 'Setelah mengenal ICU, lanjutkan dengan materi edukasi untuk pasien dan keluarga.',
    en: 'Now that you know the ICU, continue with education material for patients and families.',
    jv: 'Sasampunipun mangertosi ICU, lajengaken kaliyan materi edukasi kangge pasien lan kulawarga.',
  },
  backToTop: { id: 'Kembali ke atas', en: 'Back to top', jv: 'Wangsul ing nginggil' },
} satisfies Record<string, Localized>

export const nextTopics: { to: string; label: Localized }[] = [
  { to: '/edukasi/ventilator', label: { id: 'Ventilator', en: 'Ventilator', jv: 'Ventilator' } },
  { to: '/edukasi/cvp', label: { id: 'CVP', en: 'CVP', jv: 'CVP' } },
  { to: '/edukasi/hemodialisa', label: { id: 'Hemodialisa', en: 'Hemodialysis', jv: 'Hemodialisa' } },
  { to: '/edukasi/defibrilator', label: { id: 'Defibrilator', en: 'Defibrillator', jv: 'Defibrilator' } },
  { to: '/edukasi/crrt', label: { id: 'CRRT', en: 'CRRT', jv: 'CRRT' } },
  {
    to: '/edukasi/masuk-icu',
    label: { id: 'Panduan keluarga pasien saat masuk ICU', en: 'Family guide when a patient is admitted to the ICU', jv: 'Pandhuan kulawarga pasien nalika mlebet ICU' },
  },
]
