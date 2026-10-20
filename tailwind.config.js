module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: "#E31E24", "brand-dark": "#B3121A", dark: "#14161A", gold: "#FFC20E", cream: "#FFF3D6" },
      maxWidth: { site: "1440px" },
      boxShadow: { card: "0 4px 18px rgba(20,22,26,0.08)" },
    },
  },
  plugins: [],
};
