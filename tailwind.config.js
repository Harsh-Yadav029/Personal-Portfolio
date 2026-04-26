/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        serif: ["Instrument Serif", "serif"],
      },
      colors: {
        bg: "#0a0a0a",
        surface: "#0f0f14",
        surface2: "#12121a",
        border: "#1e1e2e",
        accent: {
          green: "#6ee7b7",
          violet: "#a78bfa",
          pink: "#f472b6",
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};