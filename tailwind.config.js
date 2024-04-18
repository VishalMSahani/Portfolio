/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "#F5FCFF",
      black: "#000",
      transparent: "#ffffff00",
      Purple: "#5E3BEE",
      Red: "#ff0000",
      DarkGrey: "#282938",
      Pink: "#E62872",
      NavyBlue: "#1C1E53",
      richblack: {
        5: "#F1F2FF",
        25: "#DBDDEA",
        50: "#C5C7D4",
        100: "#AFB2BF",
        200: "#999DAA",
        300: "#838894",
        400: "#6E727F",
        500: "#585D69",
        600: "#424854",
        700: "#2C333F",
        800: "#161D29",
        900: "#000814",
      },
    },
    extend: {
      maxWidth: {
        backgroundColor: {
          custom: "#300924",
        },
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [],
  darkMode: "class",
};