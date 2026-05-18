import { motion } from "framer-motion";
import {
  HiUpload,
  HiDocumentSearch,
  HiDatabase,
  HiChartBar,
  HiClipboardCheck,
} from "react-icons/hi";
import { pipelineSteps } from "../data/mockData.js";

const iconMap = {
  upload: HiUpload,
  classify: HiDocumentSearch,
  extract: HiDatabase,
  analyze: HiChartBar,
  report: HiClipboardCheck,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative bg-bg-dark min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16 w-full">
        {/* LEFT — Text */}
        <motion.div
          className="flex-1 lg:w-3/5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Label */}
          <motion.div variants={textVariants} className="mb-6">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              Hackathon · PS-08
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={textVariants}
            className="font-lora text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white block">Loan Underwriting</span>
            <span className="text-accent block">Co-Pilot</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textVariants}
            className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10"
          >
            Upload borrower documents. Get a structured, evidence-backed risk
            summary in under 3 minutes. Not a chatbot — an auditable AI pipeline
            built for regulated lending.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={() => scrollTo("#demo")}
              className="bg-accent text-white font-semibold px-8 py-3 rounded-full hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Try Live Demo
            </button>
            <button
              onClick={() => scrollTo("#how-it-works")}
              className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-bg-dark transition-all duration-200"
            >
              See How It Works →
            </button>
          </motion.div>

          {/* Micro-stat chips */}
          <motion.div
            variants={textVariants}
            className="flex flex-wrap gap-3"
          >
            {[
              { value: "< 3 min", label: "Processing time" },
              { value: "92%", label: "Extraction accuracy" },
              { value: "₹ < 5", label: "Cost per file" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full px-4 py-2"
              >
                <span className="text-accent font-bold text-sm">
                  {chip.value}
                </span>
                <span className="text-gray-300 text-xs">·</span>
                <span className="text-gray-300 text-xs">{chip.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Animated Pipeline */}
        <motion.div
          className="flex-1 lg:w-2/5 flex flex-col items-center gap-0 w-full max-w-sm mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pipelineSteps.map((step, idx) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div key={step.id} variants={cardVariants} className="w-full">
                <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl px-5 py-4 flex items-center gap-4 shadow-lg hover:bg-opacity-15 transition-all duration-200">
                  {/* Amber left border accent */}
                  <div className="absolute left-0 top-3 bottom-3 w-1 bg-accent rounded-r-full" />
                  <div className="ml-2 flex items-center justify-center w-9 h-9 rounded-lg bg-accent bg-opacity-20 text-accent flex-shrink-0">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">
                      {step.label}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5 truncate">
                      {step.badge}
                    </p>
                  </div>
                  <span className="text-accent font-bold text-lg opacity-60">
                    {idx + 1}
                  </span>
                </div>

                {/* Dashed connector */}
                {idx < pipelineSteps.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className="w-px h-5 border-l-2 border-dashed border-accent opacity-50" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
