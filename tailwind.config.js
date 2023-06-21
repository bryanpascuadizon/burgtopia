/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        //GREY
        "grey-50": "#fafafa",
        "grey-100": "#f5f5f5",
        "grey-200": "#eeeeee",
        "grey-300": "#e0e0e0",
        "green-400": "#bdbdbd",
        "green-500": "#9e9e9e",
        //ORANGE
        "orange-50": "#fff3e0",
        "orange-100": "#ffe0b2",
        "orange-200": "#ffcc80",
        "orange-300": "#ffb74d",
        "orange-400": "#ffa726",
        "orange-500": "#ff9800",
      },
    },
    // screens: {
    //   xs: "400px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    // },
    screens: {
      sm: "320px",
      md: "375px",
      lg: "425px",
      xl: "768px",
      xxl: "1024px",
      xxxl: "1440px",
    },
  },
  plugins: [],
};
