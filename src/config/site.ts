import type { Localized } from '../data/types'
import type { UiKey } from '../i18n/ui'

export const social = {
  instagram: { label: '@rsuddr.loekmonohadikudus', url: 'https://www.instagram.com/rsuddr.loekmonohadikudus/' },
  youtube: { label: 'RSLH TV', url: 'https://www.youtube.com/@rslhtv' },
  facebook: { label: 'RsuddrLoekmonohadi', url: 'https://www.facebook.com/profile.php?id=100010833333975' },
} as const

export const contact = {
  phoneLabel: '(0291) 444001',
  phoneHref: 'tel:+62291444001',
  whatsappLabel: '0815-7553-1104',
  whatsappHref: 'https://wa.me/6281575531104',
  address:
    'Jl. Dr. Lukmono Hadi No.19, Cobowo, Ploso, Kecamatan Jati, Kabupaten Kudus, Jawa Tengah 59348',
  mapsUrl: 'https://maps.app.goo.gl/C244HVRfNJyuhKY56',
  // Keyless embed centred on the hospital's coordinates (-6.8189271, 110.8367072).
  mapsEmbedUrl: 'https://www.google.com/maps?q=-6.8189271,110.8367072&z=17&output=embed',
  // No official email in the source files; footer hides the row while this is empty.
  email: '',
} as const

export const navItems: { to: string; key: UiKey }[] = [
  { to: '/', key: 'navHome' },
  { to: '/member', key: 'navMember' },
  { to: '/fasilitas', key: 'navFacilities' },
  { to: '/edukasi', key: 'navEducation' },
  { to: '/berkas-icu', key: 'navDocuments' },
]

export interface ServiceDay {
  day: Localized
  hours: string
  closed: boolean
}

// Brief specifies 07:00 - 18:00 for every day; set closed: true per day only when the hospital confirms it.
export const serviceHours: ServiceDay[] = [
  { day: { id: 'Senin', jv: 'Senen', en: 'Monday' }, hours: '07:00 - 18:00', closed: false },
  { day: { id: 'Selasa', jv: 'Selasa', en: 'Tuesday' }, hours: '07:00 - 18:00', closed: false },
  { day: { id: 'Rabu', jv: 'Rebo', en: 'Wednesday' }, hours: '07:00 - 18:00', closed: false },
  { day: { id: 'Kamis', jv: 'Kemis', en: 'Thursday' }, hours: '07:00 - 18:00', closed: false },
  { day: { id: 'Jumat', jv: 'Jemuwah', en: 'Friday' }, hours: '07:00 - 18:00', closed: false },
  { day: { id: 'Sabtu', jv: 'Setu', en: 'Saturday' }, hours: '07:00 - 18:00', closed: false },
  { day: { id: 'Minggu', jv: 'Minggu', en: 'Sunday' }, hours: '07:00 - 18:00', closed: false },
]
