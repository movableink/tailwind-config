'use strict';

const { ...colors } = require('./config/colors');
const {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} = require('./config/typography');
const fluidBasePlugin = require('./plugins/base');
const bodyTextComponentsPlugin = require('./plugins/components/body-text');
const captionTextComponentsPlugin = require('./plugins/components/caption-text');
const headingTextComponentsPlugin = require('./plugins/components/heading-text');
const buttonComponentsPlugin = require('./plugins/components/buttons');

const BORDER_COLOR_VARIANTS = [
  // Default
  'responsive',
  'hover',
  'focus',
  // Custom
  'disabled',
  'focus-within',
];

/**
 * Configures Tailwind to use Fluid's design tokens
 */
module.exports = {
  theme: {
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    screens: {},

    // External Plugin Config
    shadowOutline: {
      shadow: '0 0 0 2px',
      alpha: '1',
    },
    shadowOutlineColors: {
      blue: {
        200: colors.blue['200'],
      },
      red: {
        200: colors.red['200'],
      },
      orange: {
        200: colors.orange['200'],
      },
    },

    // Add to initial palette
    extend: {
      fill: colors,
      stroke: colors,
    },
  },
  variants: {
    borderColor: BORDER_COLOR_VARIANTS,

    // External Plugin Config
    shadowOutline: ['focus', 'focus-within'],
  },
  plugins: [
    fluidBasePlugin,
    bodyTextComponentsPlugin,
    captionTextComponentsPlugin,
    headingTextComponentsPlugin,
    buttonComponentsPlugin,

    // External Plugins
    require('tailwindcss-shadow-outline-colors')(),
  ],

  // Export constants used in configuration to enable extension
  BORDER_COLOR_VARIANTS,
};
