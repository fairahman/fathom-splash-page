// import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        customNavColor: '#120b0b',
        navFontColor: '#ebcc34',
        heroColor: '#1f3357',
        demoColor: '#161c4d',
        //
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

