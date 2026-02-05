'use client'

import { motion } from "motion/react"
import TextRevealAnimation from "../animations/TextRevealAnimation";

export default function Skills() {
  return (
    <section className="px-[3vw] md: md:px-[10px] lg:pl-[260px] 2xl:pl-[300px] pb-[40px] lg:pb-[20px] 2xl:pb-[40px]">
      <div className="mx-auto relative z-10">
        <h2 id="skills" className="absolute top-[-30px] right-[3vw]">
          <span className="font-heading text-5xl md:text-6xl 2xl:text-7xl"><TextRevealAnimation text="Skills" /></span>
          <motion.span
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{duration: 1, delay: 0.3}}
            viewport={{ once: true }}
            className="text-xs ml-5"
          >
            スキルセット
          </motion.span>
        </h2>
        <div className="mx-auto py-10 md:py-20 2xl:py-25 md:max-w-[700px] lg:max-w-[800px] 2xl:max-w-[1000px] flex flex-col md:flex-row">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration: 0.5, delay: 0.2}}
            viewport={{ once: true }}
            className="pl-[20px] w-auto md:w-[30%]"
          >
            <h3 className="font-bold text-sm md:mt-6 2xl:text-base border-l-accent3 border-l-5 pl-2 ml-[-20px]">勉強していること</h3>
            <ul className="mt-4 list-disc list-inside">
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Python</li>
              <li>Flask</li>
              <li>MySQL</li>
              <li>Figma</li>
            </ul>
          </motion.div>

          <div className=" w-auto md:w-[70%] flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{duration: 0.5, delay: 0.2}}
              viewport={{ once: true }}
              className="pl-[20px] self-end md:self-auto mt-[-60px] md:mt-0"
            >
              <h3 className="font-bold text-sm md:mt-6 2xl:text-base border-l-accent3 border-l-5 pl-2 ml-[-20px] pl-2 ml-[-20px]">保有資格</h3>
              <ul className="mt-4 list-disc list-inside">
                  <li>基本情報技術者</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{duration: 0.5, delay: 0.2}}
              viewport={{ once: true }}
              className="pb-4 md:pb-0 pl-[20px] mt-8 lg:mt-10"
            >
              <h3 className="font-bold text-sm md:mt-6 2xl:text-base border-l-accent3 border-l-5 pl-2 ml-[-20px] pl-2 ml-[-20px]">これから</h3>
              <div className="mt-4">
                <p>フロントエンドをメインに学習してきましたが、バックエンドにも興味があります。</p>
                <p>基礎を大切にしつつ、気になるトレンド技術にも積極的に挑戦していきたいと考えています。</p>
                <p>会社や社会とともに成長し続けられるエンジニアを目指します。</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
};