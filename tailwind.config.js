/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C4A6E",
        accent: "#C9843A",
        "accent-light": "#FDF3E7",
        bg: "#F8F7F4",
        "bg-dark": "#1E2D3D",
        card: "#FFFFFF",
        "text-main": "#1A1A2E",
        "text-muted": "#6B7280",
        "border-soft": "#E2E1DC",
        danger: "#B94040",
        "danger-light": "#F5E6E6",
        success: "#2E6E4E",
        "success-light": "#EAF4ED",
        "code-bg": "#EBF2FA",
        "code-text": "#1E3A5F",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
