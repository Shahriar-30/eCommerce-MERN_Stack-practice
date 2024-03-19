/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1440px',
      },
      fontFamily: {
        'DmSans': ["DM Sans", "sans-serif"],
      },
      colors: {
        'white': '#fff',
        'prime': '#262626',
        'secondary': '#767676',
        'gray': '#979797',
        'Bg': '#F5F5F3'
      },
    },
  },
  plugins: [],
}