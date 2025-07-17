/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#E5E7EB",
        success: "#22C55E",
        warning: "#FACC15",
        danger: "#EF4444",
        gray: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
