'use strict';

const fluidBasePlugin = require('./plugins/base');
const { ...colors } = require('./config/colors');
const { fontFamily, fontWeight, letterSpacing } = require('./config/typography');

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
    'preflight',
    'stroke',
    'textColor'
  ]
};
