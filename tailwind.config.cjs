/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    // scan all JS/JSX/TS/TSX files in the project
    './**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: "class", // ✅ Important!
  theme: {
    extend: {
      fontFamily: {
        futuristic: ['"Orbitron", sans-serif'],
      },
      colors: {
        neon: {
          50: "#e8fff8",
          100: "#cafef3",
          500: "#00ffd5",
          600: "#00e6c7",
        },
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(120deg, rgba(58,12,163,0.6), rgba(0,183,255,0.4))",
      },
    },
  },
  plugins: [],
};
