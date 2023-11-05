/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        100: "25rem",
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      lineHeight: {
        50: "5rem",
        
      },
      colors: {
        custom: "#B59457",
        custom1: "#F6F6F6",
      },

     
    },
  },
  variants: {},
  plugins: [],
};


