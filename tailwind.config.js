/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1200px",
        xl: "1400px",
      },
      boxShadow: {
        left: "0 35px 60px -15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
