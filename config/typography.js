'use strict';

const fontFamily = {
  sans: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
  mono: ['"Source Code Pro"', 'Courier', 'monospace'],
};

const fontSize = {
  '2xs': '0.702rem',
  xs: '0.79rem',
  sm: '0.889rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.266rem',
  '2xl': '1.424rem',
  '3xl': '1.602rem',
  '4xl': '1.802rem',
  '5xl': '2.027rem',
  '6xl': '2.281rem',
  '7xl': '2.566rem',
};

const fontWeight = {
  normal: 400,
  bold: 600,
};

const letterSpacing = {
  '2xs': '-0.075rem',
  xs: '-0.0625rem',
  sm: '-0.03125rem',
  base: '0rem',
  md: '0.025em',
};

const lineHeight = {
  none: 1,
  '2xs': '1rem',
  xs: '1.25rem',
  sm: '1.5rem',
  base: '1.75rem',
  md: '2rem',
  lg: '2.25rem',
  xl: '2.5rem',
  '2xl': '2.75rem',
  '3xl': '3.5rem',
};

module.exports = {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
};
