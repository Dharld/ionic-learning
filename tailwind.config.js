const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: {
        100: "#d1e8b6",
        200: "#1a4848",
        300: "#5c941b",
        400: "#33691e",
      },
      neutral: {
        100: "#ffffff",
        200: "#f3faea",
        300: "#666666",
        400: "#333333",
      },
      transparent: "transparent",
      surface: "#F3F7EA",
    },

    fontFamily: {
      sans: ["Lexend", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      const keys = Object.keys(theme("colors"));
      keys.forEach((key) => {
        const value = theme(`colors.` + key);
        if (typeof value != "object") {
          addBase({
            ":root": {
              ["--" + key + "-color"]: value,
            },
          });
        } else {
          Object.keys(value).forEach((nestedKey) => {
            const index = `colors.${key}.${nestedKey}`;
            const nestedValue = theme(index);
            addBase({
              ":root": {
                ["--" + key + "-" + nestedKey]: nestedValue,
              },
            });
          });
        }
      });
    }),
  ],
};
