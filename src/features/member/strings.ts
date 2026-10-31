import type { Localized } from '../../data/types'

export const s = {
  crewTitle: { id: 'CREW ICU RSUD dr. LOEKMONO HADI KUDUS', en: 'ICU CREW, RSUD dr. LOEKMONO HADI KUDUS', jv: 'CREW ICU RSUD dr. LOEKMONO HADI KUDUS' },
  crewAlt: {
    id: 'Foto bersama tim perawat Ruang ICU RSUD dr. Loekmono Hadi Kudus berseragam hijau, berpose dalam tiga baris dengan latar biru gelap',
    en: 'Group photo of the ICU nursing team of RSUD dr. Loekmono Hadi Kudus in green uniforms, posing in three rows against a dark blue backdrop',
    jv: 'Foto sesarengan tim perawat Ruang ICU RSUD dr. Loekmono Hadi Kudus ngagem seragam ijem, pose wonten tigang baris kanthi latar biru peteng',
  },
  orgTitle: { id: 'Struktur Organisasi Ruang ICU', en: 'ICU Organisational Structure', jv: 'Struktur Organisasi Ruang ICU' },
  orgLead: { id: 'RSUD dr. Loekmono Hadi Kudus', en: 'RSUD dr. Loekmono Hadi Kudus', jv: 'RSUD dr. Loekmono Hadi Kudus' },
  staffList: { id: 'Perawat pelaksana', en: 'Staff nurses', jv: 'Perawat pelaksana' },
  certifications: { id: 'Kompetensi', en: 'Competencies', jv: 'Kompetensi' },
  functionLeads: { id: 'Penanggung Jawab Fungsi', en: 'Function Leads', jv: 'Penanggung Jawab Fungsi' },
  roomTitle: { id: 'Data Ruangan', en: 'Unit Data', jv: 'Data Ruangan' },
  roomLead: { id: 'Jumlah tenaga yang bertugas di Ruang ICU.', en: 'Number of staff working in the ICU.', jv: 'Cacahing tenaga ingkang bertugas wonten Ruang ICU.' },
  roomCard: { id: 'DATA RUANGAN', en: 'UNIT DATA', jv: 'DATA RUANGAN' },
  roomCardSub: { id: 'Ruang ICU RSUD dr. Loekmono Hadi Kudus', en: 'ICU, RSUD dr. Loekmono Hadi Kudus', jv: 'Ruang ICU RSUD dr. Loekmono Hadi Kudus' },
  noCount: { id: 'Data jumlah belum tersedia', en: 'Headcount not yet available', jv: 'Data cacahipun dereng wonten' },
} satisfies Record<string, Localized>

export const people = (n: number): Localized => ({
  id: `${n} orang`,
  en: `${n} ${n === 1 ? 'person' : 'people'}`,
  jv: `${n} tiyang`,
})
