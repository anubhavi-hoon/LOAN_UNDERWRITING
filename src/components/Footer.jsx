import { motion } from "framer-motion";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Results", href: "#results" },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white border-opacity-10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Left — Logo + tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-1">
              <span className="font-lora text-2xl font-bold text-white">
                UnderwriteAI
              </span>
              <span className="text-accent text-2xl leading-none">●</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Not a chatbot. An auditable AI co-pilot for regulated lending.
            </p>
          </div>

          {/* Center — Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
              Navigate
            </p>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-gray-400 text-sm hover:text-accent transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right — Hackathon badge */}
          <div className="flex flex-col gap-3 items-start md:items-end">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full">
              PS-08 · Hackathon 2025
            </span>
            <p className="text-gray-500 text-xs max-w-48 text-left md:text-right leading-relaxed">
              Built as a proof-of-concept for the loan underwriting automation
              problem statement.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            Built with Claude API · Python · Streamlit · React · Vite
          </p>
          <p className="text-gray-500 text-xs">© 2025 UnderwriteAI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
