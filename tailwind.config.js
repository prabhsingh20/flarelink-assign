/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        1: "#f4a226",
        2: "#e5771f",
        3: "#5a3e2b",
      },
      fontFamily: {
        Monoton: ["Monoton", " sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
