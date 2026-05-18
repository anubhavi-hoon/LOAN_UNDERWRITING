import { motion } from "framer-motion";
import { problemSteps } from "../data/mockData.js";
import { HiDocumentText, HiSearch, HiLightBulb, HiScale, HiPencilAlt, HiExclamationCircle, HiArrowRight, HiArrowDown } from "react-icons/hi";

const problemIconMap = {
  1: HiDocumentText,
  2: HiSearch,
  3: HiLightBulb,
  4: HiScale,
  5: HiPencilAlt,
};

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

export function Problem() {
  return (
    <section id="how-it-works" className="bg-bg py-24">
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
            The Problem
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
          How Underwriting Works Today —{" "}
          <span className="text-danger">And Why It's Broken</span>
        </motion.h2>

        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-text-muted text-lg mb-14 max-w-2xl"
        >
          A 5-step manual process that takes days, costs thousands, and varies
          by person.
        </motion.p>

        {/* Cards row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {problemSteps.map((step, idx) => (
            <div
              key={step.id}
              className="flex flex-col lg:flex-row items-center flex-1"
            >
              <motion.div
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.10)" }}
                className="bg-card border-t-4 border-primary rounded-xl shadow-sm p-6 flex flex-col items-start gap-3 w-full cursor-default"
              >
                {(() => { const Icon = problemIconMap[step.id]; return <Icon className="text-4xl text-primary" />; })()}
                <h3 className="text-text-main font-bold text-base">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between cards */}
              {idx < problemSteps.length - 1 && (
                <div className="flex items-center justify-center px-2 py-3 lg:py-0 text-accent font-bold text-2xl flex-shrink-0">
                  <HiArrowRight className="hidden lg:block" />
                  <HiArrowDown className="lg:hidden" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Callout box */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 bg-danger-light border-l-4 border-danger rounded-xl px-6 py-5 flex items-start gap-4"
        >
          <HiExclamationCircle className="text-danger text-2xl flex-shrink-0" />
          <p className="text-danger font-medium text-sm leading-relaxed">
            This process takes{" "}
            <strong>3–7 days per application</strong>, costs banks{" "}
            <strong>₹800–₹2,000 per file</strong>, and produces{" "}
            <strong>inconsistent results</strong> across underwriters. The same
            borrower file can receive different decisions on different days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Problem;
