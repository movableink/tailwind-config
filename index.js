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
  // Must come after `focus`: Tailwind emits variants in list order, so the
  // later one wins when both match.
  'focus-visible',
];

/**
 * Tailwind's own default variants for the outline and ring plugins, plus
 * `focus-visible`, so apps can build focus indicators out of utilities rather
 * than hand-written CSS (WCAG 2.4.7).
 *
 * `dark` is inert today — this config does not set `darkMode` — but it is kept
 * where Tailwind has it by default so a downstream app that turns dark mode on
 * does not silently lose it.
 */
const FOCUS_RING_VARIANTS = ['responsive', 'focus-within', 'focus', 'focus-visible'];
const FOCUS_RING_COLOR_VARIANTS = ['responsive', 'dark', 'focus-within', 'focus', 'focus-visible'];

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
    outline: FOCUS_RING_VARIANTS,
    ringWidth: FOCUS_RING_VARIANTS,
    ringOffsetWidth: FOCUS_RING_VARIANTS,
    ringColor: FOCUS_RING_COLOR_VARIANTS,
    ringOffsetColor: FOCUS_RING_COLOR_VARIANTS,
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
  FOCUS_RING_VARIANTS,
  FOCUS_RING_COLOR_VARIANTS,
};
