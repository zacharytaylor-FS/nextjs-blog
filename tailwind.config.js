// tailwind.config
const {nextui} = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  themes: {
    light: {
      layout: {},
      color: {}
    },
    dark: {
      layout: {},
      color: {}
    },
  },
  darkMode: 'class',
  plugins: [nextui(), require('@tailwindcss/typography'),],
}
