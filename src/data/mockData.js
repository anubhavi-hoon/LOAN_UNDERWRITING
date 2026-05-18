// ─── Pipeline Steps (Hero + Pipeline sections) ───────────────────────────────
export const pipelineSteps = [
  {
    id: 1,
    icon: "upload",
    label: "Upload Docs",
    badge: "Streamlit UI",
    description:
      "PDFs, scanned images, Word docs accepted. Auto-named and queued.",
    color: "primary",
  },
  {
    id: 2,
    icon: "classify",
    label: "Classify",
    badge: "LLM + Regex",
    description:
      "Identifies doc type: Bank Stmt / ITR / Salary Slip / Property Doc.",
    color: "code-text",
  },
  {
    id: 3,
    icon: "extract",
    label: "Extract",
    badge: "OCR + Claude",
    description: "Type-specific prompts extract structured JSON per document.",
    color: "accent",
  },
  {
    id: 4,
    icon: "analyze",
    label: "Analyze",
    badge: "Claude Sonnet",
    description:
      "Computes FOIR, balance trends, flags anomalies with evidence citations.",
    color: "success",
  },
  {
    id: 5,
    icon: "report",
    label: "Risk Report",
    badge: "reportlab PDF",
    description:
      "Structured output: Approve / Reject / Refer + confidence + audit trail.",
    color: "danger",
  },
];

// ─── Problem Steps (Problem section) ──────────────────────────────────────────
export const problemSteps = [
  {
    id: 1,
    emoji: "📄",
    title: "Collect Documents",
    description:
      "Bank statements, ITRs, salary slips, property papers gathered manually from borrower.",
  },
  {
    id: 2,
    emoji: "🔍",
    title: "Manual Review",
    description:
      "Each document read page by page by the underwriter. No extraction, no structure.",
  },
  {
    id: 3,
    emoji: "🧠",
    title: "Mental Calculations",
    description:
      "FOIR, balance ratios, income trends computed by hand or basic spreadsheets.",
  },
  {
    id: 4,
    emoji: "⚖️",
    title: "Subjective Judgment",
    description:
      "Final call varies by underwriter experience, mood, and internal bias.",
  },
  {
    id: 5,
    emoji: "📝",
    title: "Write Risk Summary",
    description:
      "Hours to produce a single risk report. No audit trail, no citations.",
  },
];

// ─── Document Types (DocIntelligence section) ─────────────────────────────────
export const docTypes = [
  {
    id: 1,
    emoji: "📄",
    title: "Bank Statement",
    border: "primary",
    extracts: [
      "Avg balance",
      "Credits & debits",
      "EMI hits",
      "ECS bounces",
    ],
  },
  {
    id: 2,
    emoji: "🧾",
    title: "ITR / Form 16",
    border: "success",
    extracts: [
      "Declared income",
      "Tax paid",
      "Consistency YoY",
    ],
  },
  {
    id: 3,
    emoji: "💰",
    title: "Salary Slip",
    border: "accent",
    extracts: [
      "Net salary",
      "Deductions",
      "Employer name",
      "Stability",
    ],
  },
  {
    id: 4,
    emoji: "🏠",
    title: "Property Doc",
    border: "code-text",
    extracts: [
      "Valuation",
      "Ownership chain",
      "Encumbrance status",
    ],
  },
];

// ─── Extraction Flow (DocIntelligence section) ────────────────────────────────
export const extractionFlow = [
  {
    id: 1,
    title: "PDF parsed to raw text",
    description: "Binary document converted to searchable text layer.",
    badge: "OCR Engine",
    badgeStyle: "code",
  },
  {
    id: 2,
    title: "Doc type identified",
    description: "Classifier determines document category from structure & keywords.",
    badge: "LLM Classifier",
    badgeStyle: "code",
  },
  {
    id: 3,
    title: "Type-specific prompt fired",
    description: "Targeted extraction prompt tailored to the identified document type.",
    badge: "Claude Sonnet",
    badgeStyle: "accent",
  },
  {
    id: 4,
    title: "Structured JSON returned",
    description: "Model responds with a clean, schema-conforming JSON object.",
    badge: "JSON Mode",
    badgeStyle: "code",
  },
  {
    id: 5,
    title: "Fields validated & stored",
    description: "Output validated against Pydantic schema; stored for downstream analysis.",
    badge: "Pydantic Schema",
    badgeStyle: "success",
  },
];

// ─── Financial Features (FeatureEngine section) ───────────────────────────────
export const features = [
  {
    id: 1,
    short: "FOIR",
    name: "Fixed Obligation to Income Ratio",
    formula: "Total EMIs ÷ Net Monthly Income",
    threshold: "> 50% = High Risk",
    badgeStyle: "danger",
    color: "danger",
  },
  {
    id: 2,
    short: "Avg Balance Trend",
    name: "3-Month Rolling Average",
    formula: "Mean(last 3mo) vs Mean(prior 3)",
    threshold: "< −20% = Warning",
    badgeStyle: "accent",
    color: "accent",
  },
  {
    id: 3,
    short: "Income Stability",
    name: "Coefficient of Variation",
    formula: "Std Dev ÷ Mean × 100",
    threshold: "> 30% = Unstable",
    badgeStyle: "accent",
    color: "accent",
  },
  {
    id: 4,
    short: "Bounce Rate",
    name: "ECS/NACH Frequency",
    formula: "Bounced debits ÷ Total debits",
    threshold: "> 2/month = Red Flag",
    badgeStyle: "danger",
    color: "danger",
  },
  {
    id: 5,
    short: "Doc Consistency",
    name: "Cross-source Check",
    formula: "|Salary slip − Bank credits|",
    threshold: "> 15% = Discrepancy",
    badgeStyle: "success",
    color: "success",
  },
  {
    id: 6,
    short: "Loan Exposure",
    name: "Existing Obligations",
    formula: "Sum of all identified EMIs",
    threshold: "vs declared income",
    badgeStyle: "code",
    color: "code-text",
  },
];

// ─── Demo Flags (LiveDemo section) ────────────────────────────────────────────
export const demoFlags = [
  {
    id: 1,
    severity: "HIGH",
    title: "Income Discrepancy",
    detail:
      "Salary slip: ₹82,000/mo · Bank credits: ₹54,200/mo — 34% gap exceeds threshold.",
    citation: "Salary Slip p.1 + Bank Stmt p.3",
    severityStyle: "danger",
  },
  {
    id: 2,
    severity: "HIGH",
    title: "Balance Deterioration",
    detail:
      "Average balance fell 38% over the last 3 months. Trend is consistently negative.",
    citation: "Bank Statement, Pages 4–6",
    severityStyle: "danger",
  },
  {
    id: 3,
    severity: "MEDIUM",
    title: "FOIR: 61%",
    detail:
      "Monthly obligations ₹33,120 vs net income ₹54,200. Exceeds the 50% safe threshold.",
    citation: "Computed from Bank Stmt + ITR",
    severityStyle: "accent",
  },
  {
    id: 4,
    severity: "LOW",
    title: "1 ECS Bounce",
    detail:
      "August 2024 — HDFC Home Loan EMI returned unpaid. Single occurrence noted.",
    citation: "Bank Statement, Page 5",
    severityStyle: "code-text",
  },
];

// ─── Comparison Table (Results section) ──────────────────────────────────────
export const comparisonTable = [
  {
    metric: "Processing Time",
    manual: "3–7 days",
    ai: "< 3 minutes",
  },
  {
    metric: "Cost per File",
    manual: "₹800–2,000",
    ai: "₹5–15",
  },
  {
    metric: "Consistency",
    manual: "Varies by person",
    ai: "Deterministic",
  },
  {
    metric: "Audit Trail",
    manual: "None",
    ai: "Full PDF log",
  },
  {
    metric: "Fraud Detection",
    manual: "~65% catch rate",
    ai: "Cross-validated",
  },
];

// ─── Enterprise Cards (Enterprise section) ────────────────────────────────────
export const enterpriseCards = [
  {
    id: 1,
    icon: "shield",
    title: "Regulatory Compliance",
    border: "success",
    bullets: [
      "Every decision has a full evidence trail",
      "Supports RBI explainability mandate",
      "Human override logged with reason code",
    ],
  },
  {
    id: 2,
    icon: "bolt",
    title: "API-Ready Architecture",
    border: "primary",
    bullets: [
      "FastAPI backend, REST endpoints",
      "Plugs into existing LOS systems",
      "JSON output schema: versioned & stable",
    ],
  },
  {
    id: 3,
    icon: "puzzle",
    title: "Modular & Extensible",
    border: "accent",
    bullets: [
      "Add new doc types in < 1 day",
      "Swap LLM provider without code changes",
      "Feature flags per bank's risk policy",
    ],
  },
  {
    id: 4,
    icon: "lock",
    title: "Data Security",
    border: "code-text",
    bullets: [
      "Documents processed in-memory, not stored",
      "API keys via environment secrets",
      "No PII logged in plain text",
    ],
  },
];

// ─── Tech Stack (TechStack section) ──────────────────────────────────────────
export const techStack = [
  "Python",
  "Claude API (Sonnet)",
  "OCR Engine",
  "Streamlit",
  "FastAPI",
  "Pandas",
  "Pydantic",
  "reportlab",
  "PyMuPDF",
  "React",
  "Vite",
  "Tailwind CSS",
];

// ─── Performance Metrics (Results section) ───────────────────────────────────
export const metrics = [
  {
    value: "< 3 min",
    label: "End-to-end processing time",
    border: "primary",
  },
  {
    value: "92%",
    label: "Field extraction accuracy",
    border: "success",
  },
  {
    value: "100%",
    label: "Income discrepancy detection",
    border: "accent",
  },
  {
    value: "₹ < 5",
    label: "AI compute cost per file",
    border: "code-text",
  },
];
