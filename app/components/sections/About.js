'use client'

import Image from "next/image";
import { motion } from "motion/react"
import TextRevealAnimation from "../animations/TextRevealAnimation";

export default function About() {
  return (
    <section className="px-[3vw] md:px-[10px] lg:pl-[260px] 2xl:pl-[300px] pb-[40px] lg:pb-[20px] 2xl:pb-[40px] bg-background2">
      <div className="mx-auto relative z-10">
        <h2 id="about" className="absolute top-[-30px] left-[3vw]">
          <span className="font-heading text-5xl md:text-6xl 2xl:text-7xl"><TextRevealAnimation text="About" /></span>
          <motion.span
              initial={{opacity: 0}}
              whileInView={{ opacity: 1 }}
              transition={{duration: 1, delay: 0.3}}
              viewport={{ once: true }}
              className="text-xs ml-5"
          >
            私について
          </motion.span>
        </h2>
        <div className="mx-auto py-10 md:py-20 2xl:py-25 md:max-w-[700px] lg:max-w-[800px] 2xl:max-w-[1000px]">
            <motion.div
              initial={{opacity: 0}}
              whileInView={{ opacity: 1 }}
              transition={{duration: 1, delay: 0.3}}
              viewport={{ once: true }}
            >
              <p>MOE HATANAKA ―― 神戸市在住<br></br>
              社内向けのWebアプリケーション運用窓口業務を経て、職業訓練校等でWebエンジニアを目指して勉強しています。</p>
              <div className="flex flex-col items-center mt-10 md:mt-15 md:flex-row md:justify-between">

                  <div className="flex flex-col justify-around items-center mb-8 md:mb-0 max-w-[80vw] md:max-w-[200px] 2xl:max-w-[280px]">
                    <div className="flex justify-center items-center md:flex-col">
                      <div className="w-[100px] mr-6 md:mr-0 md:w-3/4 2xl:w-full">
                        <Image src="/aboutimages/1n.svg" alt='' width={160} height={160} className="w-full h-auto"/>
                      </div>
                      <h3 className="font-bold text-sm md:mt-6 2xl:text-base ">社内表彰を受賞</h3>
                    </div>
                    <p className="mt-3 md:mt-5">前職でシステム運用窓口業務の品質を評価頂き、客先企業様の表彰を受賞しました。</p>
                  </div>

                  <div className="flex flex-col justify-around items-center mb-8 md:mb-0 max-w-[80vw] md:max-w-[200px] 2xl:max-w-[280px]">
                    <div className="flex justify-center items-center md:flex-col">
                      <div className="w-[100px] mr-6 md:mr-0 md:w-3/4 2xl:w-full">
                        <Image src="/aboutimages/2n.svg" alt='' width={160} height={160} className="w-full h-auto"/>
                      </div>
                      <h3 className="font-bold text-sm md:mt-6 2xl:text-base ">期待以上が目標</h3>
                    </div>
                    <p className="mt-5">任された仕事はとことん追求し、期待以上の結果をお返ししたいと思っています。</p>
                  </div>

                  <div className="flex flex-col justify-around items-center md:mb-0 max-w-[80vw] md:max-w-[200px] 2xl:max-w-[280px]">
                    <div className="flex justify-center items-center md:flex-col">
                      <div className="w-[100px] mr-6 md:mr-0 md:w-3/4 2xl:w-full">
                        <Image src="/aboutimages/3.svg" alt='' width={160} height={160} className="w-full h-auto"/>
                      </div>
                      <h3 className="font-bold text-sm md:mt-6 2xl:text-base ">真面目な正直者</h3>
                    </div>
                    <p className="mt-5">真面目で正直な性格です。相手を尊重し、誠意を以て人と接するのがモットーです。</p>
                  </div>

              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
};