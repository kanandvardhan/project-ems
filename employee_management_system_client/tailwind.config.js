/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    // screens: {
    //   "2xl": { max: "1535px" },
    //   // => @media (max-width: 1535px) { ... }

    //   xl: { max: "1279px" },
    //   // => @media (max-width: 1279px) { ... }

    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }

    // md: { max: "767px" },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { max: "639px" },
    //   // => @media (max-width: 639px) { ... }
    // },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        chambray: {
          600: "#3b5998",
        },
        cerulean: {
          500: "#00acee",
        },
        "deep-cerulean": {
          700: "#0072b1",
        },
        gray: {
          100: "#F8F8F8",
          200: "#E0E0E0",
          300: "#C8C8C8",
          400: "#888888",
          500: "#707070",
          600: "#505050",
          700: "#383838",
          800: "#282828",
          900: "#101010",
        },
        "mountain-meadow": {
          500: "#25d366",
        },
      },
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
