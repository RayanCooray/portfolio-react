import { EXPERIENCE } from "../contstants";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-bold tracking-tight"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col items-center">
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="flex flex-col items-center w-full max-w-3xl">
                        <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur p-6 shadow-lg"
            >
              <p className="text-sm text-neutral-400 mb-2">
                {experience.year}
              </p>

              <h3 className="text-lg font-semibold">
                {experience.role}
              </h3>

              <p className="text-purple-300 text-sm mb-4">
                {experience.company}
              </p>

              <p className="mb-6 leading-relaxed text-neutral-400">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs font-medium text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {index !== EXPERIENCE.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="my-6 text-neutral-500"
              >
                <ChevronDown size={28} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;