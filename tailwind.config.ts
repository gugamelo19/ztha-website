import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#4DB89E",
          dark:    "#3AA88E",
          light:   "#F0FAF7",
          border:  "#C8EDE4",
        },
        graphite: "#555F6B",
        dark: {
          DEFAULT: "#1A2236",
          mid:     "#4B5A72",
        },
        muted: "#6B7A93",
        site: {
          border: "#E8EBF0",
          bg:     "#F7F8FA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(36px, 5vw, 58px)", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-lg": ["clamp(28px, 4vw, 44px)", { lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-md": ["clamp(22px, 3vw, 32px)", { lineHeight: "1.2",  letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      animation: {
        "fade-up":   "fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "badge-pop": "badgePop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        badgePop: {
          from: { opacity: "0", transform: "scale(0.7)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
