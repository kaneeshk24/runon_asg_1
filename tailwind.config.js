/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        firebrick: "#a73418",
        gainsboro: "#d9d9d9",
        gray: {
          "100": "#848484",
          "200": "#232325",
        },
        darkslategray: "#323233",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "5xs": "8px",
      "3xs": "10px",
      sm: "14px",
      xs: "12px",
      xl: "20px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
