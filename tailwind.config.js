/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./standalone.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./padelsphere.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'brand-neon': '#BBE834',
        'brand-teal': '#2BBBAE',
      }
    },
  },
  plugins: [],
}
