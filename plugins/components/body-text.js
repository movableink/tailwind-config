'use strict';

module.exports = function bodyTextComponentsPlugin({ addComponents, theme }) {
  addComponents({
    '.body-xl': {
      fontSize: theme('fontSize.xl'),
      letterSpacing: theme('letterSpacing.sm'),
      lineHeight: theme('lineHeight.md')
    },

    '.body-lg': {
      fontSize: theme('fontSize.lg'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.base')
    },

    '.body-base': {
      fontSize: theme('fontSize.base'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.base')
    },

    '.body-sm': {
      fontSize: theme('fontSize.sm'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.sm')
    }
  });
};
