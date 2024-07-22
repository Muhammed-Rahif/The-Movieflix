const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      ...colors,
      primary: "red",
      secondary: "#333333",
      accent: "#222",
      neutral: "#ffffff",
      "base-100": "#0a0a0a",
      info: "#38bdf8",
      success: "#00ff00",
      warning: "#fde047",
      error: "#dc2626",
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    extend: {
      // https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/
      animation: {
        marquee: "marquee 36s linear infinite",
        marquee2: "marquee2 36s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
});
