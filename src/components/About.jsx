import AboutMePic from "../assets/IMG5646.jpg";
import { ABOUT_TEXT } from "../contstants";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section className="border-b border-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-center text-4xl font-bold mb-12">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-cyan-400/20 p-1">
              <img
                src={AboutMePic}
                alt="Rayan Cooray"
                className="w-80 h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="lg:w-1/2 w-full flex flex-col justify-center"
          >
            <p className="text-neutral-300 mb-6 text-lg leading-relaxed">
              {ABOUT_TEXT}
            </p>
            <div className="flex gap-6 mt-6 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 bg-neutral-900/50 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg"
              >
                <FaReact className="text-cyan-400 text-2xl" />
                <span className="text-neutral-200 font-medium">React</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 bg-neutral-900/50 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg"
              >
                <FaNodeJs className="text-green-400 text-2xl" />
                <span className="text-neutral-200 font-medium">Node.js</span>
              </motion.div>
             
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 bg-neutral-900/50 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg"
              >
                <FaJava className="text-red-400 text-2xl" />
                <span className="text-neutral-200 font-medium">Java</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;