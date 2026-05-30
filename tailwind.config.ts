import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#E84B2A",
          "orange-dark": "#d4411f",
        },
      },
      transitionDuration: {
        350: "350ms",
      },
    },
  },
  plugins: [],
};

export default config;