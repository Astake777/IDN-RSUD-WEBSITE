import type { Localized } from '../../data/types'

const s = (id: string, en: string, jv: string): Localized => ({ id, en, jv })

export const S = {
  fab: s('Pengaturan Aksesibilitas', 'Accessibility settings', 'Setelan Aksesibilitas'),
  title: s('Preferensi Aksesibilitas', 'Accessibility Preferences', 'Pilihan Aksesibilitas'),
  shortcut: s('Pintasan keyboard:', 'Keyboard shortcut:', 'Pintasan keyboard:'),
  close: s('Tutup pengaturan aksesibilitas', 'Close accessibility settings', 'Tutup setelan aksesibilitas'),
  active: s('Aktif', 'On', 'Aktif'),
  decrease: s('Kurangi', 'Decrease', 'Kirangi'),
  increase: s('Tambah', 'Increase', 'Imbuhi'),
  reset: s('Mengatur Ulang', 'Reset', 'Wangsulaken'),
  resetDone: s('Pengaturan dikembalikan ke awal', 'Settings restored to default', 'Setelan sampun dipunwangsulaken kados wiwitan'),
  readingMask: s('Topeng Baca', 'Reading Mask', 'Topeng Maos'),
  highContrast: s('Kontras Tinggi', 'High Contrast', 'Kontras Inggil'),
  fontSize: s('Ukuran Huruf', 'Font Size', 'Ukuran Aksara'),
  lineHeight: s('Tinggi Baris', 'Line Height', 'Inggil Larikan'),
  letterSpacing: s('Spasi Huruf', 'Letter Spacing', 'Spasi Aksara'),
  contentScale: s('Penskalaan Konten', 'Content Scaling', 'Ukuran Isi'),
  dyslexiaFont: s('Font Mudah Dibaca', 'Readable Font', 'Font Gampil Dipunwaos'),
  dyslexiaHelp: s(
    'Font alternatif yang dirancang agar huruf lebih mudah dibedakan.',
    'An alternative font designed to make letters easier to tell apart.',
    'Font sanes ingkang dipunrancang supados aksara langkung gampil dipunbedakaken.',
  ),
  alignLeft: s('Rata Kiri', 'Align Left', 'Rata Kiwa'),
  alignCenter: s('Sejajarkan Pusat', 'Align Center', 'Rata Tengah'),
  alignRight: s('Rata Kanan', 'Align Right', 'Rata Tengen'),
  hideImages: s('Sembunyikan Gambar', 'Hide Images', 'Dhelikaken Gambar'),
  highlightLinks: s('Sorot Tautan', 'Highlight Links', 'Sorot Tautan'),
  magnifier: s('Pembesar Teks', 'Text Magnifier', 'Pambesar Teks'),
  noTouch: s('Tidak tersedia di layar sentuh', 'Not available on touch screens', 'Boten wonten ing layar demok'),
  highlightHeadings: s('Sorot Judul', 'Highlight Headings', 'Sorot Irah-irahan'),
  darkMode: s('Mode Gelap', 'Dark Mode', 'Mode Peteng'),
  voice: s('Pembaca Suara', 'Text to Speech', 'Pamaos Swanten'),
  voiceHelp: s('Pilih teks untuk dibacakan', 'Select text to have it read aloud', 'Pilih teks kangge dipunwaosaken'),
  voiceUnsupported: s('Tidak didukung browser ini', 'Not supported by this browser', 'Boten dipundukung browser menika'),
}
