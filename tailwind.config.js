/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/css/*.html"],
  theme: {
    fontFamily: {
      serif: ['Crimson Text', 'serif'],
      sans: ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: {
        herowine: "#92003B",
        herolight: "#FF7BE5",
      },
    },
  },
  plugins: [],
};
