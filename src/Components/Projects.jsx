import React, { useState } from 'react'
import projectCard from "../assets/projectCard.svg"
import projectSticker from "../assets/projectsSticker.svg"
import ProjectCard from './ProjectCard'
import stash from '../assets/stash.png'
import xenopix from '../assets/xenopix.png'

function Projects() {
  const projectInfo = [
    {
      title: "Stash",
      description: "Virtual Photobooth Web App",
      techStack: "React, Tailwind CSS, Firebase",
      detail: "A real-time photobooth web app that enables webcam photo capture with customizable frames and overlays. The app uses Firebase Realtime Database to enable friend invites and simultaneous photo captures without relying on a traditional backend server. The entire experience is wrapped in an interactive, responsive UI built with Tailwind CSS.",
      image: stash, 
      link: "https://vismayaskumar.github.io/Stash/"
    },
    {
      title: "XenoPix",
      description: "Space-Themed Pixel Avatar Creator ",
      techStack: "React, Tailwind, GSAP, Locomotive Scrol",
      detail: "A space-themed pixel avatar creator with 10+ customization options, including gender, skin tone, facial features, outfits, and pets. The app features smooth scrolling and stacking card animations powered by GSAP and Locomotive Scroll, creating a playful, interactive experience. All pixel art assets were designed from scratch in Piskel, with a strong focus on responsiveness and user engagement.",
      image: xenopix,
      link: "https://vismayaskumar.github.io/XenoPix/"
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  const goToCard = (project) => {
    setSelectedProject(project)
  }
  const handleBack = () => {
    setSelectedProject(null)
  }

  if (selectedProject) {
    return <ProjectCard project={selectedProject} onBack={handleBack} />
  }

  return (
    <div className='px-10 lg:px-20 lg:mb-30 '>
      <img src={projectSticker} className='h-28 md:h-40 m-0  lg:mt-[-10%] ' alt="" />
      <div className='flex flex-row gap-15 items-center'>
        {projectInfo.map((project, index) => (
          <div onClick={()=> goToCard(project)} key={index} className='relative flex hover:scale-105 duration-250 cursor-pointer'>
              <img src={projectCard} alt="" />
            <div className='absolute mx-8 my-16 flex flex-col'>
              <h1 className='text-4xl font-caesar'>{project.title}</h1>
              <p className='font-grot text-xl'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
