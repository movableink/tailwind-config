'use strict';

module.exports = function fluidTailwindPlugin({ addBase, theme }) {
  addBase({
    html: {
      fontFamily: theme('fontFamily.sans').reduce((acc, font) => `${acc}, ${font}`),
      fontSize: '13px',
      fontWeight: '400'
    },

    'input, textarea': {
      '&::placeholder': {
        color: theme('colors.neutral.500')
      }
    }
  });
};
