import { CrewHero } from '../features/member/CrewHero'
import { OrgChart } from '../features/member/OrgChart'
import { RoomData } from '../features/member/RoomData'

export default function Member() {
  return (
    <>
      <CrewHero />
      <OrgChart />
      <RoomData />
    </>
  )
}
