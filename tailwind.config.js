/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      width: {
        102: "24rem",
        103: "28rem"
      },
      height: {
        102: "42rem",
        103: "46rem"
      },
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        veryDarkBlue: {
          50:"hsl(215,57%,10%)",
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

