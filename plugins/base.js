'use strict';

module.exports = function fluidTailwindPlugin({ addBase, theme }) {
  addBase({
    'html, body': {
      // Default to our normal text color
      color: theme('colors.text.primary'),
      // Default to using our `sans` font family
      fontFamily: theme('fontFamily.inter'),
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
