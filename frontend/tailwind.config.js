/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#3763E7",
          dark: "#1D52BF",
          light: "#86ADFF",
        },
        gray: {
          light: "#F3F4F6",
          lighter: "#879BB7",
          dark: "#4C5563",
          darker: "#1F2937",
        },
        white: "#fff",
        black: "#000",
        error: {
          primary: "#DC3545",
          secondary: "#F5EAC6",
        },
        warning: {
          primary: "#FFC107",
          secondary: "rgba(255, 193, 7, 0.2)",
        },
        success: {
          primary: "#28A745",
          secondary: "#CAE5D3",
        },
        background: {
          textbox: "rgba(0, 0, 0, 0.02)",
        },
      },
      fontSize: {
        h1: "40px",
        h2: "32px",
        h3: "28px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
        subtitle1: [
          "12px",
          {
            fontWeight: "400",
            lineHeight: "16px",
          },
        ],
        subtitle2: [
          "12px",
          {
            fontWeight: "600",
            lineHeight: "16px",
          },
        ],
        subtitle3: [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "20px",
          },
        ],
        subtitle4: [
          "14px",
          {
            fontWeight: "600",
            lineHeight: "20px",
          },
        ],
        subtitle5: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "20px",
          },
        ],
        subtitle6: [
          "16px",
          {
            fontWeight: "600",
            lineHeight: "20px",
          },
        ],
        subtitle7: [
          "18px",
          {
            fontWeight: "400",
            lineHeight: "24px",
          },
        ],
        subtitle8: [
          "18px",
          {
            fontWeight: "600",
            lineHeight: "24px",
          },
        ],
      },
      boxShadow: {
        small: "0px 1px 4px rgba(0, 0, 0, 0.1)",
        regular: "0px 4px 10px rgba(0, 0, 0, 0.12)",
        larger: "0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);",
      },
    },
  },
  plugins: [],
};
