export type Lang = 'id' | 'en' | 'jv'

/** Javanese is optional per field; missing entries fall back to Indonesian. */
export type LocalizedOf<T> = { id: T; en: T; jv?: T }
export type Localized = LocalizedOf<string>
export type LocalizedList = LocalizedOf<string[]>

export interface ImageRef {
  src: string
  alt: Localized
}

export interface Facility {
  slug: string
  name: Localized
  description: Localized
  /** Bullet list of main functions, only where the source document lists them. */
  functions?: LocalizedList
  image: ImageRef
  /** Matching education topic, when one exists. */
  educationSlug?: string
}

export interface EducationSection {
  heading: Localized
  paragraphs?: Localized[]
  points?: LocalizedList
  note?: Localized
}

export interface EducationTopic {
  slug: string
  title: Localized
  /** Short card text, taken from the "Apa itu" paragraph. */
  summary: Localized
  image: ImageRef
  /** Extra illustration shown in the detail view (e.g. ETT airflow drawing). */
  illustration?: ImageRef
  sections: EducationSection[]
  importantMessage?: Localized[]
  /** False when the source has no full family-education material yet. */
  complete: boolean
  /** Specific YouTube video; falls back to the RSLH TV channel when absent. */
  videoUrl?: string
}

export type DocumentCategory =
  | 'pedoman-pelayanan'
  | 'pedoman-organisasi'
  | 'spo-keperawatan'
  | 'spo-ruang-icu'

export interface IcuDocument {
  id: string
  title: string
  category: DocumentCategory
  description: string
  /** Public URL, e.g. /documents/spo-ruang-icu/spo-transfer-pasien.pdf */
  filePath: string
  fileName: string
  /** Only true once the PDF actually exists under public/documents. */
  available: boolean
  updatedAt?: string
  sizeLabel?: string
}
