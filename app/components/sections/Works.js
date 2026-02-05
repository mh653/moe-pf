'use client'

import { motion } from "motion/react"
import TextRevealAnimation from "../animations/TextRevealAnimation";
import WorkCard from "../ui/WorkCard";
import { workdatas } from "@/app/data/workdatas";

export default function Works() {
  return (
    <section className="px-[3vw] md:px-[10px] lg:pl-[260px] 2xl:pl-[300px] pb-[40px] lg:pb-[20px] 2xl:pb-[40px] bg-background2">
      <div className="mx-auto relative z-10">
        <h2 id="works" className="absolute top-[-30px] left-[3vw]">
          <span className="font-heading text-5xl md:text-6xl 2xl:text-7xl"><TextRevealAnimation text="Works" /></span>
          <motion.span
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{duration: 1, delay: 0.3}}
            viewport={{ once: true }}
            className="text-xs ml-5"
          >
            制作作品
          </motion.span>
        </h2>

        <div className="mx-auto py-10 md:py-20 2xl:py-25 max-w-[350px] md:max-w-[700px] lg:max-w-[800px] 2xl:max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-[3vw] 2xl:gap-[2vw]">
          {workdatas.map((work) => (
              <WorkCard key={work.slug} work={work}/>
          ))}
        </div>

      </div>
    </section>
  )
};