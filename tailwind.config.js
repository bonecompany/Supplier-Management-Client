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
        'rubberTreeDesktop': "url('./src/assets/Rubber-tree-destop.jpeg')",
        'rubberTreeMobile': "url('./src/assets/Rubber-tree-mobile.jpeg')",
      },
    },
  },
  plugins: [],
}

