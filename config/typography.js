'use strict';

/**
 * Convert a number of pixels into the appropriate REM value
 *
 * @param {number} pixelSize
 * @return {string}
 */
function pxToRem(pixelSize) {
  return `${pixelSize / 16}rem`;
}

const fontFamily = {
  sans: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
  inter: ['"Inter"', 'sans-serif'],
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    'monospace',
  ],
};

const fontSize = {
  // Extra Config (for Fluid) TODO: Phase this out!
  '5xs': pxToRem(7),
  '4xs': pxToRem(8),
  '3xs': pxToRem(9),

  // Desired Config
  '2xs': pxToRem(11),
  xs: pxToRem(12),
  sm: pxToRem(14),
  base: pxToRem(16),
  lg: pxToRem(18),
  xl: pxToRem(20),
  '2xl': pxToRem(22),
  '3xl': pxToRem(25),
  '4xl': pxToRem(28),
  '5xl': pxToRem(32),
  '6xl': pxToRem(36),
  '7xl': pxToRem(41),

  // MUI Specific
  h6: pxToRem(20),
  h5: pxToRem(24),
  h4: pxToRem(34),
  h3: pxToRem(48),
  h2: pxToRem(60),
  h1: pxToRem(96),
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
