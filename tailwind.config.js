/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenbg': '#00FF00',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        baskervville: ['Baskervville SC', 'serif']
      },
    },

  },
  plugins: [],
}