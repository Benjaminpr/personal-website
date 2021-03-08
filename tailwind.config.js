module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily:{
      'title': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors:{
        royalblue: {
          '50':  '#f6fafd',
          '100': '#e8f4fd',
          '200': '#c9e0fb',
          '300': '#a8c7fb',
          '400': '#7b9afb',
          '500': '#5465ff',
          '600': '#3649f6',
          '700': '#2d3ae3',
          '800': '#242eb5',
          '900': '#1d268d',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}
