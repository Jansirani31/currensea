

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["var(--font-space)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        chivo: ["var(--font-chivo)", "sans-serif"],
        mona: ["var(--font-mona)", "sans-serif"],
        geist:["var(--font-geist)","sans-serif"]

      },
    },
  },
  plugins: [],
};