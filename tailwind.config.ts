import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#E8EBF0",
          100: "#C5CBd6",
          200: "#8E9AB0",
          300: "#5A6A88",
          400: "#334466",
          500: "#1B2A4A",
          600: "#152240",
          700: "#111A33",
          800: "#0C1226",
          900: "#070B19",
        },
        accent: {
          50: "#FFF4E5",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#F7941D",
          600: "#E8860F",
          700: "#D4750A",
          800: "#B86207",
          900: "#8C4A05",
        },
        teal: {
          50: "#E6F7F6",
          100: "#B3EBE8",
          200: "#80DFDA",
          300: "#4DD3CB",
          400: "#3BB8B2",
          500: "#2A9D97",
          600: "#228380",
          700: "#1A6966",
          800: "#134F4D",
          900: "#0B3533",
        },
        slate: {
          750: "#293548",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "scroll-left": "scroll-left 40s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
