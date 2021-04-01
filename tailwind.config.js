const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '1/3-screen': '33.3vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
        '5/6-screen': '83.33vh'
      },
      colors: {
        gray: colors.trueGray
      },
    },
  },
  variants: {
    extend: {
      position: ['group-hover'],
      inset: ['group-hover'],
    },
  },
  plugins: [],
}
