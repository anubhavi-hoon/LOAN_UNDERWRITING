import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { demoFlags } from "../data/mockData.js";
import { HiDocumentText, HiChartBar, HiCheckCircle, HiPaperClip, HiExclamationCircle } from "react-icons/hi";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const files = [
  { id: "bank", label: "bank_statement_aug24.pdf" },
  { id: "salary", label: "salary_slip_sep24.pdf" },
  { id: "itr", label: "itr_fy24.pdf" },
];

const severityBorder = {
  HIGH: "border-danger",
  MEDIUM: "border-accent",
  LOW: "border-code-text",
};
const severityBadge = {
  HIGH: "bg-danger-light text-danger",
  MEDIUM: "bg-accent-light text-accent",
  LOW: "bg-code-bg text-code-text",
};
const overrideButtons = [
  { id: "approve", label: "Approve", activeClass: "bg-success text-white border-success", inactiveClass: "border-success text-success hover:bg-success-light" },
  { id: "reject", label: "Reject", activeClass: "bg-danger text-white border-danger", inactiveClass: "border-danger text-danger hover:bg-danger-light" },
  { id: "refer", label: "Refer", activeClass: "bg-accent text-white border-accent", inactiveClass: "border-accent text-accent hover:bg-accent-light" },
];

const processingSteps = [
  { id: 1, delay: 0, pending: "Classifying documents...", done: "Classified: 3 documents" },
  { id: 2, delay: 1200, pending: "Extracting structured fields...", done: "Extracted: JSON fields from all docs" },
  { id: 3, delay: 2400, pending: "Running risk analysis...", done: "Risk analysis complete" },
];

export function LiveDemo() {
  const [selected, setSelected] = useState([]);
  const [phase, setPhase] = useState("idle"); // idle | processing | results
  const [stepsDone, setStepsDone] = useState([]);
  const [overrideChoice, setOverrideChoice] = useState("refer");
  const [overrideReason, setOverrideReason] = useState("");
  const [toast, setToast] = useState(false);

  const toggleFile = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const loadAll = () => setSelected(files.map((f) => f.id));

  const runAnalysis = () => {
    if (selected.length === 0) return;
    setPhase("processing");
    setStepsDone([]);

    processingSteps.forEach((step) => {
      setTimeout(() => {
        setStepsDone((prev) => [...prev, step.id]);
      }, step.delay + 800);
    });

    setTimeout(() => {
      setPhase("results");
    }, 3800);
  };

  const reset = () => {
    setPhase("idle");
    setSelected([]);
    setStepsDone([]);
    setOverrideChoice("refer");
    setOverrideReason("");
  };

  const submitDecision = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3200);
  };

  return (
    <section id="demo" className="bg-bg py-24 relative">
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
            Live Demo
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
          Try It Yourself
        </motion.h2>

        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-text-muted text-lg mb-12 max-w-2xl"
        >
          Select documents and watch the AI pipeline process them in real time.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── LEFT PANEL ── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:w-2/5 bg-card rounded-2xl shadow-sm p-6 flex flex-col gap-6 border border-border-soft"
          >
            <h3 className="text-text-main font-bold text-base">
              Upload Documents
            </h3>

            {/* Drop zone */}
            <div className="border-2 border-dashed border-border-soft rounded-xl p-8 flex flex-col items-center gap-3 text-center bg-bg">
              <HiDocumentText className="text-4xl text-primary" />
              <p className="text-text-muted text-sm">
                Drag &amp; drop documents here or click to select
              </p>
            </div>

            {/* Pre-loaded file chips */}
            <div className="flex flex-col gap-3">
              <p className="text-text-muted text-xs font-medium uppercase tracking-wider">
                Pre-loaded Sample Files
              </p>
              {files.map((file) => {
                const active = selected.includes(file.id);
                return (
                  <button
                    key={file.id}
                    onClick={() => toggleFile(file.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "border-accent bg-accent-light text-accent"
                        : "border-border-soft bg-bg text-text-main hover:border-accent"
                    }`}
                  >
                    <span className="flex items-center gap-2"><HiDocumentText className="text-text-muted text-lg" /> {file.label}</span>
                    {active && <span className="text-accent font-bold">✓</span>}
                  </button>
                );
              })}
            </div>

            {/* Load all */}
            <button
              onClick={loadAll}
              className="text-accent text-sm font-medium hover:underline text-left"
            >
              or load sample borrower →
            </button>

            {/* File count */}
            <p className="text-text-muted text-sm">
              {selected.length} file{selected.length !== 1 ? "s" : ""} selected
            </p>

            {/* Run button */}
            <button
              onClick={runAnalysis}
              disabled={selected.length === 0 || phase === "processing"}
              className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                selected.length === 0 || phase === "processing"
                  ? "bg-border-soft text-text-muted cursor-not-allowed"
                  : "bg-accent text-white hover:bg-amber-600 shadow-md hover:shadow-lg"
              }`}
            >
              {phase === "processing" ? "Processing..." : "Run Analysis →"}
            </button>
          </motion.div>

          {/* ── RIGHT PANEL ── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:w-3/5 bg-card rounded-2xl shadow-sm p-6 border border-border-soft flex flex-col gap-6 min-h-[480px]"
          >
            {/* ── IDLE ── */}
            {phase === "idle" && (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-16">
                <HiChartBar className="text-5xl opacity-30 text-text-muted" />
                <p className="text-text-muted text-sm max-w-xs">
                  Select documents and click{" "}
                  <span className="font-semibold text-text-main">
                    Run Analysis
                  </span>{" "}
                  to see results here.
                </p>
              </div>
            )}

            {/* ── PROCESSING ── */}
            {phase === "processing" && (
              <div className="flex-1 flex flex-col justify-center gap-4 py-8">
                <h3 className="text-text-main font-bold text-base mb-2">
                  Processing Pipeline...
                </h3>
                {processingSteps.map((step) => {
                  const done = stepsDone.includes(step.id);
                  const active =
                    !done &&
                    (step.id === 1 ||
                      stepsDone.includes(step.id - 1));
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: step.delay / 1000 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium border ${
                        done
                          ? "bg-success-light border-success text-success"
                          : "bg-bg border-border-soft text-text-muted"
                      }`}
                    >
                      {done ? step.done : step.pending}
                      {!done && active && (
                        <span className="ml-auto">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="inline-block"
                          >
                            ⟳
                          </motion.span>
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* ── RESULTS ── */}
            {phase === "results" && (
              <div className="flex flex-col gap-5">
                {/* Decision badge */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="bg-accent text-white font-bold text-sm px-4 py-2 rounded-full">
                    REFER TO CREDIT COMMITTEE
                  </span>
                  <span className="text-text-muted text-sm font-medium">
                    Confidence:{" "}
                    <span className="text-text-main font-bold">74%</span>
                  </span>
                </div>

                {/* Evidence flags */}
                <div className="flex flex-col gap-3">
                  {demoFlags.map((flag) => (
                    <motion.div
                      key={flag.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: flag.id * 0.1 }}
                      className={`border-l-4 ${severityBorder[flag.severity]} bg-bg rounded-xl px-4 py-3 flex flex-col gap-1.5`}
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`${severityBadge[flag.severity]} text-xs font-bold px-2 py-0.5 rounded-md`}
                          >
                            {flag.severity}
                          </span>
                          <span className="text-text-main font-semibold text-sm">
                            {flag.title}
                          </span>
                        </div>
                        <span className="text-xs bg-code-bg text-code-text px-2 py-1 rounded-md font-medium">
                          {flag.citation}
                        </span>
                      </div>
                      <p className="text-text-muted text-xs leading-relaxed">
                        {flag.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Traceability note */}
                <p className="text-text-muted text-xs italic">
                  Every finding is traceable. No black boxes.
                </p>

                {/* Human Override panel */}
                <div className="bg-bg rounded-xl p-4 border border-border-soft flex flex-col gap-4">
                  <p className="text-text-main font-bold text-sm">
                    Underwriter Override
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    {overrideButtons.map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setOverrideChoice(btn.id)}
                        className={`border-2 font-semibold text-xs px-4 py-2 rounded-lg transition-all duration-150 ${
                          overrideChoice === btn.id
                            ? btn.activeClass
                            : btn.inactiveClass
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    placeholder="Reason for override (optional)"
                    value={overrideReason}
                    onChange={(e) => setOverrideReason(e.target.value)}
                    className="w-full border border-border-soft rounded-lg px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-accent bg-card"
                  />

                  <button
                    onClick={submitDecision}
                    className="w-full bg-accent text-white font-bold text-sm py-3 rounded-xl hover:bg-amber-600 transition-colors duration-200 shadow-md"
                  >
                    Submit Decision →
                  </button>
                </div>

                {/* Reset link */}
                <button
                  onClick={reset}
                  className="text-text-muted text-sm hover:text-accent transition-colors text-left"
                >
                  ↺ Run New Analysis
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-6 right-6 z-50 bg-success text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-semibold max-w-xs"
          >
            <HiCheckCircle className="text-2xl" />
            <span>Decision logged. Report exported as PDF.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default LiveDemo;
