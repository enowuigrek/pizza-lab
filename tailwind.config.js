/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pizza: {
          red: '#DC2626',
          cream: '#FFFBEB',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
