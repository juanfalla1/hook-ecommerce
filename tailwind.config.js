module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#023048",
        secondary: "#00B4D8",
        accent: "#1FB4D8",
        light: "#f3f3f3",
        dark: "#333",
        terracotta: "#9bc7e2",
        success: "#80c7b0",
      },
    },
    fontFamily: {
      montserrat: ['"Montserrat"', 'sans-serif'],
      script: ['"Dancing Script"', 'cursive'],
    },
  },
  plugins: [],
};

