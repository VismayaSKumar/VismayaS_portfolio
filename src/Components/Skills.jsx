import React from 'react'
import hook from "../assets/hook.svg"
import skillSticker from "../assets/skillSticker.svg"

function Skills() {
  return (
    <div className='min-h-screen flex flex-col p-2 bg-contain bg-no-repeat bg-[url("/skillsBgMobile.png")] md:bg-[url("/skillsBgDesktop.png")] lg:bg-[url("/skillsBgDesktopLarge.png")]'>
      <div className='flex justify-end pt-5 pr-0 md:pt-0 '><img className='md:h-34' src={hook} alt="" /> </div>
      <div className='relative '>
        <img className='absolute top-[-55px] md:left-44 md:top-[-50px] md:h-40 ' src={skillSticker} alt="" /> 
        <div className='font-caesar absolute top-[-40px] md:top-[-34px] left-15 md:left-64 md:text-3xl '>SKILLS</div>
      </div>
    </div>
  )
}

export default Skills