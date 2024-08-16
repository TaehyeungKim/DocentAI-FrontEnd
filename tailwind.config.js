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
        icon: "calc(22rem/16)",
        "icon-sm": "calc(15rem/16)",
        "chat-input": "40px",
        "chat-vertical-padding": "calc(20px - 0.6rem)",
      },
      transitionProperty: {
        ellipse: "transform, opacity",
      },
      lineHeight: {
        chat: "1.2rem",
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
        "semi-large": "calc(18rem/16)",
        regular: "calc(15rem/16)",
      },
      fontWeight: {
        largest: "bold",
        large: "bold",
      },
      boxShadow: {
        "chat-header": `0px 3.5px 2.7px rgba(0, 0, 0, 0.016),
        0px 8.8px 6.9px rgba(0, 0, 0, 0.022),
        0px 17.9px 14.2px rgba(0, 0, 0, 0.028)
        `,
      },
      borderRadius: {
        "h-rounded": "50% 0",
      },
    },
  },
  plugins: [],
};
