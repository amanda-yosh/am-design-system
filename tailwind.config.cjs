/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      'pink-100': '#FFF1F2',
      'pink-200': '#FFE4E6',
      'pink-300': '#FECDD3',
      'pink-400': '#FDA4AF',
      'pink-800': '#9F1239',
      'pink-900': '#881337',
      'gray-700': '#7C7C8A',
      'black-800': '#202024',
      'black-900': '#121214',
    },
    extend: {
      fontFamily: {
        sans: 'Raleway, sans-serif',
      }
    },
  },
  plugins: [],
}
