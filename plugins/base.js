'use strict';

module.exports = function fluidTailwindPlugin({ addBase, theme }) {
  addBase({
    'html, body': {
      // Default to our normal text color
      color: theme('colors.neutral.900'),
      // Default to using our `sans` font family
      fontFamily: theme('fontFamily.sans').reduce((acc, font) => `${acc}, ${font}`),
      // Default to the "base" line height
      lineHeight: theme('lineHeight.base'),
    },

    'b, strong': {
      fontWeight: theme('fontWeight.bold'),
    },

    'input, textarea': {
      '&::placeholder': {
        color: theme('colors.neutral.500'),
      },
    },
  });
};
