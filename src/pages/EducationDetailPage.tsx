import { useParams } from 'react-router-dom'
import { EducationDetail } from '../features/edukasi/EducationDetail'

export default function EducationDetailPage() {
  const { slug = '' } = useParams()
  return <EducationDetail slug={slug} />
}
