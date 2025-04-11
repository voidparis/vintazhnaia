/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-black)",
        secondary: "var(--color-white)",
        accent: "var(--color-blue-primary)",
        neutral: {
          100: "var(--color-white)",
          200: "#f5f5f5",
          300: "#e5e5e5",
          400: "#cbcac7",
          500: "#a19f96",
          600: "#6c6c6c",
          700: "var(--color-dark-grey)",
          800: "#2d2d2d",
          900: "var(--color-black)",
        },
        blue: {
          light: "var(--color-blue-light)",
          medium: "var(--color-blue-medium)",
          primary: "var(--color-blue-primary)",
          dark: "var(--color-blue-dark)",
        },
        purple: {
          light: "var(--color-purple-light)",
          medium: "var(--color-purple-medium)",
          dark: "var(--color-purple-dark)",
        },
        pink: {
          light: "var(--color-pink-light)",
          medium: "var(--color-pink-medium)",
          primary: "var(--color-pink-primary)",
        },
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
