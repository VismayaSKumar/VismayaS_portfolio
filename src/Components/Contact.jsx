import React from 'react'
import { useState } from 'react';
import linkedIn from "../assets/linkedIn.svg"
import github from "../assets/github.svg"
import emailjs from 'emailjs-com';

function Contact() {
  const [buttonText, setButtonText] = useState('send');
    const sendEmail = (e) => {
    e.preventDefault();
    
    const email = e.target.from_email.value.trim();
    const message = e.target.message.value.trim();
  
    if (!email || !message) {
      setButtonText('fill all!');
      setTimeout(() => {
        setButtonText('send');
        setButtonColor('bg-[#FFEFB7] hover:bg-[#FEDE6B]');
      }, 2000);
      return;
    }

    const serviceID = 'service_nf4x6n8';
    const templateID = 'template_x5sa87a';
    const userID = 'SHo9fYU2cgWBPLiWf';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
    .then((result) => {
        console.log('Email sent successfully!', result.text);
        setButtonText('sent!');
        setTimeout(() => {
          setButtonText('send');
        }, 2000);
    }, (error) => {
        console.error('Error sending email:', error.text);
        setButtonText('error!');
        setTimeout(() => {
          setButtonText('send');
        }, 2000);
    });
  e.target.reset();
};

  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-[url("/contactBgMobile.png")] md:bg-[url("/contactBgDesktop.png")] flex flex-col justify-center items-center font-gugi text-xl relative '>
      <div className='bg-[#D2E855] px-5 lg:px-10 pt-14 pb-5 rounded-4xl lg:w-1/2 flex flex-col'>
          <h1 className='text-4xl pb-4'>Get in touch!</h1>
          <form onSubmit={sendEmail} className=' bg-[#D2E855] rounded-4xl flex gap-2 flex-col'>
            <div> 
              <label htmlFor="email">your email</label>
              <input type="email" className='bg-[#F3EFEF] w-full h-10 rounded-4xl font-grot p-3' id="from_email" name="from_email" required />
            </div>
            <div>
              <label htmlFor="message">your message</label>
              <textarea className='bg-[#F3EFEF] w-full rounded-4xl h-60 font-grot p-3' id="message" name="message" required > </textarea>
            </div>
            <div className='flex justify-end'>
              <button 
                type="submit"
                className='bg-[#F3EFEF] text-[#859b0a] rounded-full py-2 px-4 hover:bg-[#859b0a] transition duration-300 cursor-pointer hover:text-white font-medium'>{buttonText}
              </button>
            </div>

      </form>
      </div>
        <div className='absolute bottom-7 w-full flex justify-end items-center pr-28'>
          <div className='flex justify-end flex-row gap-4'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vismaya-s-33036b27b/">
              <img className='h-11 md:h-13 hover:scale-115 duration-350' src={linkedIn} alt="" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/VismayaSKumar">
              <img className='h-11 md:h-13 hover:scale-115 duration-350' src={github} alt="" />
            </a>
           </div>
        </div>
   


      
      
    </div>
  )
}

export default Contact