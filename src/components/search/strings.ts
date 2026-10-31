import type { Localized } from '../../data/types'
import type { SearchType } from './searchIndex'

export const typeLabels: Record<SearchType, Localized> = {
  page: { id: 'Halaman', en: 'Page' },
  profil: { id: 'Profil ICU', en: 'ICU Profile' },
  fasilitas: { id: 'Fasilitas', en: 'Facility' },
  edukasi: { id: 'Edukasi', en: 'Education' },
  berkas: { id: 'Berkas', en: 'Document' },
}

export const searchStrings = {
  results: { id: 'Hasil pencarian', en: 'Search results' },
  noResults: { id: 'Tidak ada hasil untuk', en: 'No results for' },
  hint: {
    id: 'Coba kata lain, misalnya ventilator, visi, atau SOP.',
    en: 'Try another word, for example ventilator, vision, or SOP.',
  },
  count: { id: '{n} hasil ditemukan', en: '{n} results found' },
} satisfies Record<string, Localized>
