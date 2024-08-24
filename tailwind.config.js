/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pri': '#C5705D',
        'sec': '#D0B8A8',
        'ter': '#DFD3C3',
        'qua': '#F8EDE3',
      },
    },
  },
  plugins: [],
}