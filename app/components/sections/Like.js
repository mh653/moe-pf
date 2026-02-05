'use client'

import Image from "next/image";
import { motion } from "motion/react"
import TextRevealAnimation from "../animations/TextRevealAnimation";

export default function Like() {
  return (
    <section className="px-[3vw]  md:px-[10px] lg:pl-[260px] 2xl:pl-[300px] pb-[40px] lg:pb-[20px] 2xl:pb-[40px]">
      <div className="mx-auto relative z-10">
        <h2 id="ilike" className="absolute top-[-30px] right-[3vw]">
          <span className="font-heading text-5xl md:text-6xl 2xl:text-7xl"><TextRevealAnimation text="I Like" /></span>
          <motion.span
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{duration: 1, delay: 0.3}}
            viewport={{ once: true }}
            className="text-xs ml-5"
          >
            好きなこと
          </motion.span>
        </h2>
        <div className="mx-auto py-10 md:py-20 2xl:py-25 md:max-w-[700px] lg:max-w-[800px] 2xl:max-w-[1000px]">
          <motion.div
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{duration: 1, delay: 0.3}}
            viewport={{ once: true }}
          >
            <p>バイクで自然豊かな場所に出かけるのが好きです。</p>
          </motion.div>
            <div className="mt-6 flex md:flex-col gap-2 max-w-[450px] md:max-w-[700px] lg:max-w-[800px] 2xl:max-w-[1000px] mx-auto">
                <div className="flex items-center flex-col md:flex-row gap-2">
                  <motion.div
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{duration: 1, delay: 0.2}}
                    viewport={{ once: true }}
                  >
                    <Image src="/likeimages/1n.jpg" alt='' width={216} height={216}/>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{duration: 1, delay: 0.4}}
                    viewport={{ once: true }}
                  >
                    <Image src="/likeimages/2.jpg" alt='' width={288} height={216}/>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{duration: 1, delay: 0.6}}
                    viewport={{ once: true }}
                  >
                    <Image src="/likeimages/3.jpg" alt='' width={288} height={216}/>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{duration: 1, delay: 0.8}}
                    viewport={{ once: true }}
                  >
                    <Image src="/likeimages/4.jpg" alt='' width={288} height={216}/>
                  </motion.div>
                </div>
                <div className="flex items-center flex-col md:flex-row gap-2">
                  <motion.div
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{duration: 1, delay: 0.2}}
                    viewport={{ once: true }}
                  >
                    <Image src="/likeimages/5.jpg" alt='' width={288} height={216}/>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{duration: 1, delay: 0.4}}
                    viewport={{ once: true }}
                  >
                    <Image src="/likeimages/6.jpg" alt='' width={288} height={216}/>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{duration: 1, delay: 0.6}}
                    viewport={{ once: true }}
                  >
                    <Image src="/likeimages/7.jpg" alt='' width={288} height={216}/>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{duration: 1, delay: 0.8}}
                    viewport={{ once: true }}
                  >
                    <Image src="/likeimages/8n.jpg" alt='' width={216} height={216}/>
                  </motion.div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
};