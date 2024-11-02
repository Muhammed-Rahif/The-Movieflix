import withMT from "@material-tailwind/react/utils/withMT";

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
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
      "red-500": "red",
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
        "7/8": "7 / 8",
      },
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
          DEFAULT: "0",
        },
      },
    },
  },
});
