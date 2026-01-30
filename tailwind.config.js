/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a0a0a",
          light: "#171717",
          dark: "#050505"
        },
        accent: {
          DEFAULT: "#d4af37", // Gold
          light: "#e5c558",
          dark: "#b39025"
        },
        surface: {
          DEFAULT: "#1a1a1a",
          light: "#262626"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
