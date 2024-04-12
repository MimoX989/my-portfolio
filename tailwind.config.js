import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("tailwind-typewriter")({
      wordsets: {
        profession: {
          words: ["a Web Developer", "a Marketing Strategist", "an IT professional"],
          repeat: -1,
          writeSpeed: 0.3,
          eraseSpeed: 0.2,
          blinkSpeed: 0.8,
        },
      },
    }),
  ],
};
