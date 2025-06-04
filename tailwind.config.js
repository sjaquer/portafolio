/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#09607C',
        secondary: '#074986',
        dark: '#1a1a1a',
        light: '#ffffff'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}