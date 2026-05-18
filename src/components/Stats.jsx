import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiLibrary, HiTrendingUp } from "react-icons/hi";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ value, label, sub, bgClass, textClass, countTarget, started }) {
  const count = useCountUp(countTarget || 0, 1600, started && !!countTarget);
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.18)" }}
      className={`${bgClass} rounded-2xl p-8 flex flex-col gap-3 cursor-default`}
    >
      <p className={`font-lora text-5xl font-bold ${textClass}`}>
        {countTarget ? (countTarget === 22 ? `₹${count}L Cr` : `${count}%`) : value}
      </p>
      <p className={`font-semibold text-sm ${textClass} opacity-80`}>{label}</p>
      {sub && <p className={`text-xs ${textClass} opacity-60`}>{sub}</p>}
    </motion.div>
  );
}

export function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="bg-bg-dark py-24">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Label */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-4"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            The Stakes
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
          A Market Too Large to Leave Broken
        </motion.h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            countTarget={22}
            label="Outstanding bank credit in India"
            sub="RBI Annual Report 2024"
            bgClass="bg-primary"
            textClass="text-white"
            started={started}
          />
          <StatCard
            value="~3–7 Days"
            label="Average manual underwriting time"
            sub="Per loan application"
            bgClass="bg-card"
            textClass="text-text-main"
            started={started}
          />
          <StatCard
            countTarget={30}
            label="Applications rejected due to data gaps"
            sub="Not actual risk — BCG India 2023"
            bgClass="bg-danger-light"
            textClass="text-danger"
            started={started}
          />
        </div>

        {/* Insight rows */}
        <div className="flex flex-col gap-4">
          {[
            {
              Icon: HiLibrary,
              text: "India has 1,500+ NBFCs and 12 major PSU banks — each processing thousands of loan applications monthly with largely manual underwriting workflows.",
            },
            {
              Icon: HiTrendingUp,
              text: "Digital lending market projected to reach $1.3 trillion by 2030. The primary bottleneck holding it back is underwriting speed and consistency.",
            },
          ].map(({ Icon, text }, i) => (
            <motion.div
              key={i}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-card rounded-xl px-6 py-5 flex items-start gap-5 shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-code-bg flex items-center justify-center">
                <Icon className="text-primary w-5 h-5" />
              </div>
              <p className="text-text-main text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Source footnote */}
        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-gray-500 text-xs mt-8"
        >
          Sources: RBI Annual Report 2024, BCG India Lending Study 2023
        </motion.p>
      </div>
    </section>
  );
}

export default Stats;
