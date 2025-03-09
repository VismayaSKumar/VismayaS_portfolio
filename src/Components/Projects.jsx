import React from 'react'
import projectCard from "../assets/projectCard.svg"
import projectSticker from "../assets/projectsSticker.svg"

function Projects() {
  return (
    <div className='px-10 md:px-0'>
      <img src={projectSticker} className='h-28 md:h-40 m-0 md:mx-34 ' alt="" />
      <div className='relative flex justify-center items-center'>
        <img src={projectCard} className='md:h-120 h-70' alt="" />
        <div className='font-caesar absolute text-xl md:text-5xl font-normal'>PROJECTS UNDER CONSTRUCTION</div>
      </div>

    </div>
  )
}

export default Projects