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
  important: true,
  theme: {
    colors,
    fill: colors,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    stroke: colors,
    screens: {}
  },
  plugins: [
    fluidBasePlugin,
    bodyTextComponentsPlugin,
    captionTextComponentsPlugin,
    headingTextComponentsPlugin
  ],
  corePlugins: {
    height: false,
    width: false
  }
};
