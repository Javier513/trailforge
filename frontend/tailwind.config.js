/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#351D14', // brown from logo
          light: '#DE994E', // orange from logo
          orange: '#DE994E', // orange (alias for light)
          bg: '#F5F2EB', // light background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming we will use Inter
      }
    },
  },
  plugins: [],
}
