import profilePic from "../assets/DSC01203.jpg";
import { HERO_CONTENT } from "../contstants";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center border-b border-neutral-900 pt-24 sm:pt-16 md:pt-20 lg:pt-24">
      {" "}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4"
            >
               Software Engineer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Rayan Cooray
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-4 text-2xl lg:text-3xl text-neutral-300 font-semibold"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="mt-6 max-w-xl text-neutral-400 leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition font-medium shadow-lg shadow-purple-900/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-purple-500 hover:text-purple-400 transition font-medium"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative backdrop-blur-xl bg-neutral-900/40 border border-neutral-800 rounded-3xl p-3 shadow-2xl">
                <img
                  src={profilePic}
                  alt="Rayan Cooray"
                  className="w-72 h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
