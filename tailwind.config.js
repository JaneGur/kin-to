/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c64f2",    // основной цвет для кнопок и фона
        secondary: "#7e3af2",  // вторичный цвет
        border: "#e5e7eb",     // границы
      },
      fontFamily: {
        devon: ['var(--font-devon)'],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
}
