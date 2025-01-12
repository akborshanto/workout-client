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
        primary: '#007BFF',   // Blue
        secondary: '#333333', // Dark Grey
        accent: '#F0F0F0',    // Light Grey
      },
     
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),// Add daisyUI here,
  ],

}
