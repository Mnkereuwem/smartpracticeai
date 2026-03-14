/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d9efff",
          200: "#b6e0ff",
          300: "#84caff",
          400: "#52afff",
          500: "#2b8cff",
          600: "#196af5",
          700: "#144fd1",
          800: "#1540a3",
          900: "#16387f",
          950: "#0f234d"
        }
      }
    }
  },
  plugins: []
};

