import { motion } from "framer-motion";
import { pipelineSteps } from "../data/mockData.js";
import { HiUpload, HiDocumentSearch, HiDatabase, HiChartBar, HiClipboardCheck, HiArrowRight, HiInformationCircle } from "react-icons/hi";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const colorMap = {
  primary: { strip: "bg-primary", badge: "bg-code-bg text-code-text" },
  "code-text": { strip: "bg-code-text", badge: "bg-code-bg text-code-text" },
  accent: { strip: "bg-accent", badge: "bg-accent-light text-accent" },
  success: { strip: "bg-success", badge: "bg-success-light text-success" },
  danger: { strip: "bg-danger", badge: "bg-danger-light text-danger" },
};

export function Pipeline() {
  return (
    <section id="features" className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-4"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            The Architecture
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="font-lora text-4xl md:text-5xl font-bold text-text-main mb-4"
        >
          The 5-Stage AI Pipeline
        </motion.h2>

        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-text-muted text-lg mb-14 max-w-2xl"
        >
          Each stage is modular, independently testable, and runs in parallel
          for multi-document packages.
        </motion.p>

        {/* Cards — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-0 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5">
            {pipelineSteps.map((step, idx) => {
              const colors = colorMap[step.color] || colorMap["primary"];
              return (
                <div key={step.id} className="flex items-center">
                  <motion.div
                    custom={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.10)" }}
                    className="bg-card rounded-xl shadow-sm overflow-hidden flex flex-col w-52 lg:w-auto cursor-default"
                  >
                    {/* Colored top strip */}
                    <div className={`${colors.strip} h-2 w-full`} />

                    <div className="p-5 flex flex-col gap-3 flex-1">
                      {/* Stage number */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-text-muted bg-border-soft rounded-full px-2 py-0.5">
                          Stage {step.id}
                        </span>
                      </div>

                      {/* Icon + Title */}
                      <div>
                        <div className="text-2xl mb-2 text-primary">
                          {(() => { const icons = [HiUpload, HiDocumentSearch, HiDatabase, HiChartBar, HiClipboardCheck]; const Icon = icons[idx]; return <Icon />; })()}
                        </div>
                        <h3 className="text-text-main font-bold text-sm leading-snug">
                          {step.label}
                        </h3>
                      </div>

                      {/* Tech badge */}
                      <span
                        className={`${colors.badge} text-xs font-medium px-2 py-1 rounded-md w-fit`}
                      >
                        {step.badge}
                      </span>

                      {/* Description */}
                      <p className="text-text-muted text-xs leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Arrow between cards */}
                  {idx < pipelineSteps.length - 1 && (
                    <div className="flex items-center justify-center px-2 text-accent font-bold text-xl flex-shrink-0">
                      <HiArrowRight />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Info box */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 bg-code-bg border border-blue-200 rounded-xl px-6 py-5 flex items-start gap-4"
        >
          <HiInformationCircle className="text-code-text text-xl flex-shrink-0" />
          <p className="text-code-text text-sm leading-relaxed">
            Each stage is modular and independently testable. Stages 2–4 run in
            parallel for multi-document packages, reducing total processing time
            significantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pipeline;
