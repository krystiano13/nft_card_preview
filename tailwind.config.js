/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        veryDarkBlue: {
          100: "hsl(217, 54%, 11%)",
          200: "hsl(216, 50%, 16%)",
          300: "hsl(215, 32%, 27%)"
        }
      },
      fontFamily: {
          outfit: "Outfit"
      }
    },
  },
  plugins: [],
}

