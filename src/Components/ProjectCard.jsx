import React from 'react'

function ProjectCard({project, onBack}) {
  return (
    <div className='px-10 lg:px-20 lg:mb-30 w-full flex'>
        <div className='w-full bg-[#FDEA8A] rounded-xl flex p-10 '> 
            <div className='w-1/3'>
                <img className='cover' src={project.image} alt="" />
            </div>
            <div className=' w-2/3 flex flex-col gap-3  pl-15'>
                <h1 className='text-5xl font-caesar'>{project.title}</h1>
                <p className='font-grot text-2xl font-medium '>{project.description} | <i className='text-[18px] font-normal '>{project.techStack}</i></p>
                <p className='font-grot text-xl '> {project.detail}               </p>
                <a href={project.link} className='text-blue-500 underline' target="_blank" rel="noopener noreferrer" >View Project</a>
                <div className='flex mt-auto justify-end'> <button className=' py-2 px-5 font-gugi rounded-xl bg-amber-50 hover:font-medium cursor-pointer hover:scale-105 duration-200 ' onClick={onBack}>back</button> </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard