import { motion } from "framer-motion";
import { features } from "../data/mockData.js";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const stripColorMap = {
  danger: "bg-danger",
  accent: "bg-accent",
  success: "bg-success",
  "code-text": "bg-code-text",
  primary: "bg-primary",
};

const badgeMap = {
  danger: "bg-danger-light text-danger",
  accent: "bg-accent-light text-accent",
  success: "bg-success-light text-success",
  code: "bg-code-bg text-code-text",
};

export function FeatureEngine() {
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
            Financial Intelligence
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
          Risk Feature Engine
        </motion.h2>

        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-text-muted text-lg mb-14 max-w-2xl"
        >
          6 computed metrics that power every risk recommendation — each with a
          clear formula and threshold.
        </motion.p>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const strip = stripColorMap[feat.color] || "bg-primary";
            const badge = badgeMap[feat.badgeStyle] || badgeMap.code;
            return (
              <motion.div
                key={feat.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.10)" }}
                className="bg-card rounded-xl shadow-sm overflow-hidden flex flex-col cursor-default"
              >
                {/* Colored top strip */}
                <div className={`${strip} h-2 w-full`} />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Feature short name */}
                  <h3 className="text-text-main font-bold text-lg leading-tight">
                    {feat.short}
                  </h3>

                  {/* Full name italic */}
                  <p className="text-text-muted text-sm italic -mt-2">
                    {feat.name}
                  </p>

                  {/* Divider */}
                  <hr className="border-border-soft" />

                  {/* Formula */}
                  <div className="bg-code-bg rounded-lg px-3 py-2">
                    <code className="font-mono text-code-text text-xs leading-relaxed">
                      {feat.formula}
                    </code>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Threshold badge */}
                  <span
                    className={`${badge} text-xs font-semibold px-3 py-1.5 rounded-lg w-fit`}
                  >
                    {feat.threshold}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureEngine;
