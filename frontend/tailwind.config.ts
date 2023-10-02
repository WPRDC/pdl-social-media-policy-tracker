const colors = require("tailwindcss/colors");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-texture": "url('/bg_header.png')",
        "footer-texture": "url('/bg_footer.png')",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        rubik: ["var(--font-rubik)", "Arial", "sans-serif"],
        cooper: ["var(--cooper-hewitt)", "Arial", "sans-serif"],
      },
      boxShadow: {
        DEFAULT: "8px 8px 0 #4b5563",
      },
      colors: {
        primary: colors.cyan,
        secondary: colors.yellow,
        background: colors.neutral["100"],
        backgroundDark: colors.stone[900],
        focused: colors.cyan,
        error: colors.red,
        warning: colors.orange,
        text: colors.slate["700"],
        textDark: colors.slate["200"],
        textSecondary: "#404040",
        textSecondaryDark: "#a3a3a3",
        royal: "#003594",
        gold: "#FFB81C",
        black: "#000000",
        white: "#FFFFFF",
        charcoal: "#75787B",
        grey: "#e8e9ee",
        darkgrey: "#2b2b2b",
        lightgray: "#C8C9C7",
        mutedviolet: "#7C6992",
        plum: "#7E5475",
        deepteal: "#008264",
        orange: "#DC582A",
        deepblue: "#0081A6",
        neonyellow: "#EDE939",
        skyblue: "#71C5E8",
        lightorange: "#E87722",
        lightgreen: "#A4D65E",
        cream: "#D8C886",
        pittblue: "#3366ff",
      },
    },
  },
  plugins: [],
};
export default config;
