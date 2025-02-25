import React from 'react'
import MissionVisionCard from './MissionVisionCard'
const missionVisionData = [
  {
    title: "Mission",
    description:"The mission of PAIS is to provide its student with the best elements of Western education within an Eastern cultural environment through cooperation among students, parents, educators and the community."
  },
  {
    title: "Vision",
    description:"The vision of Pan-Asia International School is to present its students with an opportunity to excel both academically and morally and to become responsible balanced future citizens of the global community."
  },
  {
    title: "Philosophy",
    description:"The vision of Pan-Asia International School is to present its students with an opportunity to excel both academically and morally and to become responsible balanced future citizens of the global community."
  },
]
export default function MissionVisionSection() {
  return (
    <div className='bg-[#F2FBFD] py-[167px]'>
      <div className='container'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col gap-[64px]'>
              {missionVisionData.map((msn, indx) => <MissionVisionCard key={indx} {...msn}/>)}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
