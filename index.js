'use strict';

const { ...colors } = require('./config/colors');
const { fontFamily, fontWeight, letterSpacing, lineHeight } = require('./config/typography');
const fluidBasePlugin = require('./plugins/base');

/**
 * Configures Tailwind to use Fluid's design tokens
 */
module.exports = {
  theme: {
    colors,
    fill: colors,
    fontFamily,
    fontWeight,
    letterSpacing,
    lineHeight,
    stroke: colors
  },
  variants: {
    backgroundColor: [],
    fill: [],
    fontFamily: [],
    fontStyle: [],
    fontWeight: [],
    float: [],
    letterSpacing: [],
    lineHeight: [],
    stroke: [],
    textColor: ['hover']
  },
  plugins: [fluidBasePlugin],

  // Whitelist only parts of Tailwind that we are ready to use
  corePlugins: [
    'backgroundColor',
    'fill',
    'fontFamily',
    'fontStyle',
    'fontWeight',
    'float',
    'letterSpacing',
    'lineHeight',
    'preflight',
    'stroke',
    'textColor'
  ]
};
