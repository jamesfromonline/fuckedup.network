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
        primary: "#FDE326",
        secondary: "#fa0076",
        rose: {
          50: "#fff0f8",
          100: "#ffe3f5",
          200: "#ffc6eb",
          300: "#ff98d8",
          400: "#ff58bc",
          500: "#ff279f",
          600: "#fa0076",
          700: "#df005d",
          800: "#b8004d",
          900: "#980343"
        }
      },
      keyframes: {
        pop: {
          "0%": {
            transform: "scale(0.92)"
          },
          "50%": {
            transform: "scale(.96)"
          },
          "100%": {
            transform: "scale(0.92)"
          }
        },
        fade: {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        }
      },
      animation: {
        pop: "pop 1.8s ease-in-out infinite",
        fade: "fade .3s ease-in-out"
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans]
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
