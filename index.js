'use strict';

const { ...colors } = require('./config/colors');
const {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight
} = require('./config/typography');
const fluidBasePlugin = require('./plugins/base');
const bodyTextComponentsPlugin = require('./plugins/components/body-text');
const captionTextComponentsPlugin = require('./plugins/components/caption-text');
const headingTextComponentsPlugin = require('./plugins/components/heading-text');

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
    extend: {
      fill: colors,
      stroke: colors
    }
  },
  plugins: [
    fluidBasePlugin,
    bodyTextComponentsPlugin,
    captionTextComponentsPlugin,
    headingTextComponentsPlugin
  ]
};
