/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marianBlue: "#1e3888",
        vermillion: "#ef3e36",
        verdigris: "#17bebb",
        vanilla: "#f3dfa2",
        babyPowder: "#fffffc",
      },
    },
  },
  plugins: [],
};
