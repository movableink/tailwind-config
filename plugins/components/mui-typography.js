'use strict';

module.exports = function MuiTypographyComponentsPlugin({ addComponents, theme }) {
  addComponents({
    h1: {
      fontSize: theme('fontSize.h1'),
      letterSpacing: theme('letterSpacing.2xs'),
      lineHeight: '120%',
    },
    h2: {
      fontSize: theme('fontSize.h2'),
      letterSpacing: theme('letterSpacing.2xs'),
      lineHeight: '120%',
    },
    h3: {
      fontSize: theme('fontSize.h3'),
      letterSpacing: theme('letterSpacing.xs'),
      lineHeight: '120%',
    },
    h4: {
      fontSize: theme('fontSize.h4'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: '120%',
    },
    h5: {
      fontSize: theme('fontSize.h5'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: '120%',
    },
    h6: {
      fontSize: theme('fontSize.h6'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: '120%',
    },
    '.subtitle1': {
      fontSize: theme('fontSize.base'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.base'),
    },
    '.subtitle2': {
      fontSize: theme('fontSize.xs'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.xs'),
    },
    '.body1': {
      fontSize: theme('fontSize.base'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.base'),
    },
    '.body2': {
      fontSize: theme('fontSize.sm'),
      letterSpacing: theme('letterSpacing.base'),
      lineHeight: theme('lineHeight.sm'),
    },
    '.caption': {
      fontSize: theme('fontSize.xs'),
      letterSpacing: theme('letterSpacing.md'),
      lineHeight: theme('lineHeight.2xs'),
    },
    '.overline': {
      fontSize: theme('fontSize.xs'),
      textTransform: 'uppercase',
      letterSpacing: theme('letterSpacing.md'),
      lineHeight: theme('lineHeight.xs'),
    },
  });
};
