import type { Localized } from './types'

// Transcribed from the "Struktur Organisasi Ruang ICU" chart (Member Page 2.pdf).

export interface OrgPerson {
  name: string
  role: Localized
  duties: Localized[]
  badges: Localized[]
}

export interface Shift {
  id: 'pagi' | 'siang' | 'malam'
  name: Localized
  hours: string
  lead: OrgPerson
  staff: OrgPerson[]
}

const code = (c: string): Localized => ({ id: c, en: c })

const badge = {
  acls: code('ACLS'),
  btcls: code('BTCLS'),
  pkid: code('PKID'),
  tpk: code('TPK'),
  tot: code('TOT'),
  crrt: code('CRRT'),
  manajemen: { id: 'Manajemen ICU', en: 'ICU management' },
  pelatihan: { id: 'Pelatihan ICU', en: 'ICU training' },
  resertifikasi: { id: 'Resertifikasi ICU', en: 'ICU recertification' },
  ventilasi: { id: 'Ventilasi mekanik', en: 'Mechanical ventilation' },
  dasar: { id: 'ICU dasar', en: 'Basic ICU' },
  refresh: { id: 'Refresh ICU', en: 'ICU refresher' },
} satisfies Record<string, Localized>

const pelaksana: Localized = { id: 'Perawat Pelaksana', en: 'Staff Nurse' }

// The chart repeats the same duty pairs across shifts.
const duty = {
  hemodinamik: [
    { id: 'Memantau hemodinamik, EKG, dan tanda vital berkala', en: 'Monitors haemodynamics, ECG and vital signs regularly' },
    { id: 'Memberikan obat high-alert sesuai instruksi DPJP', en: 'Gives high-alert medication as instructed by the DPJP' },
  ],
  ventilator: [
    { id: 'Merawat pasien dengan ventilator dan memantau parameternya', en: 'Cares for ventilated patients and monitors ventilator settings' },
    { id: 'Suction, weaning, dan perawatan jalan napas', en: 'Suction, weaning and airway care' },
  ],
  luka: [
    { id: 'Merawat luka, kateter, infus, dan mencegah dekubitus', en: 'Cares for wounds, catheters and IV lines, and prevents pressure sores' },
    { id: 'Menyiapkan nutrisi enteral dan mencatat balans cairan', en: 'Prepares enteral nutrition and records fluid balance' },
  ],
  dasar: [
    { id: 'Perawatan dasar dan mobilisasi pasien', en: 'Basic care and patient mobilisation' },
    { id: 'Mengisi dokumentasi asuhan dan serah terima pasien', en: 'Completes care records and patient handovers' },
  ],
  transfer: [
    { id: 'Menyiapkan pasien masuk, keluar, dan transfer ruangan', en: 'Prepares patient admissions, discharges and ward transfers' },
    { id: 'Memberi informasi dan edukasi kepada keluarga pasien', en: "Informs and educates patients' families" },
  ],
  resusitasi: [
    { id: 'Siaga resusitasi dan penanganan henti jantung', en: 'On standby for resuscitation and cardiac arrest response' },
    { id: 'Menyiapkan alat serta obat emergensi saat pasien memburuk', en: 'Prepares emergency equipment and drugs when a patient deteriorates' },
  ],
  lead: [
    { id: 'Memimpin operan dan membagi tugas perawat per pasien', en: 'Leads shift handover and assigns nurses to patients' },
    { id: 'Supervisi asuhan dan verifikasi dokumentasi dinas', en: 'Supervises care and verifies shift documentation' },
    { id: 'Eskalasi kondisi kritis ke DPJP dan Kepala Ruangan', en: 'Escalates critical conditions to the DPJP and the Head of Unit' },
  ],
} satisfies Record<string, Localized[]>

const nurse = (name: string, duties: Localized[], badges: Localized[]): OrgPerson => ({
  name,
  role: pelaksana,
  duties,
  badges,
})

export const orgSummary = {
  nurses: { id: '26 perawat', en: '26 nurses' },
  breakdown: [
    { id: '1 kepala ruangan', en: '1 head of unit' },
    { id: '3 tim dinas', en: '3 shift teams' },
    { id: '5 penanggung jawab fungsi', en: '5 function leads' },
  ],
} satisfies { nurses: Localized; breakdown: Localized[] }

export const headNurse: OrgPerson = {
  name: 'Khamid Khanafi, S.Kep., Ners., M.Kep',
  role: { id: 'Kepala Ruangan ICU', en: 'Head of ICU' },
  duties: [
    { id: 'Merencanakan, mengatur, dan mengevaluasi pelayanan keperawatan intensif di ICU', en: 'Plans, organises and evaluates intensive nursing care in the ICU' },
    { id: 'Menyusun jadwal dinas, kebutuhan tenaga, dan pengembangan kompetensi perawat', en: 'Draws up shift rosters, staffing needs and nurse competency development' },
    { id: 'Berkoordinasi dengan DPJP, bidang keperawatan, dan unit penunjang', en: 'Coordinates with the DPJP, the nursing division and support units' },
  ],
  badges: [badge.acls, badge.btcls, badge.manajemen],
}

const shiftLead = (name: string, shift: Localized, badges: Localized[]): OrgPerson => ({
  name,
  role: { id: `Penanggung Jawab ${shift.id}`, en: `${shift.en} Lead` },
  duties: duty.lead,
  badges,
})

const pagi = { id: 'Dinas Pagi', en: 'Morning Shift' }
const siang = { id: 'Dinas Siang', en: 'Afternoon Shift' }
const malam = { id: 'Dinas Malam', en: 'Night Shift' }

export const shifts: Shift[] = [
  {
    id: 'pagi',
    name: pagi,
    hours: '07.00 – 14.00',
    lead: shiftLead('Roosy Woro Wuryaningtyas, S.Kep., Ners', pagi, [badge.pelatihan, badge.btcls]),
    staff: [
      nurse('Yunita Kurniawan, S.Kep., Ners', duty.hemodinamik, [badge.resertifikasi]),
      nurse('Riyanto, S.Kep., Ners', duty.ventilator, [badge.ventilasi]),
      nurse('Ahmad Muthohar, S.Kep., Ners', duty.luka, [badge.dasar]),
      nurse('Winda Lestari, A.Md.Kep', duty.dasar, [badge.refresh]),
      nurse('Eti Khoirinnisa, S.Kep., Ners', duty.transfer, [badge.pkid]),
      nurse('Ketty Aditya, A.Md.Kep', duty.resusitasi, [badge.pkid, badge.btcls]),
    ],
  },
  {
    id: 'siang',
    name: siang,
    hours: '14.00 – 21.00',
    lead: shiftLead('Kristiono, S.Kep., Ners', siang, [badge.pelatihan, badge.btcls]),
    staff: [
      nurse('Dwi Meiyanto, AMK', duty.ventilator, [badge.pkid, badge.ventilasi, badge.btcls]),
      nurse('Muhammad Khoirul Anwar, S.Kep., Ners', duty.hemodinamik, [badge.refresh]),
      nurse('Hendro Prasetyo, AMK', duty.resusitasi, [badge.btcls, badge.resertifikasi]),
      nurse('Maulidina Aulia Dewi, S.Kep., Ners', duty.resusitasi, [badge.pkid, badge.btcls]),
      nurse('Risti Ardhila, S.Kep., Ners', duty.luka, [badge.pkid, badge.btcls]),
      nurse('Muhammad Agung Gumelar, S.Kep., Ners', duty.transfer, [badge.pkid]),
    ],
  },
  {
    id: 'malam',
    name: malam,
    hours: '21.00 – 07.00',
    lead: shiftLead('Noorhadi Suprayitno, S.Kep., Ners', malam, [badge.resertifikasi]),
    staff: [
      nurse('Luqmanul Hakim, S.Kep., Ners', duty.dasar, [badge.dasar]),
      nurse("Noer'afhizan, S.Kep., Ners", duty.hemodinamik, [badge.pkid]),
      nurse('Fatih Haris Maulana, S.Kep., Ners', duty.resusitasi, [badge.acls, badge.pkid]),
      nurse('Anggie Aristiani, S.Kep., Ners', duty.luka, [badge.pkid, badge.btcls]),
      nurse('Tommy Pratama Ardhinata, S.Kep., Ners', duty.ventilator, [badge.ventilasi]),
    ],
  },
]

export const functionLeadsNote: Localized = {
  id: 'Melapor langsung ke Kepala Ruangan, tetap bertugas dalam jadwal dinas',
  en: 'Report directly to the Head of Unit while still working regular shifts',
}

export const functionLeads: OrgPerson[] = [
  {
    name: 'Abdul Mujib, S.Kep., Ners',
    role: { id: 'Koordinator Pendidikan & Pelatihan', en: 'Education & Training Coordinator' },
    duties: [
      { id: 'Menyusun jadwal pelatihan BTCLS, ACLS, dan PKID', en: 'Schedules BTCLS, ACLS and PKID training' },
      { id: 'Membimbing perawat baru dan mahasiswa praktik', en: 'Mentors new nurses and nursing students on placement' },
      { id: 'Memantau masa berlaku STR dan SIPP seluruh perawat', en: 'Tracks STR and SIPP licence validity for all nurses' },
    ],
    badges: [badge.acls, badge.btcls, badge.tpk, badge.tot],
  },
  {
    name: 'Zuningsih, S.Kep., Ners',
    role: { id: 'Koordinator Mutu & Keselamatan Pasien', en: 'Quality & Patient Safety Coordinator' },
    duties: [
      { id: 'Memantau indikator mutu dan insiden keselamatan pasien', en: 'Monitors quality indicators and patient safety incidents' },
      { id: 'Audit kelengkapan dokumentasi asuhan keperawatan', en: 'Audits the completeness of nursing care records' },
      { id: 'Menyusun laporan mutu bulanan untuk Kepala Ruangan', en: 'Prepares the monthly quality report for the Head of Unit' },
    ],
    badges: [badge.resertifikasi],
  },
  {
    name: 'Agus Priyanto, S.Kep., Ners',
    role: { id: 'Koordinator Pencegahan & Pengendalian Infeksi', en: 'Infection Prevention & Control Coordinator' },
    duties: [
      { id: 'Memantau kepatuhan cuci tangan dan penggunaan APD', en: 'Monitors hand hygiene compliance and PPE use' },
      { id: 'Surveilans infeksi terkait ventilator, infus, dan kateter', en: 'Surveillance of ventilator, IV line and catheter related infections' },
      { id: 'Mengedukasi perawat dan keluarga pasien', en: "Educates nurses and patients' families" },
    ],
    badges: [badge.resertifikasi],
  },
  {
    name: 'Pujiono, S.Kep., Ners',
    role: { id: 'Koordinator Alat Medis & Ventilator', en: 'Medical Equipment & Ventilator Coordinator' },
    duties: [
      { id: 'Cek harian ventilator, monitor, dan syringe pump', en: 'Daily checks of ventilators, monitors and syringe pumps' },
      { id: 'Melaporkan kerusakan dan jadwal kalibrasi alat', en: 'Reports equipment faults and calibration schedules' },
      { id: 'Mengelola troli emergensi dan stok bahan habis pakai', en: 'Manages the emergency trolley and consumables stock' },
    ],
    badges: [badge.pkid, badge.ventilasi, badge.btcls],
  },
  {
    name: 'Adi Prasetyo, S.Kep., Ners',
    role: { id: 'Perawat Terapi CRRT', en: 'CRRT Therapy Nurse' },
    duties: [
      { id: 'Menyiapkan dan mengoperasikan mesin CRRT', en: 'Prepares and operates the CRRT machine' },
      { id: 'Memantau balans cairan dan alarm selama terapi', en: 'Monitors fluid balance and alarms during therapy' },
      { id: 'Merawat pasien dengan gangguan ginjal akut', en: 'Cares for patients with acute kidney injury' },
    ],
    badges: [badge.crrt, badge.pkid, badge.btcls],
  },
]

export const orgSource: Localized = {
  id: 'Sumber: data SIP/SIK/SIPP pegawai Ruang ICU RSUD dr. Loekmono Hadi Kudus',
  en: 'Source: SIP/SIK/SIPP staff records, ICU, RSUD dr. Loekmono Hadi Kudus',
}

export interface RoomCategory {
  id: 'spesialis' | 'umum' | 'perawat' | 'administrasi'
  label: Localized
  /** Undefined when the source gives no headcount. */
  count?: number
}

export const roomData: RoomCategory[] = [
  { id: 'spesialis', label: { id: 'Dokter Spesialis', en: 'Specialist Doctors' }, count: 1 },
  { id: 'umum', label: { id: 'Dokter Umum', en: 'General Practitioners' }, count: 5 },
  { id: 'perawat', label: { id: 'Perawat', en: 'Nurses' }, count: 26 },
  { id: 'administrasi', label: { id: 'Administrasi', en: 'Administration' } },
]
