/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'main': ["'Josefin Sans', 'sans-serif'"],
    },
    extend: {
      colors:{
        'royal-blue': '#5956E9',
      }
    },
  },
  plugins: [],
}

