import type { Localized } from '../../data/types'

// Kept apart from strings.ts so the sidebar copy has its own owner.
export const side = {
  otherTopics: { id: 'Edukasi lainnya', en: 'More education topics', jv: 'Edukasi sanesipun' },
  helpTitle: { id: 'Ada yang belum dipahami?', en: 'Anything unclear?', jv: 'Wonten ingkang dereng dipunmangertosi?' },
  helpBody: {
    id: 'Jangan ragu bertanya kepada dokter atau perawat yang bertugas di Ruang ICU.',
    en: 'Do not hesitate to ask the doctor or nurse on duty in the ICU.',
    jv: 'Sampun mangu-mangu nyuwun pirsa dhateng dokter utawi perawat ingkang tugas ing Ruang ICU.',
  },
  helpPhone: { id: 'Telepon rumah sakit', en: 'Hospital telephone', jv: 'Telepon griya sakit' },
} satisfies Record<string, Localized>
