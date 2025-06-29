/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // ← Vite index
    "./src/**/*.{js,ts,jsx,tsx}" // ← All your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
