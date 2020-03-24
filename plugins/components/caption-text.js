'use strict';

module.exports = function captionTextComponentsPlugin({ addComponents, theme }) {
  addComponents({
    '.caption-lg': {
      fontSize: theme('fontSize.xs'),
      letterSpacing: theme('letterSpacing.md'),
      lineHeight: theme('lineHeight.xs'),
    },

    '.caption-sm': {
      fontSize: theme('fontSize.2xs'),
      letterSpacing: theme('letterSpacing.md'),
      lineHeight: theme('lineHeight.2xs'),
    },
  });
};
