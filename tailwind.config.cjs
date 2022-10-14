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
      transparent: 'transparent',
      white: {
        000: '#FFFFFF'
      },
      pink: {
        100: '#FFF1F2',
        200: '#FFE4E6',
        300: '#FECDD3',
        400: '#FDA4AF',
        700: '#BE123C',
        800: '#9F1239',
        900: '#881337',
      },
      gray: {
        700: '#7C7C8A'
      },
      black: {
        000: '#000000',
        800: '#202024',
        900: '#121214',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Raleway, sans-serif',
      }
    },
  },
  plugins: [],
}
