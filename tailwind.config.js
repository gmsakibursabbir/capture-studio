/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primary: "#FC4308",
        "deep-red": "rgba(252, 67, 8, 0.80)",
        "main-dark": "#0E1513",
        "mid-green": "#0D1E20;",
        "light-green": "#313E2A;",
        "plain-green": "#323E2A;",
        "more-green": "#101815;",
        "dark-green": "#262D20;",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
