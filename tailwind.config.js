/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dat-blue": "#465D98",
      "dat-olive": "#ADC698",
      "dat-red": "#EB5160",
      "dat-black": "#071013",
      "dat-white": "#F8F8FF",
    },
    extend: {
      colors: {
        "dat-blue": "#465D98",
        "dat-olive": "#ADC698",
        "dat-red": "#EB5160",
        "dat-black": "#071013",
        "dat-white": "#F8F8FF",
      },
    },
  },
  plugins: [],
}

