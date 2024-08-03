import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandHtml5 } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiJava } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { animate, motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Tecnologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div 
      whileInView={{ opacity: 1 , x: 0}}
      initial={{ opacity: 0, x: -100}}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap justify-center gap-4">
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandHtml5 className="text-5xl text-orange-600" />
        </motion.div>

        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-5xl text-green-600" />
        </motion.div>

        <motion.div
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandReactNative className="text-5xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJava className="text-5xl text-orange-600" />
        </motion.div>

        <motion.div
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiNodejs className="text-5xl text-green-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tecnologies;
