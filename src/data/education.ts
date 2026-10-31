import type { EducationTopic } from './types'

// TODO(agent-edukasi): fill the 9 topics in display order.
export const educationTopics: EducationTopic[] = []

export const getTopic = (slug: string) => educationTopics.find((t) => t.slug === slug)
