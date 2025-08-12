
import { PROJECTS } from "../contstants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-16">
            {" "}
            {/* Increased margin-bottom for spacing */}
            <div className="flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded"
                  width={150}
                  height={150}
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="text-2xl my-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text font-semibold">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {Array.isArray(project.technologies) &&
                    project.technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="rounded bg-neutral-900 px-3 py-2 text-sm font-medium text-gray-50"
                      >
                        {technology}
                      </span>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
