// const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.(js,ts,tsx,jsx)',
      './components/**/*.(js,ts,tsx,jsx)'
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px'
      }
    },
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
      'print': {'raw': 'print'},
      'portrait': {'raw': '(orientation: portrait)'},
    },
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2',
    },
    fontfamily: {
      sans: ['NotoSans'],
      light: ['NotoSans'],
      bold: ['NotoSans']
    }
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
    },
  },
  plugins: [],
}
