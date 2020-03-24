'use strict';

module.exports = function headingTextComponentsPlugin({ addComponents, theme }) {
  addComponents({
    '.heading-2xl': {
      fontSize: theme('fontSize.7xl'),
      letterSpacing: theme('letterSpacing.2xs'),
      lineHeight: theme('lineHeight.3xl'),
    },

    '.heading-xl': {
      fontSize: theme('fontSize.6xl'),
      letterSpacing: theme('letterSpacing.xs'),
      lineHeight: theme('lineHeight.2xl'),
    },

    '.heading-lg': {
      fontSize: theme('fontSize.5xl'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.xl'),
    },

    '.heading-md': {
      fontSize: theme('fontSize.4xl'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.lg'),
    },

    '.heading-sm': {
      fontSize: theme('fontSize.3xl'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.lg'),
    },

    '.heading-xs': {
      fontSize: theme('fontSize.2xl'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.base'),
    },
  });
};
