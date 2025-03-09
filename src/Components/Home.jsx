import React from "react";
import homebg from "../assets/welcomeBg.png"
import pole from "../assets/pole.svg"
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import upArrow from "../assets/upwardArrow.svg";


function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    
    <div className="min-h-screen w-full bg-[#336757]">

      <div id="home" className="min-h-screen md:h-screen w-full flex items-center justify-center">
        <div className="w-full h-full bg-no-repeat bg-cover bg-center"style={{ backgroundImage: `url(${homebg})` }} >

          <div className="flex flex-col md:flex-row justify-between md:ml-28">
            <div className="w-full md:w-1/2 flex md:justify-center flex-col gap-7 md:gap-4 md:items-start mt-10 md:mt-0 hover:cursor-default">
              <div className=" font-abril text-8xl md:text-9xl md-m-0 mx-5 ">hello!</div>
              
              <div className="text-3xl font-light md:font-normal font-grot flex flex-col justify-center items-end md:items-start md-m-0 mx-5 ">
                <span>I'm Vismaya.</span> 
                <span className="leading-8 tracking-tight text-end">Welcome to my creative space where every pixel tells a story.</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center relative"><img src={pole} className="p-10" alt="" />
              <div className="absolute text-3xl bg-[#07A071] p-2 top-40 w-[250px] text-center rounded-md font-irish hover:scale-90 hover:text-zinc-200 hover:cursor-pointer duration-500" onClick={() => scrollToSection("about")} >About</div>
              <div className="absolute text-3xl bg-[#FF52B1] p-2 top-55 w-[260px] text-center rounded-[20px] font-caesar hover:scale-90 hover:text-zinc-700 hover:cursor-pointer duration-500 rotate-355 text-white" onClick={() => scrollToSection("skills")}>SKILLS</div>
              <div className="absolute text-3xl bg-[#F28F56] p-2 top-73 w-[220px] text-center rounded-[10px] font-inika hover:scale-90 hover:text-zinc-100 hover:cursor-pointer duration-500 rotate-5 h-[60px] " onClick={() => scrollToSection("projects")}>Projects</div>
              <div className="absolute text-3xl bg-[#9E8CBE] p-2 top-90 w-[250px] text-center rounded-[20px] font-inria hover:scale-90 hover:text-zinc-800 hover:cursor-pointer duration-500 text-zinc-100" onClick={() => scrollToSection("contact")}> Contact</div>
            </div>
          </div>
          
        </div>
      </div>
      <button onClick={()=>scrollToSection("home")} className="fixed right-6 bottom-6 p-5 bg-white rounded-full hover:bg-zinc-500 transition duration-300 hover:cursor-pointer ">
        <img src={upArrow} alt="" className="h-7 w-7" />
      </button>
      <div id="about" className="min-h-screen w-full"><About/></div>
      <div id="skills" className="min-h-screen w-full pt-60 sm:pt-68 md:pt-0 "><Skills/></div>
      <div id="projects" className="min-h-screen w-full"><Projects/></div>
      <div id="contact" className="min-h-screen w-full"><Contact/></div>

    </div>
  );
}

export default Home;
