import { motion } from "framer-motion";
import { metrics, comparisonTable } from "../data/mockData.js";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const borderMap = {
  primary: "border-primary",
  success: "border-success",
  accent: "border-accent",
  "code-text": "border-code-text",
};

export function Results() {
  return (
    <section id="results" className="bg-bg-dark py-24">
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
            Performance
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="font-lora text-4xl md:text-5xl font-bold text-white mb-14"
        >
          Results on Simulated Dataset
        </motion.h2>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: i * 0.1 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.25)" }}
              className={`bg-white bg-opacity-5 border-t-4 ${borderMap[m.border]} rounded-xl p-6 flex flex-col gap-2 cursor-default`}
            >
              <p className="font-lora text-3xl md:text-4xl font-bold text-white">
                {m.value}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Before vs After Table */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-white border-opacity-10"
        >
          {/* Table header */}
          <div className="grid grid-cols-3">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-bold text-sm">Metric</p>
            </div>
            <div className="bg-danger px-6 py-4">
              <p className="text-white font-bold text-sm">Manual Process</p>
            </div>
            <div className="bg-success px-6 py-4">
              <p className="text-white font-bold text-sm">UnderwriteAI</p>
            </div>
          </div>

          {/* Table rows */}
          {comparisonTable.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 ${
                i % 2 === 0 ? "bg-white bg-opacity-5" : "bg-white bg-opacity-10"
              }`}
            >
              <div className="px-6 py-4 border-b border-white border-opacity-5">
                <p className="text-white font-medium text-sm">{row.metric}</p>
              </div>
              <div className="px-6 py-4 border-b border-white border-opacity-5">
                <p className="text-danger text-sm font-medium">{row.manual}</p>
              </div>
              <div className="px-6 py-4 border-b border-white border-opacity-5">
                <p className="text-success text-sm font-medium">
                  ✓ {row.ai}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Results;
