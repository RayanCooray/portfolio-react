import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandHtml5, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript, SiAntdesign, SiNodedotjs, SiJavascript, SiExpress, SiMicrosoftazure, SiFigma, SiAdobexd, SiNestjs, SiShadcnui } from "react-icons/si";
import { DiJava, DiNodejs, DiCss3 } from "react-icons/di";

const techVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const cardStyle = "rounded-3xl p-6 shadow-2xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800 hover:scale-105 transform transition-all duration-300 flex items-center justify-center";

const Technologies = () => {
  const techSections = [
    {
      title: "Frontend",
      items: [
        { icon: <RiReactjsLine className="text-cyan-400" />, name: "React" },
        { icon: <TbBrandReactNative className="text-cyan-400" />, name: "React Native" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        { icon: <TbBrandHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <DiCss3 className="text-blue-500" />, name: "CSS3" },
        { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
        { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
        { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
      ],
    },
    {
      title: "Backend",
      items: [
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
        { icon: <SiNestjs className="text-red-500" />, name: "NestJS" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <DiNodejs className="text-green-600" />, name: "Node" },
        { icon: <DiJava className="text-orange-500" />, name: "Java" },
      ],
    },
    {
      title: "Database",
      items: [
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
        { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
      ],
    },
    {
      title: "UI/UX",
      items: [
        { icon: <SiFigma />, name: "Figma" },
        { icon: <SiAdobexd className="text-red-600" />, name: "Adobe XD" },
        { icon: <SiAntdesign className="text-cyan-400" />, name: "Ant Design" },
        { icon: <SiShadcnui className="text-slate-400" />, name: "Shadcn UI" },
      ],
    },
    {
      title: "Cloud",
      items: [
        { icon: <SiMicrosoftazure className="text-blue-400" />, name: "Azure" },
      ],
    },
  ];

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="text-center text-4xl font-bold text-white mb-16">
          Technologies
        </h1>

        {techSections.map((section) => (
          <div key={section.title} className="mb-16">
            <h2 className="text-3xl text-center mb-8 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text font-semibold">
              {section.title}
            </h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section.items.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  variants={techVariants}
                  custom={i}
                  className={cardStyle}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-5xl">{tech.icon}</div>
                    <span className="text-neutral-200 font-medium">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;