import React from 'react';
import aboutMedSticker from "../assets/aboutMeSticker.svg";
import photoCard from "../assets/photoCard.png";
import skateCard from "../assets/skateCard.png"
import writeCard from "../assets/writeCard.png"

function About() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:pt-10 md:px-16 p-5 font-grot text-2xl text-white'>
      <div className='md:w-1/2 w-full md:text-3xl'>
          <div ><img src={aboutMedSticker} className='hover:scale-90 hover:rotate-10 transition lg:ml-[-3%] lg:mt-[-3%] duration-400' alt="" /></div>
          <p>I'm a <b>UI/UX designer</b> and <b>front-end developer</b> who loves turning ideas into beautiful, intuitive digital experiences. I bring designs to life using <b>React, Tailwind CSS, and JavaScript</b>, blending creativity with problem-solving to build user-friendly web solutions.</p>
          <p>Beyond design, I love exploring different forms of creativity, whether through visuals, storytelling, or movement—each shaping my perspective as a designer. Let’s connect and create something amazing!</p>
      </div>
      <div className='md:w-1/2 w-full relative flex justify-center items-center'>
        <img className='absolute w-50 md:w-70 top-5 md:top-0  left-7 md:left-28 rotate-335 hover:scale-110 hover:rotate-360 transition duration-600' src={photoCard} alt="" />
        <img className='absolute w-45 md:w-70 top-20 md:top-20 left-48 md:left-96 rotate-12 hover:scale-110 hover:rotate-0 transition duration-600' src={skateCard} alt="" />
        <img className='absolute w-50 md:w-70 top-40 md:top-48 left-10 md:left-32 rotate-7 hover:scale-110 hover:rotate-0 transition duration-600' src={writeCard} alt="" />
      </div>
    </div>
  )
}

export default About