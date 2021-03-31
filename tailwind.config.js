const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray
      }
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
