/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: '#f0fdfa', // teal-50
          dark: '#134e4a', // teal-900
          primary: '#0d9488', // teal-600
          accent: '#0f766e' // teal-700
        }
      }
    },
  },
  plugins: [],
}
