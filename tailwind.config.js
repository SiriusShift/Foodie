/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'food-pattern': "url('./src/assets/abstract-white-background-with-elements-of-useful-food-vector 1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        shrikhand: ['"Shrikhand"', 'serif'],
      },
      colors: {
        'orangered': '#EE340D',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
      
    },
  },
  plugins: [],
}

