/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#fbfafa",
        accent: "#a28b65",
        neutral: {
          100: "#fbfafa",
          200: "#f5f5f5",
          300: "#e5e5e5",
          400: "#cbcac7",
          500: "#a19f96",
          600: "#6c6c6c",
          700: "#413f3d",
          800: "#2d2d2d",
          900: "#1a1a1a",
        },
        gold: "#a28b65",
        bronze: "#925d46",
        beige: "#cdc1ac",
        cream: "#c2ad9e",
        teal: "#6baecf",
      },
      fontFamily: {
        'cardinal': ['CardinalClassic', 'serif'],
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
