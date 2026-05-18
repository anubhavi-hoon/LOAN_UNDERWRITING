import { motion } from "framer-motion";
import { techStack } from "../data/mockData.js";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function TechStack() {
  return (
    <section className="bg-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-4"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            Built With
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="font-lora text-4xl font-bold text-text-main mb-10"
        >
          Tech Stack
        </motion.h2>

        {/* Scrollable pill row */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-x-auto pb-2"
        >
          <div className="flex gap-3 flex-wrap">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  boxShadow: "0 6px 16px rgba(44,74,110,0.20)",
                }}
                className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-full cursor-default select-none"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
