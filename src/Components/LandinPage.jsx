import React, { useState } from 'react';
import selfPortrait from '../assets/selfPotrait.svg'; 
import rightArrow from '../assets/rightArrow.svg';
import sparkle from '../assets/sparkle.svg';
import Home from './Home'

function LandingPage() {
  const [navigateToHome,setNavigateToHome] =useState(false)
  const goToHome = () => {
    setNavigateToHome(true);
  };

  if (navigateToHome) {
    return <Home />;
  }
  return (
    <div className="bg-[#FCF7F1] h-screen w-full flex justify-center items-center">
      <div className="card relative bg-[#F6E7D5] w-[90%] sm:w-[60vw] lg:w-[50vw] h-auto p-10 rounded-3xl drop-shadow-[10px_10px_2px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center gap-6">
        <div className='absolute h-25 w-25 top-[-60px] left-[-35px]'><img src={sparkle} alt="" /></div>
        <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-3xl border-2 border-[#E4C5A5]">
          <img src={selfPortrait} alt="Self Portrait" className="w-full h-full object-cover" />
        </div>

        <div className="w-full sm:w-auto text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Portfolio</h1>
          <div className="flex flex-col gap-4">
            <div className=''>
              <input w-full
              type="text" 
              className="bg-[#FCF7F1] text-gray-500 text-lg rounded-2xl px-6 py-2 border border-gray-400 focus:outline-none w-full pr-14 " 
              value="vismayaskumar10@gmail.com" readOnly/>
            </div>
              
             <div className="relative w-full">
              <input 
                type="password" 
                className="bg-[#FCF7F1] text-lg rounded-2xl px-6 py-2 border border-gray-400 focus:outline-none w-full pr-14" 
                placeholder="********"  disabled/>
              <button
              onClick={goToHome}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-1 rounded-full text-sm hover:scale-125 duration-700 ">
                <img src={rightArrow} alt="" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LandingPage;
