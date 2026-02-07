'use client'

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="font-heading bg-background3 text-fc2 overflow-hidden flex justify-between px-[3vw] items-center z-100 fixed bottom-0 left-0 w-screen h-[60px]
        lg:p-0 lg:w-[250px] lg:h-screen lg:flex-col lg:items-center lg:justify-start
        2xl:w-[300px]">
        <a href="https://moe-pf.vercel.app/">
          <div className="text-center relative lg:mt-15 lg:mb-20 2xl:mt-20 2xl:mb-25 group">
              <p className="text-sm relative z-110 lg:text-lg 2xl:text-[22px]">MOE HATANAKA</p>
              <p className="text-xs relative z-110 mt-[-5px]">Portfolio</p>
              {/* <div className="w-[28px] h-[28px] absolute top-[1px] lg:top-1 left-0 right-0 mx-auto rounded-[55%_45%_74%_26%/66%_32%_68%_34%] bg-[#fe6f4c]
              lg:w-[33px] lg:h-[33px] 2xl:w-[35px] 2xl:h-[35px]
              group-hover:scale-[115%] origin-center transition-all duration-500"></div> */}
              <div className="w-[28px] h-[28px] absolute top-[1px] lg:top-1 left-0 right-0 mx-auto rounded-[55%_45%_74%_26%/66%_32%_68%_34%] bg-[rgba(255,102,46,0.9)]
              lg:w-[33px] lg:h-[33px] 2xl:w-[35px] 2xl:h-[35px]
              group-hover:scale-[115%] origin-center transition-all duration-500"></div>
          </div>
        </a>

        <nav className="pl-[10vh] lg:pl-0">
          <ul className="hidden md:visible md:flex md:text-sm  md:gap-[4vh]  lg:flex-col lg:items-center lg:text-lg 2xl:text-xl">
            <li><a className="inline-block relative group" href="#top">
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300"></div>
              Top
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300 absolute bottom-0 right-0"></div>
            </a></li>
            <li><a className="inline-block relative group" href="#about">
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300"></div>
              About
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300 absolute bottom-0 right-0"></div>
            </a></li>
            <li><a className="inline-block relative group" href="#skills">
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300"></div>
              Skills
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300 absolute bottom-0 right-0"></div>
            </a></li>
            <li><a className="inline-block relative group" href="#works">
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300"></div>
              Works
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300 absolute bottom-0 right-0"></div>
            </a></li>
            <li><a className="inline-block relative group" href="#like">
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300"></div>
              I Like
              <div className="bg-background2 h-px w-0 group-hover:w-full transition-all duration-300 absolute bottom-0 right-0"></div>
            </a></li>
          </ul>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden h-[60px] w-[60px] flex justify-center items-center">
            <div className="h-[18px] w-[24px] relative">
              <div className={`h-[2px] w-[24px] bg-background2 absolute top-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-[8px]' : ''}`}></div>
              <div className={`h-[2px] w-[24px] bg-background2 absolute top-[8px] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-[2px] w-[24px] bg-background2 absolute bottom-0 transition-all duration-300 ${isMenuOpen ? '-rotate-45 bottom-[8px]' : ''}`}></div>              
            </div>

          </div>
        </nav>
      </header>

      <nav>
        <ul className={`font-heading fixed bottom-[60px] z-50 bg-background4 text-fc2 w-screen h-[300px] py-4 flex flex-col items-center justify-around
          md:hidden
          transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <li><a className="hover:text-gray2" href="#top">Top</a></li>
            <li><a className="hover:text-gray2" href="#about">About</a></li>
            <li><a className="hover:text-gray2" href="#skills">Skills</a></li>
            <li><a className="hover:text-gray2" href="#works">Works</a></li>
            <li><a className="hover:text-gray2" href="#like">I Like</a></li>
        </ul>
      </nav>
    </>
  )
}
