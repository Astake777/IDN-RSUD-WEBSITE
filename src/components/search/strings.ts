import type { Localized } from '../../data/types'
import type { SearchType } from './searchIndex'

export const typeLabels: Record<SearchType, Localized> = {
  page: { id: 'Halaman', en: 'Page', jv: 'Kaca' },
  profil: { id: 'Profil ICU', en: 'ICU Profile', jv: 'Profil ICU' },
  fasilitas: { id: 'Fasilitas', en: 'Facility', jv: 'Fasilitas' },
  edukasi: { id: 'Edukasi', en: 'Education', jv: 'Edukasi' },
  berkas: { id: 'Berkas', en: 'Document', jv: 'Berkas' },
}

export const searchStrings = {
  results: { id: 'Hasil pencarian', en: 'Search results', jv: 'Asil pados' },
  noResults: { id: 'Tidak ada hasil untuk', en: 'No results for', jv: 'Mboten wonten asil kangge' },
  hint: {
    id: 'Coba kata lain, misalnya ventilator, visi, atau SPO.',
    en: 'Try another word, for example ventilator, vision, or SPO.',
    jv: 'Cobi tembung sanes, upaminipun ventilator, visi, utawi SPO.',
  },
  count: { id: '{n} hasil ditemukan', en: '{n} results found', jv: '{n} asil kapanggihaken' },
} satisfies Record<string, Localized>
