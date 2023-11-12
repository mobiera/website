/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/*.md", "./layouts/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      transparent: "#0000",
      black: "#000",
      white: "#fff",
      primary: {
        DEFAULT: "#515E81",
      },
      danger: "#f00",
      success: "#72C293",
      canceled: "#FF0303",
      purple: {
        100: "#D1DBF7",
        200: "#8353F2",
      },
      blue: {
        100: "#1924420E",
        200: "#192442",
      },
      green: "#50E2AA",
      error: "#dd4039",
      warning: "#fb9032",
    },
    extend: {
      fontFamily: {
        itc: "itc-avant-garde",
      },
    },
    fontSize: {
      "head-slide": ["3.375rem"],
      heading1: ["2.25rem"],
      heading2: ["1.5rem"],
      heading3: ["1.375rem"],
      heading4: ["1.125rem"],
      "body-medium": ["1rem"],
      "body-small": ["0.875rem"],
      caption: ["0.75rem"],
      button: ["1.125rem"],
      "alternative-button": ["0.875rem"],
    },
  },
  plugins: [],
};
