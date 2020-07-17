'use strict';

const { apply, classWithoutModifier } = require('./-utils');

/**
 * Builds out the Fluid Input component classes
 */
module.exports = function inputComponentsPlugin({ addComponents, e, theme }) {
  const disabledAppearance = e(`appearance:disabled`);
  const focusedAppearance = e(`appearance:focused`);
  const invalidAppearance = e(`appearance:invalid`);
  const warningAppearance = e(`appearance:warning`);

  function disabled(styles) {
    return {
      [`&:disabled, &.${disabledAppearance}`]: {
        ...styles,
      },
    };
  }

  function focused(styles) {
    return {
      [`&:focus, &.${focusedAppearance}`]: {
        ...styles,
      },
    };
  }

  function invalid(styles) {
    return {
      [`&:invalid, &.${invalidAppearance}`]: {
        ...styles,
      },
    };
  }

  function warning(styles) {
    return {
      [`&.${warningAppearance}`]: {
        ...styles,
      },
    };
  }

  const fluidInputWithoutModifier = classWithoutModifier.bind(null, e, 'fluid-input');

  addComponents({
    '.fluid-input': {
      ...apply(
        // Typography
        'font-sans',

        // Border
        'border',
        'border-neutral-400',
        'rounded',

        // Required for positioning `::after` elements for icons
        'relative'
      ),

      '--fluid-input-focus-shadow-color': theme('colors.blue.200'),

      '&::placeholder': {
        ...apply('text-neutral-600'),
      },

      ...focused({
        ...apply('border-blue-300', 'outline-none'),

        boxShadow: '0 0 0 2px var(--fluid-input-focus-shadow-color)',
      }),

      ...warning({
        ...apply('text-orange-600', 'border-yellow-400'),

        '--fluid-input-focus-shadow-color': theme('colors.yellow.200'),
      }),

      ...invalid({
        ...apply('text-red-600', 'border-red-400'),

        '--fluid-input-focus-shadow-color': theme('colors.red.200'),
      }),

      ...disabled({
        ...apply('text-neutral-600', 'bg-neutral-300', 'border-neutral-500'),
      }),
    },

    /** === Base Input Size === **/
    [fluidInputWithoutModifier('size')]: {
      ...apply('text-lg', 'p-2'),

      // Need exact line-height
      lineHeight: '24px',
    },

    /** === "Small" Input Size === **/
    [`.fluid-input.${e('size:sm')}`]: {
      ...apply('text-sm', 'py-1', 'px-2'),

      // Need exact line-height
      lineHeight: '20px',
    },
  });
};
