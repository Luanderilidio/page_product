/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Crimson: ["Crimson Pro", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
