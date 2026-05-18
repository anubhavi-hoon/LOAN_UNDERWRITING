import { motion } from "framer-motion";
import {
  HiShieldCheck,
  HiLightningBolt,
  HiPuzzle,
  HiLockClosed,
} from "react-icons/hi";
import { enterpriseCards } from "../data/mockData.js";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconMap = {
  shield: HiShieldCheck,
  bolt: HiLightningBolt,
  puzzle: HiPuzzle,
  lock: HiLockClosed,
};

const borderMap = {
  success: "border-success",
  primary: "border-primary",
  accent: "border-accent",
  "code-text": "border-code-text",
};

const iconBgMap = {
  success: "bg-success-light text-success",
  primary: "bg-code-bg text-primary",
  accent: "bg-accent-light text-accent",
  "code-text": "bg-code-bg text-code-text",
};

export function Enterprise() {
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
            Enterprise Ready
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
          Built for Real Banks, Not Just Demos
        </motion.h2>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {enterpriseCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            const border = borderMap[card.border];
            const iconStyle = iconBgMap[card.border];
            return (
              <motion.div
                key={card.id}
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
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.10)" }}
                className={`bg-card border-l-4 ${border} rounded-xl p-6 shadow-sm flex flex-col gap-4 cursor-default`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconStyle}`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-text-main font-bold text-base">
                    {card.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2 ml-14">
                  {card.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                        ·
                      </span>
                      <span className="text-text-muted text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Roadmap strip */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-primary rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap"
        >
          <span className="text-accent font-bold text-sm flex-shrink-0">
            Roadmap →
          </span>
          <div className="flex flex-wrap gap-3 text-white text-sm">
            {[
              "v1: Prototype (Today)",
              "v2: Bureau Integration (CIBIL)",
              "v3: Auto-learning from overrides",
              "v4: Multi-bank SaaS",
            ].map((item, i, arr) => (
              <span key={i} className="flex items-center gap-3">
                <span>{item}</span>
                {i < arr.length - 1 && (
                  <span className="text-white opacity-30">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Enterprise;
