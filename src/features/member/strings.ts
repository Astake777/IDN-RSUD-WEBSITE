import type { Localized } from '../../data/types'

export const s = {
  crewTitle: { id: 'CREW ICU RSUD dr. LOEKMONO HADI KUDUS', en: 'ICU CREW, RSUD dr. LOEKMONO HADI KUDUS' },
  crewAlt: {
    id: 'Foto bersama tim perawat Ruang ICU RSUD dr. Loekmono Hadi Kudus berseragam hijau, berpose dalam tiga baris dengan latar biru gelap',
    en: 'Group photo of the ICU nursing team of RSUD dr. Loekmono Hadi Kudus in green uniforms, posing in three rows against a dark blue backdrop',
  },
  orgTitle: { id: 'Struktur Organisasi Ruang ICU', en: 'ICU Organisational Structure' },
  orgLead: { id: 'RSUD dr. Loekmono Hadi Kudus', en: 'RSUD dr. Loekmono Hadi Kudus' },
  staffList: { id: 'Perawat pelaksana', en: 'Staff nurses' },
  certifications: { id: 'Kompetensi', en: 'Competencies' },
  functionLeads: { id: 'Penanggung Jawab Fungsi', en: 'Function Leads' },
  roomTitle: { id: 'Data Ruangan', en: 'Unit Data' },
  roomLead: { id: 'Jumlah tenaga yang bertugas di Ruang ICU.', en: 'Number of staff working in the ICU.' },
  roomCard: { id: 'DATA RUANGAN', en: 'UNIT DATA' },
  roomCardSub: { id: 'Ruang ICU RSUD dr. Loekmono Hadi Kudus', en: 'ICU, RSUD dr. Loekmono Hadi Kudus' },
  noCount: { id: 'Data jumlah belum tersedia', en: 'Headcount not yet available' },
} satisfies Record<string, Localized>

export const people = (n: number): Localized => ({
  id: `${n} orang`,
  en: `${n} ${n === 1 ? 'person' : 'people'}`,
})
