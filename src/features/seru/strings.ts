import type { Localized } from '../../data/types'

export const s = {
  heroAlt: {
    id: 'Papan nama ICU-HCU RSUD dr Loekmonohadi Kudus',
    en: 'ICU-HCU sign at RSUD dr Loekmonohadi Kudus',
    jv: 'Papan nama ICU-HCU RSUD dr Loekmonohadi Kudus',
  },
  heroCaption: { id: 'RSUD dr. Loekmono Hadi Kudus', en: 'RSUD dr. Loekmono Hadi Kudus', jv: 'RSUD dr. Loekmono Hadi Kudus' },
  start: { id: 'Mulai membaca', en: 'Start reading', jv: 'Wiwit maos' },
  toolbarName: { id: 'Kenyamanan membaca', en: 'Reading comfort', jv: 'Kepenak anggenipun maos' },
  smaller: { id: 'Perkecil teks', en: 'Decrease text size', jv: 'Alitaken teks' },
  larger: { id: 'Perbesar teks', en: 'Increase text size', jv: 'Agengaken teks' },
  dark: { id: 'Mode gelap', en: 'Dark mode', jv: 'Mode peteng' },
  light: { id: 'Mode terang', en: 'Light mode', jv: 'Mode padhang' },
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
