/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00909E",
        secondary: "#222831",
        dark: "#264653",
        gray: "#DDE6ED",
        light: "#f8f8f8",
      },
      screens: {
        xs: "450px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
