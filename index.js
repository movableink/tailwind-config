'use strict';

const fluidBasePlugin = require('./plugins/base');
const { ...colors } = require('./colors');
const { fontWeight } = require('./typography');

/**
 * Configures Tailwind to use Fluid's design tokens
 */
module.exports = {
  theme: {
    colors,
    fill: colors,
    fontWeight,
    stroke: colors
  },
  variants: {
    backgroundColor: [],
    fill: [],
    fontStyle: [],
    fontWeight: [],
    float: [],
    stroke: [],
    textColor: ['hover']
  },
  plugins: [fluidBasePlugin],

  // Whitelist only parts of Tailwind that we are ready to use
  corePlugins: [
    'backgroundColor',
    'fill',
    'fontStyle',
    'fontWeight',
    'float',
    'preflight',
    'stroke',
    'textColor'
  ]
};
