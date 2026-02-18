'use client'

import Image from "next/image";
import { motion } from "motion/react"
import { FaGitAlt } from "react-icons/fa";

const WorkCard = ({work}) => {
  return (
    <>
      {work.status ? (
        <motion.div
          initial={{opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{duration: 1, delay: 0.3}}
          viewport={{ once: true }}
        >
          <div className="border border-gray1 bg-background2 rounded-[15px] h-full">
            <a href={work.vercelUrl} target="blank">
              <div className="h-[210px] mt-5 overflow-hidden 2xl:h-[250px] border-t border-b border-gray1">
                <Image
                  src={work.image}
                  alt="クリックでアプリケーションが開きます"
                  width={800}
                  height={500}
                  className="transition-transform duration-400 hover:scale-103"
                />
              </div>                  
            </a>
            <div className="p-5">
              <div className="flex justify-between">
                <h3 className="font-bold text-sm 2xl:text-base">{work.title}</h3>
                <div className="w-[30px] h-[30px] bg-fc1 text-fc2 rounded-full mr-1 flex justify-center items-center border border-fc1 
                hover:bg-background2 hover:text-fc1 transition-colors duration-300">
                  <a href={work.gitUrl} target="blank"><FaGitAlt size={22}/></a>
                </div>
              </div>
              <div>
                {work.tools.map((tool, i) => (
                    <span key={i} className="bg-background2 px-2 pb-[1px] rounded-full text-gray2 text-xs mr-1 border border-gray1">
                    {tool}
                    </span>
                ))}
              </div>
              <div className="text-xs mt-2 py-1 2xl:py-2 2xl:text-sm">
                {work.description.map((line, i) => (
                    <p key={i} className="pt-1">
                    {line}
                    </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{duration: 1, delay: 0.3}}
          viewport={{ once: true }}
        >
          <div className="border border-gray1 bg-background2 rounded-[15px] h-full">
              <div className="h-[210px] mt-5 overflow-hidden 2xl:h-[250px] border-t border-b border-gray1">
                <Image
                  src={work.image}
                  alt="クリックでアプリケーションが開きます"
                  width={800}
                  height={500}
                />
              </div>                  
            <div className="p-5">
              <div className="flex justify-between">
                <h3 className="font-bold text-sm 2xl:text-base">Coming Soon...</h3>
                <div className="w-[30px] h-[30px] bg-fc1 text-fc2 rounded-full mr-1 flex justify-center items-center border border-fc1 opacity-0">
                  <FaGitAlt size={22}/>
                </div>
              </div>
              <div>
                {work.tools.map((tool, i) => (
                    <span key={i} className="bg-background2 px-2 pb-[1px] rounded-full text-gray2 text-xs mr-1 border border-gray1">
                    {tool}
                    </span>
                ))}
              </div>
              <div className="text-xs mt-2 py-1 2xl:py-2 2xl:text-sm">
                {work.description.map((line, i) => (
                    <p key={i} className="pt-1">
                    {line}
                    </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>







      )}
    </>
  )
}

export default WorkCard;