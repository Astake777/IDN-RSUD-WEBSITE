import type { Localized } from '../../data/types'

export const s = {
  heroAlt: {
    id: 'Papan nama ICU-HCU RSUD dr Loekmonohadi Kudus',
    en: 'ICU-HCU sign at RSUD dr Loekmonohadi Kudus',
  },
  heroCaption: { id: 'RSUD dr. Loekmono Hadi Kudus', en: 'RSUD dr. Loekmono Hadi Kudus' },
  start: { id: 'Mulai membaca', en: 'Start reading' },
  toolbarName: { id: 'Kenyamanan membaca', en: 'Reading comfort' },
  smaller: { id: 'Perkecil teks', en: 'Decrease text size' },
  larger: { id: 'Perbesar teks', en: 'Increase text size' },
  dark: { id: 'Mode gelap', en: 'Dark mode' },
  light: { id: 'Mode terang', en: 'Light mode' },
  sectionsNav: { id: 'Bagian halaman', en: 'Page sections' },
  missionN: { id: 'Misi', en: 'Mission' },
  missionDots: { id: 'Pilih misi', en: 'Choose a mission' },
  nextTitle: { id: 'Edukasi berikutnya', en: 'Next education topics' },
  nextLead: {
    id: 'Setelah mengenal ICU, lanjutkan dengan materi edukasi untuk pasien dan keluarga.',
    en: 'Now that you know the ICU, continue with education material for patients and families.',
  },
  backToTop: { id: 'Kembali ke atas', en: 'Back to top' },
} satisfies Record<string, Localized>

export const nextTopics: { to: string; label: Localized }[] = [
  { to: '/edukasi/ventilator', label: { id: 'Ventilator', en: 'Ventilator' } },
  { to: '/edukasi/cvp', label: { id: 'CVP', en: 'CVP' } },
  { to: '/edukasi/hemodialisa', label: { id: 'Hemodialisa', en: 'Hemodialysis' } },
  { to: '/edukasi/defibrilator', label: { id: 'Defibrilator', en: 'Defibrillator' } },
  { to: '/edukasi/crrt', label: { id: 'CRRT', en: 'CRRT' } },
  {
    to: '/edukasi/masuk-icu',
    label: { id: 'Panduan keluarga pasien saat masuk ICU', en: 'Family guide when a patient is admitted to the ICU' },
  },
]
