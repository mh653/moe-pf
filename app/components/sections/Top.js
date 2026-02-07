'use client'

import { motion } from "motion/react"
import TextRevealAnimation from "../animations/TextRevealAnimation";

export default function Top() {
  return (
    <section id="top" className="px-[10px] mb-[130px] md:mb-[90px] lg:mb-[110px] 2xl:mb-[120px]">
      <div className="mx-auto relative flex justify-end mt-7 md:mt-8 lg:mt-10">
        <h1 className="font-heading relative text-6xl mr-[3vw] md:text-8xl lg:text-[105px] 2xl:text-9xl">
          <TextRevealAnimation text="MOE" /><br></br><TextRevealAnimation text="HATANAKA" />
          <span className="text-base absolute top-[7%] left-[50%] md:top-[19%] lg:top-[21%] 2xl:top-[25%]">
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 0.5}}
            >
              Web Engineer<br></br>Portfolio Site
            </motion.div>
          </span>
        </h1>
        <div className="-z-10 md:w-[300px] md:h-[300px] w-[250px] h-[250px] absolute top-[-150px] right-[1vw] md:right-[15vw]">
          <div className="rounded-[55%_45%_74%_26%/66%_32%_68%_34%] w-[300px] h-[300px] bg-accent2 mix-blend-multiply absolute top-0 right-0 mx-auto animate-[corners_20s_linear_infinite,rotate_12s_linear_infinite]"></div>
          <div className="rounded-[55%_45%_74%_26%/66%_32%_68%_34%] w-[300px] h-[300px] bg-accent2 mix-blend-multiply absolute top-0 right-0 mx-auto animate-[corners_20s_linear_infinite,rotate02_12s_linear_infinite]"></div>
          <div className="rounded-[55%_45%_74%_26%/66%_32%_68%_34%] w-[300px] h-[300px] bg-accent2 mix-blend-multiply absolute top-0 right-0 mx-auto animate-[corners_20s_linear_infinite,rotate03_12s_linear_infinite]"></div>
        </div>
      </div>
    </section>
  )
};