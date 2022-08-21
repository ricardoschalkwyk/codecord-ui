/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        discord: {
          black: "#23272a",
          dark: "#202225",
          primary: "#36393f",
          secondary: "#2f3136",
          gray: "#99aab5",
          purple: "#5865f2",
          "light-gray": "#4f545c",
          green: "#3ba55d",
          white: "#dcddde",
          input: "#40444b",
          placeholder: "#72767d",
        },
      },
    },
    fontFamily: {
      "open-sans": ["'Open Sans', sans-serif"],
    },
  },
  plugins: [],
};
