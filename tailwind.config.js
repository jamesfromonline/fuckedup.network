/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffff00",
        secondary: "#fa0076"
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  jit: true,
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }
  ]
}
