const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
      },
      spacing: {
        '2/3': '66.666667%',
        '5/6': '83.333333%',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
