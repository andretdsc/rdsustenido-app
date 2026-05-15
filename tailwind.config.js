/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // Mantendo o branco como primário para o minimalismo
        accent: "#38bdf8", // Azul claro para destaques sutis
        dark: "#143a52", // O azul marinho profundo original do site
        darker: "#0d2b3e",
        light: "#f0f6fa",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
