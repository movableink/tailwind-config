'use strict';

const fontFamily = {
  sans: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
  mono: ['"Source Code Pro"', 'Courier', 'monospace']
};

const fontWeight = {
  thin: 200,
  light: 300,
  normal: 400,
  semibold: 600,
  extrabold: 800
};

const letterSpacing = {
  xxs: '-0.075rem',
  xs: '-0.0625rem',
  sm: '-0.03125rem',
  base: '0rem',
  md: '0.025em'
};

const lineHeight = {
  xxs: 1,
  xs: 1.25,
  sm: 1.5,
  base: 1.75,
  md: 2,
  lg: 2.25,
  xl: 2.5,
  '2xl': 2.75,
  '3xl': 3.5
};

module.exports = {
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight
};
