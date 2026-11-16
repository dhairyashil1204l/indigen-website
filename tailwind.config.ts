import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0a1f44", 700: "#14408f" },
        electric: "#1f6bff",
        glow: "#22d3ee",
        mist: "#f3f5f9",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "Segoe UI", "sans-serif"],
        body: ["var(--font-plex)", "system-ui", "sans-serif"],
      },
      boxShadow: { cta: "0 8px 24px rgba(31,107,255,.35)" },
    },
  },
  plugins: [],
};
export default config;
