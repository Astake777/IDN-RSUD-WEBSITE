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

const code = (c: string): Localized => ({ id: c, en: c, jv: c })

const badge = {
  acls: code('ACLS'),
  btcls: code('BTCLS'),
  pkid: code('PKID'),
  tpk: code('TPK'),
  tot: code('TOT'),
  crrt: code('CRRT'),
  manajemen: { id: 'Manajemen ICU', en: 'ICU management', jv: 'Manajemen ICU' },
  pelatihan: { id: 'Pelatihan ICU', en: 'ICU training', jv: 'Pelatihan ICU' },
  resertifikasi: { id: 'Resertifikasi ICU', en: 'ICU recertification', jv: 'Resertifikasi ICU' },
  ventilasi: { id: 'Ventilasi mekanik', en: 'Mechanical ventilation', jv: 'Ventilasi mekanik' },
  dasar: { id: 'ICU dasar', en: 'Basic ICU', jv: 'ICU dhasar' },
  refresh: { id: 'Refresh ICU', en: 'ICU refresher', jv: 'Refresh ICU' },
} satisfies Record<string, Localized>

const pelaksana: Localized = { id: 'Perawat Pelaksana', en: 'Staff Nurse', jv: 'Perawat Pelaksana' }

// The chart repeats the same duty pairs across shifts.
const duty = {
  hemodinamik: [
    { id: 'Memantau hemodinamik, EKG, dan tanda vital berkala', en: 'Monitors haemodynamics, ECG and vital signs regularly', jv: 'Ngawasi hemodinamik, EKG, lan tandha vital kanthi rutin' },
    { id: 'Memberikan obat high-alert sesuai instruksi DPJP', en: 'Gives high-alert medication as instructed by the DPJP', jv: 'Maringaken obat high-alert miturut instruksi DPJP' },
  ],
  ventilator: [
    { id: 'Merawat pasien dengan ventilator dan memantau parameternya', en: 'Cares for ventilated patients and monitors ventilator settings', jv: 'Ngrawat pasien ingkang ngagem ventilator lan ngawasi parameteripun' },
    { id: 'Suction, weaning, dan perawatan jalan napas', en: 'Suction, weaning and airway care', jv: 'Suction, weaning, lan perawatan margi napas' },
  ],
  luka: [
    { id: 'Merawat luka, kateter, infus, dan mencegah dekubitus', en: 'Cares for wounds, catheters and IV lines, and prevents pressure sores', jv: 'Ngrawat tatu, kateter, infus, lan nyegah dekubitus' },
    { id: 'Menyiapkan nutrisi enteral dan mencatat balans cairan', en: 'Prepares enteral nutrition and records fluid balance', jv: 'Nyawisaken nutrisi enteral lan nyathet balans cairan' },
  ],
  dasar: [
    { id: 'Perawatan dasar dan mobilisasi pasien', en: 'Basic care and patient mobilisation', jv: 'Perawatan dhasar lan mobilisasi pasien' },
    { id: 'Mengisi dokumentasi asuhan dan serah terima pasien', en: 'Completes care records and patient handovers', jv: 'Ngisi dokumentasi asuhan lan serah terima pasien' },
  ],
  transfer: [
    { id: 'Menyiapkan pasien masuk, keluar, dan transfer ruangan', en: 'Prepares patient admissions, discharges and ward transfers', jv: 'Nyawisaken pasien mlebet, medal, lan transfer ruangan' },
    { id: 'Memberi informasi dan edukasi kepada keluarga pasien', en: "Informs and educates patients' families", jv: 'Maringi informasi lan edukasi dhateng kulawarga pasien' },
  ],
  resusitasi: [
    { id: 'Siaga resusitasi dan penanganan henti jantung', en: 'On standby for resuscitation and cardiac arrest response', jv: 'Siaga resusitasi lan penanganan henti jantung' },
    { id: 'Menyiapkan alat serta obat emergensi saat pasien memburuk', en: 'Prepares emergency equipment and drugs when a patient deteriorates', jv: 'Nyawisaken piranti saha obat emergensi nalika kahanan pasien saya awon' },
  ],
  lead: [
    { id: 'Memimpin operan dan membagi tugas perawat per pasien', en: 'Leads shift handover and assigns nurses to patients', jv: 'Mimpin operan lan mbagi tugas perawat saben pasien' },
    { id: 'Supervisi asuhan dan verifikasi dokumentasi dinas', en: 'Supervises care and verifies shift documentation', jv: 'Supervisi asuhan lan verifikasi dokumentasi dinas' },
    { id: 'Eskalasi kondisi kritis ke DPJP dan Kepala Ruangan', en: 'Escalates critical conditions to the DPJP and the Head of Unit', jv: 'Eskalasi kahanan kritis dhateng DPJP lan Kepala Ruangan' },
  ],
} satisfies Record<string, Localized[]>

const nurse = (name: string, duties: Localized[], badges: Localized[]): OrgPerson => ({
  name,
  role: pelaksana,
  duties,
  badges,
})

export const orgSummary = {
  nurses: { id: '26 perawat', en: '26 nurses', jv: '26 perawat' },
  breakdown: [
    { id: '1 kepala ruangan', en: '1 head of unit', jv: '1 kepala ruangan' },
    { id: '3 tim dinas', en: '3 shift teams', jv: '3 tim dinas' },
    { id: '5 penanggung jawab fungsi', en: '5 function leads', jv: '5 penanggung jawab fungsi' },
  ],
} satisfies { nurses: Localized; breakdown: Localized[] }

export const headNurse: OrgPerson = {
  name: 'Khamid Khanafi, S.Kep., Ners., M.Kep',
  role: { id: 'Kepala Ruangan ICU', en: 'Head of ICU', jv: 'Kepala Ruangan ICU' },
  duties: [
    { id: 'Merencanakan, mengatur, dan mengevaluasi pelayanan keperawatan intensif di ICU', en: 'Plans, organises and evaluates intensive nursing care in the ICU', jv: 'Ngrancang, ngatur, lan ngevaluasi pelayanan keperawatan intensif wonten ICU' },
    { id: 'Menyusun jadwal dinas, kebutuhan tenaga, dan pengembangan kompetensi perawat', en: 'Draws up shift rosters, staffing needs and nurse competency development', jv: 'Nyusun jadwal dinas, kabetahan tenaga, lan pangembangan kompetensi perawat' },
    { id: 'Berkoordinasi dengan DPJP, bidang keperawatan, dan unit penunjang', en: 'Coordinates with the DPJP, the nursing division and support units', jv: 'Koordinasi kaliyan DPJP, bidang keperawatan, lan unit penunjang' },
  ],
  badges: [badge.acls, badge.btcls, badge.manajemen],
}

const shiftLead = (name: string, shift: Localized, badges: Localized[]): OrgPerson => ({
  name,
  role: { id: `Penanggung Jawab ${shift.id}`, en: `${shift.en} Lead`, jv: `Penanggung Jawab ${shift.jv ?? shift.id}` },
  duties: duty.lead,
  badges,
})

const pagi: Localized = { id: 'Dinas Pagi', en: 'Morning Shift', jv: 'Dinas Enjing' }
const siang: Localized = { id: 'Dinas Siang', en: 'Afternoon Shift', jv: 'Dinas Siang' }
const malam: Localized = { id: 'Dinas Malam', en: 'Night Shift', jv: 'Dinas Dalu' }

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
  jv: 'Lapor langsung dhateng Kepala Ruangan, tetep makarya miturut jadwal dinas',
}

export const functionLeads: OrgPerson[] = [
  {
    name: 'Abdul Mujib, S.Kep., Ners',
    role: { id: 'Koordinator Pendidikan & Pelatihan', en: 'Education & Training Coordinator', jv: 'Koordinator Pendidikan & Pelatihan' },
    duties: [
      { id: 'Menyusun jadwal pelatihan BTCLS, ACLS, dan PKID', en: 'Schedules BTCLS, ACLS and PKID training', jv: 'Nyusun jadwal pelatihan BTCLS, ACLS, lan PKID' },
      { id: 'Membimbing perawat baru dan mahasiswa praktik', en: 'Mentors new nurses and nursing students on placement', jv: 'Nuntun perawat enggal lan mahasiswa praktik' },
      { id: 'Memantau masa berlaku STR dan SIPP seluruh perawat', en: 'Tracks STR and SIPP licence validity for all nurses', jv: 'Ngawasi masa berlaku STR lan SIPP sedaya perawat' },
    ],
    badges: [badge.acls, badge.btcls, badge.tpk, badge.tot],
  },
  {
    name: 'Zuningsih, S.Kep., Ners',
    role: { id: 'Koordinator Mutu & Keselamatan Pasien', en: 'Quality & Patient Safety Coordinator', jv: 'Koordinator Mutu & Keselamatan Pasien' },
    duties: [
      { id: 'Memantau indikator mutu dan insiden keselamatan pasien', en: 'Monitors quality indicators and patient safety incidents', jv: 'Ngawasi indikator mutu lan insiden keselamatan pasien' },
      { id: 'Audit kelengkapan dokumentasi asuhan keperawatan', en: 'Audits the completeness of nursing care records', jv: 'Audit kelengkapan dokumentasi asuhan keperawatan' },
      { id: 'Menyusun laporan mutu bulanan untuk Kepala Ruangan', en: 'Prepares the monthly quality report for the Head of Unit', jv: 'Nyusun laporan mutu saben wulan kangge Kepala Ruangan' },
    ],
    badges: [badge.resertifikasi],
  },
  {
    name: 'Agus Priyanto, S.Kep., Ners',
    role: { id: 'Koordinator Pencegahan & Pengendalian Infeksi', en: 'Infection Prevention & Control Coordinator', jv: 'Koordinator Pencegahan & Pengendalian Infeksi' },
    duties: [
      { id: 'Memantau kepatuhan cuci tangan dan penggunaan APD', en: 'Monitors hand hygiene compliance and PPE use', jv: 'Ngawasi kepatuhan wisuh tangan lan panganggening APD' },
      { id: 'Surveilans infeksi terkait ventilator, infus, dan kateter', en: 'Surveillance of ventilator, IV line and catheter related infections', jv: 'Surveilans infeksi ingkang gegayutan kaliyan ventilator, infus, lan kateter' },
      { id: 'Mengedukasi perawat dan keluarga pasien', en: "Educates nurses and patients' families", jv: 'Ngedukasi perawat lan kulawarga pasien' },
    ],
    badges: [badge.resertifikasi],
  },
  {
    name: 'Pujiono, S.Kep., Ners',
    role: { id: 'Koordinator Alat Medis & Ventilator', en: 'Medical Equipment & Ventilator Coordinator', jv: 'Koordinator Alat Medis & Ventilator' },
    duties: [
      { id: 'Cek harian ventilator, monitor, dan syringe pump', en: 'Daily checks of ventilators, monitors and syringe pumps', jv: 'Mriksa ventilator, monitor, lan syringe pump saben dinten' },
      { id: 'Melaporkan kerusakan dan jadwal kalibrasi alat', en: 'Reports equipment faults and calibration schedules', jv: 'Nglaporaken karusakan lan jadwal kalibrasi piranti' },
      { id: 'Mengelola troli emergensi dan stok bahan habis pakai', en: 'Manages the emergency trolley and consumables stock', jv: 'Ngatur troli emergensi lan stok bahan habis pakai' },
    ],
    badges: [badge.pkid, badge.ventilasi, badge.btcls],
  },
  {
    name: 'Adi Prasetyo, S.Kep., Ners',
    role: { id: 'Perawat Terapi CRRT', en: 'CRRT Therapy Nurse', jv: 'Perawat Terapi CRRT' },
    duties: [
      { id: 'Menyiapkan dan mengoperasikan mesin CRRT', en: 'Prepares and operates the CRRT machine', jv: 'Nyawisaken lan ngoperasikaken mesin CRRT' },
      { id: 'Memantau balans cairan dan alarm selama terapi', en: 'Monitors fluid balance and alarms during therapy', jv: 'Ngawasi balans cairan lan alarm salebeting terapi' },
      { id: 'Merawat pasien dengan gangguan ginjal akut', en: 'Cares for patients with acute kidney injury', jv: 'Ngrawat pasien ingkang nandhang gangguan ginjel akut' },
    ],
    badges: [badge.crrt, badge.pkid, badge.btcls],
  },
]

export const orgSource: Localized = {
  id: 'Sumber: data SIP/SIK/SIPP pegawai Ruang ICU RSUD dr. Loekmono Hadi Kudus',
  en: 'Source: SIP/SIK/SIPP staff records, ICU, RSUD dr. Loekmono Hadi Kudus',
  jv: 'Sumber: data SIP/SIK/SIPP pegawai Ruang ICU RSUD dr. Loekmono Hadi Kudus',
}

export interface RoomCategory {
  id: 'spesialis' | 'umum' | 'perawat' | 'administrasi'
  label: Localized
  /** Role detail shown under the label. */
  role?: Localized
  /** Undefined when the source gives no headcount. */
  count?: number
}

export const roomData: RoomCategory[] = [
  {
    id: 'spesialis',
    label: { id: 'Dokter Spesialis', en: 'Specialist Doctors', jv: 'Dokter Spesialis' },
    role: { id: 'Dokter Konsultan Intensive Care', en: 'Intensive Care Consultant', jv: 'Dokter Konsultan Intensive Care' },
    count: 1,
  },
  { id: 'umum', label: { id: 'Dokter Umum', en: 'General Practitioners', jv: 'Dokter Umum' }, count: 5 },
  { id: 'perawat', label: { id: 'Perawat', en: 'Nurses', jv: 'Perawat' }, count: 26 },
  { id: 'administrasi', label: { id: 'Administrasi', en: 'Administration', jv: 'Administrasi' } },
]
