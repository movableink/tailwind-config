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

const { safelist, buildSafelist } = require('./utility/build-safelist');

/**
 * Configures Tailwind to use Fluid's design tokens
 */
module.exports = {
  content: [
    './stores/**/*.js',
    './plugins/*.js',
    './plugins/**/*.js',
  ],
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

  plugins: [
    fluidBasePlugin,
    bodyTextComponentsPlugin,
    captionTextComponentsPlugin,
    headingTextComponentsPlugin,
    buttonComponentsPlugin,
  ],
  // Tailwind > 3.0 requires JIT usage `safelist` is the only way to ensure our custom classes get built
  safelist: [
    ...safelist,
  ]
};
