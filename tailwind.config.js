/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo2': "url('./src/assets/Logo2.png')",
      },
    },
  },
  plugins: [],
}

