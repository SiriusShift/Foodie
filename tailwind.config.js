/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'food-pattern': "url('/src/assets/abstract-white-background-with-elements-of-useful-food-vector 1.png')",
        'signup-pattern': "url('/src/assets/signup.jpeg')",
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
      },
      spacing: {
        '4.72': '4.72rem',
      }
    },
  },
  plugins: [],
}

