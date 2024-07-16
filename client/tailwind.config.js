/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        "color-1": "#7C5DFA",
        "color-2": "#9277FF",
        "color-3": "#1E2139",
        "color-4": "#252945",
        "color-5": "#DFE3FA",
        "color-6": "#888EB0",
        "color-7": "#7E88C3",
        "color-8": "#0C0E16",
        "color-9": "#EC5757",
        "color-10": "rgb(255, 151, 151)",
        "color-11": "#F8F8FB",
        "color-12": "#Ffff",
        "color-13": "#141625",
        "color-14": "#373B53",
        "color-15": "#494E6E",
        "color-16": "#F9FAFE",
        "color-17": "#979797",
        "color-paid": "#33D69F",
        "color-pending": "#FF8F00",
        "color-draft": "#373B53",

      },
      boxShadow: {
        custom: '0px -5px 30px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}