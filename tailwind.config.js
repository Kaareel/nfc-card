/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {bgColor: "#0d192b", textColor: "#8bacda", priceColor: "#00fff7", bgCard: "#14253d", colorBorder: "#2f415b", colorImg:"rgba(0,255,247,.6)"}
    },
    boxShadow: {
      '3xl': '0.9375rem 1.875rem #0c1727, -0.9375rem 1.875rem #0c1727;'
    }
  },
  plugins: [],
}

