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
        customNavColor: '#385c70',
        navFontColor: '#ebcc34'
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

