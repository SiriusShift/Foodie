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
        'signup-pattern': "url('/src/assets/signup.webp')",
        'login-pattern': "url('/src/assets/signin.webp')",
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
        '26': '6.47rem',
      }
    },
  },
  plugins: [],
}

