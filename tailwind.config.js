/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'one':'hsl(252, 100%, 67%)',
        'two':'hsl(241, 81%, 54%)',
        'three':'hsla(256, 72%, 46%, 1)',
        'four':'hsla(241, 72%, 46%, 0)',
        'fours':'hsla(241, 72%, 46%, 0)',
      }
    },
  },  
  plugins: [],
}