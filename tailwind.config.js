/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js.jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#74B38D",
        secondary: "#B3B3B3",
        third: "#757575",
        text: "#1e1e1e",
        chatbubble: "#f5f5f5",
        "gradient-end": "#CAE4D4",
      },
      spacing: {
        "frame-width": "calc(100vh * 390/844)",
        "ellipse-base": "calc(100% * 175/390)",
        "ellipse-sm": "calc(100% * 150/390)",
      },
      transitionProperty: {
        ellipse: "transform, opacity",
      },
      transitionDelay: {
        ellipse: "0.1s",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      fontSize: {
        largest: "calc(50rem/16)",
        large: "calc(25rem/16)",
        regular: "calc(15/16)rem",
      },
      fontWeight: {
        largest: "bold",
        large: "bold",
      },
    },
  },
  plugins: [],
};
