"use strict";

module.exports = function fluidTailwindPlugin({ addBase, theme }) {
  addBase({
    html: {
      fontFamily: "'Open Sans', 'Arial', sans-serif",
      fontSize: "13px",
      fontWeight: "400"
    },

    "input, textarea": {
      "&::placeholder": {
        color: theme("colors.neutral.500")
      }
    }
  });
};
