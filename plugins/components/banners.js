'use strict';

module.exports = function bannerComponentsPlugin({ addComponents, e, theme }) {
  function fluidBannerWithoutModifier(modifier) {
    const escapedModifier = e(`${modifier}:`);

    return `.fluid-banner:not([class*="${escapedModifier}"])`;
  }

  addComponents({
    '.fluid-banner': {
      display: 'flex',
      flexDirection: theme('flexDirection.flexRow'),
      gap: theme('gap.5'),
      borderColor: 'transparent',
      borderWidth: '1px',
      borderRadius: theme('borderRadius.sm'),
      padding: theme('padding.5'),

      /** === Icon (svg) === **/
      'svg.fluid-banner--icon': {
        width: theme('width.6'),
        height: theme('height.6'),
      },

      /** === Close (svg) === **/
      'svg.fluid-banner--close': {
        width: theme('width.4'),
        height: theme('height.4'),
      },

      '.fluid-banner--content': {
        display: 'flex',
        width: theme('width.full'),
        flexDirection: 'column',

        h4: {
          fontWeight: theme('fontWeight.bold'),
        },

        'h4, p': {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.base'),
        },
      },
    },

    /** === Default (Type) === **/
    [fluidBannerWithoutModifier('size')]: {
      background: theme('colors.neutral.200'),
      color: theme('colors.neutral.700'),

      'svg.fluid-banner--icon, svg.fluid-banner--close': {
        fill: theme('colors.neutral.700'),
      },
    },

    /** === Destructive (Type) === **/
    [`.fluid-banner.${e('type:destructive')}`]: {
      background: theme('colors.red.200'),
      color: theme('colors.red.600'),

      'svg.fluid-banner--icon': {
        fill: theme('colors.red.400'),
      },

      'svg.fluid-banner--close': {
        fill: theme('colors.red.600'),
      },
    },

    /** === Information (Type) === **/
    [`.fluid-banner.${e('type:info')}`]: {
      background: theme('colors.blue.200'),
      color: theme('colors.blue.600'),

      'svg.fluid-banner--icon': {
        fill: theme('colors.blue.400'),
      },

      'svg.fluid-banner--close': {
        fill: theme('colors.blue.600'),
      },
    },

    /** === Confirmation (Type) === **/
    [`.fluid-banner.${e('type:confirm')}`]: {
      background: theme('colors.green.200'),
      color: theme('colors.green.600'),

      'svg.fluid-banner--icon': {
        fill: theme('colors.green.400'),
      },

      'svg.fluid-banner--close': {
        fill: theme('colors.green.600'),
      },
    },

    /** === Alert (Type) === **/
    [`.fluid-banner.${e('type:alert')}`]: {
      background: theme('colors.orange.200'),
      color: theme('colors.orange.700'),

      'svg.fluid-banner--icon': {
        fill: theme('colors.orange.400'),
      },

      'svg.fluid-banner--close': {
        fill: theme('colors.orange.700'),
      },
    },
  });
};
