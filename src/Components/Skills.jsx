import React from 'react'
import hook from "../assets/hook.svg"
import skillSticker from "../assets/skillSticker.svg"
import htmlCard from "../assets/htmlCard.svg"
import reactCard from "../assets/reactCard.svg"
import cssCard from "../assets/cssCard.svg"
import tailwindCard from "../assets/tailwindCard.svg"
import javascriptCard from "../assets/javascriptCard.svg"
import figmaCard from "../assets/figmaCard.svg"
import canvaCard from "../assets/canvaCard.svg"
import javaCard from "../assets/javaCard.svg"


const skills = [reactCard,htmlCard,cssCard,tailwindCard,javascriptCard,javaCard,canvaCard,figmaCard,]

function Skills() {
  return (
    <div className='lg:min-h-screen min-h-[60vh] w-full relative flex flex-col lg:bg-contain bg-no-repeat bg-cover bg-[url("/skillsBgDesktopLarge.png")]'>
      <div className='flex justify-end pt-5 pr-2 md:pt-0 '><img className='md:h-34' src={hook} alt="" /> </div>
      <div className='relative '>
        <img className='absolute top-[-55px] md:left-44 md:top-[-50px] md:h-40 ' src={skillSticker} alt="" /> 
        <div className='font-caesar absolute top-[-40px] md:top-[-34px] left-15 md:left-64 md:text-3xl '>SKILLS</div>
      </div>
      <div className='p-10 pt-19 flex items-center gap-10 lg:gap-15 overflow-x-auto whitespace-nowrap py-5 scrollbar-hide'
      style={{scrollbarWidth:"none", msOverflowStyle: "none",}}>
        {
          skills.map((card,index)=>(
            <img key={index} className='h-54 w-auto hover:scale-110 transition duration-500' src={card} alt="" />
          ))
        }
      </div>

    </div>
  )
}

export default Skills