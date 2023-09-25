/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { max: "375px" },

        tablet: { max: "959px" },

        laptop: "960px",

        pc: "1440px",
      },
      fontFamily: {
        Monserrat: ["Monserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};