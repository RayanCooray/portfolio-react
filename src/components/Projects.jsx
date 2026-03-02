import { PROJECTS } from "../contstants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-900 pb-16">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        Projects
      </motion.h2>

      <div className="space-y-20">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title || index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-center"
          >
            <div className="w-full lg:w-2/5">
              <div className="overflow-hidden rounded-2xl border border-neutral-800 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 max-w-2xl">
              <h3 className="mb-4 text-2xl font-semibold bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </h3>

              <p className="mb-6 leading-relaxed text-neutral-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {Array.isArray(project.technologies) &&
                  project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-gray-200 hover:bg-neutral-800 transition"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;