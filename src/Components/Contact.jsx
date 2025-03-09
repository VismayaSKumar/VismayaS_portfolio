import React from 'react'
import linkedIn from "../assets/linkedIn.svg"
import github from "../assets/github.svg"
import emailjs from 'emailjs-com';

function Contact() {
    const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_nf4x6n8';
    const templateID = 'template_x5sa87a';
    const userID = 'SHo9fYU2cgWBPLiWf';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
    .then((result) => {
        console.log('Email sent successfully!', result.text);
    }, (error) => {
        console.error('Error sending email:', error.text);
    });
  e.target.reset();
};
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-[url("/contactBgMobile.png")] md:bg-[url("/contactBgDesktop.png")] flex flex-col justify-center items-center font-gugi text-xl relative '>
    <form onSubmit={sendEmail} className='h-100 w-74 md:w-1/2 p-5 bg-[#D2E855] rounded-4xl flex flex-col gap-6 relative'>
        <div> 
          <label htmlFor="email">Your Email</label>
          <input type="email" className='bg-[#F3EFEF] w-full h-10 rounded-4xl font-grot p-3' id="from_name" name="from_name" 
            required />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea className='bg-[#F3EFEF] w-full rounded-4xl h-50 font-grot p-3' id="message" name="message" required > </textarea>
        </div>
        <button 
          type="submit"
          className='bg-[#F3EFEF] text-[#859b0a] rounded-full py-2 px-4 hover:bg-zinc-500 transition duration-300 h-10 w-30 absolute bottom-1 right-10'
        >
          Send
        </button>
      </form>
      <div className='absolute bottom-5 right-28 flex flex-row gap-4'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vismaya-s-33036b27b/"><img className='md:h-18' src={linkedIn} alt="" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/VismayaSKumar"><img className='md:h-18' src={github} alt="" /></a>
      </div>
    </div>
  )
}

export default Contact