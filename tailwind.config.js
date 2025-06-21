/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#7c3aed",   // violet‑600
        secondary: "#0f172a", // slate‑900
        accent: "#38bdf8",    // sky‑400
      },
      keyframes: {
        bgShift: {
          "0%":   { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%":  { transform: "translate3d(0, -3%, 0) scale(1.05)" },
          "100%": { transform: "translate3d(0, 0, 0) scale(1)" },
        },
      },
      animation: {
        bgShift: "bgShift 12s linear infinite",
      },
    },
  },
  plugins: [],
};
