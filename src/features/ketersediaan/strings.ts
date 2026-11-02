import type { Localized } from '../../data/types'
import type { Status } from './api'

export const s = {
  title: { id: 'Ketersediaan Tempat Tidur', en: 'Bed Availability', jv: 'Ketersediaan Tempat Tilem' },
  lead: {
    id: 'Jumlah tempat tidur kosong di setiap ruang rawat inap RSUD dr. Loekmono Hadi Kudus, langsung dari sistem SPGDT rumah sakit.',
    en: 'Empty beds in every inpatient ward of RSUD dr. Loekmono Hadi Kudus, straight from the hospital SPGDT system.',
    jv: 'Cacah tempat tilem kosong ing saben ruang rawat inap RSUD dr. Loekmono Hadi Kudus, langsung saking sistem SPGDT griya sakit.',
  },
  cta: { id: 'Cek ketersediaan tempat tidur', en: 'Check bed availability', jv: 'Priksa ketersediaan tempat tilem' },
  ctaNote: {
    id: 'Lihat tempat tidur kosong di ICU dan ruang rawat lain, diperbarui tiap menit.',
    en: 'See empty beds in the ICU and other wards, updated every minute.',
    jv: 'Pirsani tempat tilem kosong ing ICU lan ruang rawat sanesipun, dipunanyaraken saben menit.',
  },
  total: { id: 'Total tempat tidur', en: 'Total beds', jv: 'Total tempat tilem' },
  occupied: { id: 'Terisi', en: 'Occupied', jv: 'Kaisi' },
  empty: { id: 'Kosong', en: 'Empty', jv: 'Kosong' },
  bor: { id: 'Keterisian (BOR)', en: 'Occupancy (BOR)', jv: 'Keterisian (BOR)' },
  updated: { id: 'Diperbarui', en: 'Updated', jv: 'Dipunanyaraken' },
  refresh: { id: 'Muat ulang', en: 'Refresh', jv: 'Muat malih' },
  loading: { id: 'Memuat data tempat tidur…', en: 'Loading bed data…', jv: 'Ngemot data tempat tilem…' },
  error: {
    id: 'Data tempat tidur belum bisa dimuat. Periksa koneksi lalu coba lagi.',
    en: 'Bed data could not be loaded. Check your connection and try again.',
    jv: 'Data tempat tilem dereng saged dipunemot. Priksa koneksi lajeng cobi malih.',
  },
  retry: { id: 'Coba lagi', en: 'Try again', jv: 'Cobi malih' },
  icuTitle: { id: 'Ruang ICU', en: 'ICU', jv: 'Ruang ICU' },
  allRooms: { id: 'Semua ruang rawat', en: 'All wards', jv: 'Sedaya ruang rawat' },
  byRoom: { id: 'Per ruangan', en: 'By ward', jv: 'Per ruangan' },
  byClass: { id: 'Per kelas', en: 'By class', jv: 'Per kelas' },
  search: { id: 'Cari ruangan atau kelas', en: 'Search ward or class', jv: 'Padosi ruangan utawi kelas' },
  onlyEmpty: { id: 'Hanya yang ada kosong', en: 'Only with empty beds', jv: 'Namung ingkang wonten kosong' },
  noMatch: {
    id: 'Tidak ada ruangan yang cocok dengan pencarian ini.',
    en: 'No ward matches this search.',
    jv: 'Mboten wonten ruangan ingkang cocok kaliyan pados punika.',
  },
  emptyOf: { id: 'kosong dari', en: 'empty of', jv: 'kosong saking' },
  beds: { id: 'tempat tidur', en: 'beds', jv: 'tempat tilem' },
  dischargeToday: { id: 'Rencana pulang hari ini', en: 'Planned discharge today', jv: 'Rencana kondur dinten punika' },
  dischargeTomorrow: { id: 'Rencana pulang besok', en: 'Planned discharge tomorrow', jv: 'Rencana kondur benjing' },
  perClass: { id: 'Rincian per kelas', en: 'Breakdown by class', jv: 'Rincian per kelas' },
  perRoom: { id: 'Rincian per ruangan', en: 'Breakdown by ward', jv: 'Rincian per ruangan' },
  wards: { id: 'Ruangan', en: 'Ward', jv: 'Ruangan' },
  className: { id: 'Kelas', en: 'Class', jv: 'Kelas' },
  privacy: {
    id: 'Nomor rekam medis pasien sengaja tidak ditampilkan. Ketersediaan bisa berubah sewaktu-waktu, pastikan ke petugas pendaftaran sebelum datang.',
    en: 'Patient record numbers are intentionally hidden. Availability can change at any time, so confirm with the registration desk before you come.',
    jv: 'Nomer rekam medis pasien sengaja mboten dipunpajang. Ketersediaan saged ewah sawanci-wanci, mangga konfirmasi dhateng petugas pendaftaran saderengipun rawuh.',
  },
} satisfies Record<string, Localized>

export const statusLabel: Record<Status, Localized> = {
  longgar: { id: 'Longgar', en: 'Plenty free', jv: 'Longgar' },
  sedang: { id: 'Sedang', en: 'Filling up', jv: 'Sedheng' },
  penuh: { id: 'Penuh', en: 'Full', jv: 'Kebak' },
}
