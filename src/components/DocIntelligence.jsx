import { motion } from "framer-motion";
import { docTypes, extractionFlow } from "../data/mockData.js";
import { HiDocumentText, HiReceiptTax, HiCurrencyRupee, HiHome } from "react-icons/hi";

const docIconMap = {
  1: HiDocumentText,
  2: HiReceiptTax,
  3: HiCurrencyRupee,
  4: HiHome,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.1 },
  }),
};

const borderColorMap = {
  primary: "border-primary",
  success: "border-success",
  accent: "border-accent",
  "code-text": "border-code-text",
};

const badgeStyleMap = {
  code: "bg-code-bg text-code-text",
  accent: "bg-accent-light text-accent",
  success: "bg-success-light text-success",
};

export function DocIntelligence() {
  return (
    <section className="bg-bg py-24">
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
            Deep Dive · Stage 2 &amp; 3
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="font-lora text-4xl md:text-5xl font-bold text-text-main mb-14"
        >
          Document Intelligence Engine
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT — Document Types */}
          <div className="lg:w-5/12">
            <p className="text-text-main font-semibold text-sm uppercase tracking-wider mb-6">
              Supported Document Types
            </p>
            <div className="flex flex-col gap-4">
              {docTypes.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                  className={`bg-card border-l-4 ${borderColorMap[doc.border]} rounded-xl px-5 py-4 shadow-sm cursor-default`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {(() => { const Icon = docIconMap[doc.id]; return <Icon className="text-2xl text-primary" />; })()}
                    <h3 className="text-text-main font-bold text-sm">{doc.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-9">
                    {doc.extracts.map((e) => (
                      <span
                        key={e}
                        className="text-xs text-text-muted bg-border-soft rounded-full px-3 py-1"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-text-muted mt-2 ml-9 font-medium">
                    Extracts:
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Extraction Flow */}
          <div className="lg:w-7/12">
            <p className="text-text-main font-semibold text-sm uppercase tracking-wider mb-6">
              Extraction Flow
            </p>
            <div className="flex flex-col gap-0">
              {extractionFlow.map((step, i) => (
                <div key={step.id}>
                  <motion.div
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.45, ease: "easeOut", delay: i * 0.1 },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                    className="bg-card rounded-xl px-5 py-4 shadow-sm flex items-center gap-4 cursor-default"
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {step.id}
                    </div>

                    {/* Title + Description */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-text-main font-semibold text-sm">{step.title}</h4>
                      <p className="text-text-muted text-xs leading-relaxed mt-0.5">
                        {step.description}
                      </p>
                    </div>

                    {/* Badge */}
                    <span
                      className={`${badgeStyleMap[step.badgeStyle] || badgeStyleMap.code} text-xs font-medium px-3 py-1 rounded-md flex-shrink-0`}
                    >
                      {step.badge}
                    </span>
                  </motion.div>

                  {/* Connector */}
                  {i < extractionFlow.length - 1 && (
                    <div className="flex justify-center my-1">
                      <div className="w-px h-5 border-l-2 border-dashed border-border-soft" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocIntelligence;
