/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DmSans': ["DM Sans", "sans-serif"],
      },
      colors: {
        'white': '#fff',
        'prime': '#262626',
        'secound': '#767676',
        'gray': '#979797'
      },
    },
  },
  plugins: [],
}