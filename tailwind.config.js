/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': {'max': '959px'},
        // => @media (min-width: 576px) { ... }
  
        'laptop': '960px',
        // => @media (min-width: 960px) { ... }
  
        'pc': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        Monserrat: ["Monserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}