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
import flower from "../assets/flower.svg"

const skills = [reactCard,htmlCard,cssCard,tailwindCard,javascriptCard,javaCard,canvaCard,figmaCard,]

function Skills() {
  return (
    <div className='min-h-screen relative flex flex-col bg-contain bg-no-repeat bg-[url("/skillsBgMobile.png")] md:bg-[url("/skillsBgDesktop.png")] lg:bg-[url("/skillsBgDesktopLarge.png")]'>
      <div className='flex justify-end pt-5 pr-2 md:pt-0 '><img className='md:h-34' src={hook} alt="" /> </div>
      <div className='relative '>
        <img className='absolute top-[-55px] md:left-44 md:top-[-50px] md:h-40 ' src={skillSticker} alt="" /> 
        <div className='font-caesar absolute top-[-40px] md:top-[-34px] left-15 md:left-64 md:text-3xl '>SKILLS</div>
      </div>
      <div className='p-10 pt-20 flex items-center gap-10 md:gap-24 overflow-x-auto whitespace-nowrap py-5 scrollbar-hide'
      style={{scrollbarWidth:"none", msOverflowStyle: "none",}}>
        {
          skills.map((card,index)=>(
            <img key={index} className='h-50 md:h-60 w-auto hover:scale-110 transition duration-500' src={card} alt="" />
          ))
        }
      </div>
      <div className='md:hidden absolute bottom-60 right-[-100px]'>
        <img src={flower} alt="" />
      </div>
      <div className='md:hidden absolute bottom-0 left-[-100px]'>
        <img src={flower} alt="" />
      </div>
      <div className='md:hidden absolute bottom-30 right-20'>
        <img src={flower} alt="" />
      </div>
    </div>
  )
}

export default Skills