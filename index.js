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
    fill: colors,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    stroke: colors
  },
  variants: {
    backgroundColor: [],
    fill: [],
    float: [],
    fontFamily: [],
    fontSize: [],
    fontStyle: [],
    fontWeight: [],
    letterSpacing: [],
    lineHeight: [],
    margin: [],
    padding: [],
    stroke: [],
    textColor: ['hover']
  },
  plugins: [
    fluidBasePlugin,
    bodyTextComponentsPlugin,
    captionTextComponentsPlugin,
    headingTextComponentsPlugin
  ],

  // Whitelist only parts of Tailwind that we are ready to use
  corePlugins: [
    'backgroundColor',
    'fill',
    'float',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
    'margin',
    'padding',
    'preflight',
    'stroke',
    'textColor'
  ]
};
