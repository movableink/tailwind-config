'use strict';

const fontFamily = {
  sans: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
  mono: ['"Source Code Pro"', 'Courier', 'monospace']
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
  '7xl': '2.566rem'
};

const fontWeight = {
  thin: 200,
  light: 300,
  normal: 400,
  semibold: 600,
  extrabold: 800
};

const letterSpacing = {
  '2xs': '-0.075rem',
  xs: '-0.0625rem',
  sm: '-0.03125rem',
  base: '0rem',
  md: '0.025em'
};

const lineHeight = {
  '2xs': 1,
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
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight
};
