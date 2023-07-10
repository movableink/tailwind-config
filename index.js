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
const MuiTypographyComponentsPlugin = require('./plugins/components/mui-typography');
const buttonComponentsPlugin = require('./plugins/components/buttons');
const bannerComponentsPlugin = require('./plugins/components/banners');

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
  // Base Config
  theme: {
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    fill: {
      ...colors,
      current: 'currentColor',
    },
    stroke: {
      ...colors,
      current: 'currentColor',
    },
    screens: {},
  },

  // Additions to the Base Config (Added to default values)
  extend: {
    maxHeight: {
      modal: '90vh',
    },
    maxWidth: {
      container: '960px',
      'screen-xl': '1280px',
    },
  },

  variants: {
    borderColor: BORDER_COLOR_VARIANTS,
    visibility: ['responsive', 'group-hover'],
  },

  plugins: [
    fluidBasePlugin,
    bodyTextComponentsPlugin,
    captionTextComponentsPlugin,
    headingTextComponentsPlugin,
    buttonComponentsPlugin,
    bannerComponentsPlugin,
    MuiTypographyComponentsPlugin,
  ],

  // Export constants used in configuration to enable extension
  BORDER_COLOR_VARIANTS,
};
