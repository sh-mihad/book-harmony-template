/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primaryColor: "#23a6f0",
        secondaryColor: "#d9004e",
        textPrimaryColor:"#252b42",
        textSecondaryColor:"#737373"
      },
    },
  },
  plugins: [],
};
