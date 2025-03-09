import React from 'react'
import linkedIn from "../assets/linkedIn.svg"
import github from "../assets/github.svg"

function Contact() {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-[url("/contactBgMobile.png")] md:bg-[url("/contactBgDesktop.png")] flex flex-col justify-center items-center font-gugi text-xl relative '>
      <div className='h-100 w-74 md:w-1/2 p-5 bg-[#D2E855] rounded-4xl flex flex-col gap-6 relative'>
        <div> 
          <label for="email">your email</label>
          <input type="email" className='bg-[#F3EFEF] w-full h-10 rounded-4xl font-grot p-3' id="email" name="email" /></div>
        <div>
          <label htmlFor="textarea">your message</label>
          <textarea className='bg-[#F3EFEF] w-full rounded-4xl h-50 font-grot p-3 '></textarea>
        </div>
        <button className='bg-[#F3EFEF] text-[#859b0a] rounded-full py-2 px-4 hover:bg-zinc-500 transition duration-300 h-10 w-30 absolute bottom-1 right-10 '>
          Send
        </button>
      </div>
      <div className='absolute bottom-5 right-10 flex flex-row gap-4'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vismaya-s-33036b27b/"><img className='md:h-18' src={linkedIn} alt="" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/VismayaSKumar"><img className='md:h-18' src={github} alt="" /></a>
      </div>
    </div>
  )
}

export default Contact