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
          blue: '#e0f2fe',
          dark: '#0f172a',
          primary: '#0369a1',
          accent: '#0284c7'
        }
      }
    },
  },
  plugins: [],
}
