/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ["Noto Sans", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      }
      
    },
  },
  plugins: [],
}