import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#0A2016",
          900: "#0F2E1D",
          800: "#163D27",
          700: "#1C4A32",
          600: "#26603F",
        },
        brass: {
          400: "#D9B569",
          500: "#C9A24B",
          600: "#AC8637",
        },
        ivory: "#F3EFE6",
        sage: "#8FA795",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
