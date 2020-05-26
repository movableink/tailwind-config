'use strict';

/**
 * Builds out the Fluid Button component classes
 *
 * Important notes on this file:
 *
 * * The `active` styles for each button _must_ be inserted after the `focus` styles
 */
module.exports = function buttonComponentsPlugin({ addComponents, e, theme }) {
  const DEPRESSED_BOX_SHADOW = 'inset 0px 1px 1px 1px rgba(28, 28, 28, 0.2)';
  const ELEVATED_BOX_SHADOW = '0px 1px 1px 0px rgba(28, 28, 28, 0.15)';
  const FOCUSED_BOX_SHADOW = `0 0 0 1px ${theme('colors.blue.300')}`;

  function active(styles) {
    return {
      [`&:active, &.${e(`appearance:active`)}`]: {
        ...styles,
      },
    };
  }

  function disabled(styles) {
    return {
      [`&:disabled, &.${e(`appearance:disabled`)}`]: {
        ...styles,
      },
    };
  }

  function focused(styles) {
    return {
      [`&:focus, &.${e(`appearance:focused`)}`]: {
        ...styles,
      },
    };
  }

  function hovered(styles) {
    return {
      [`&:hover:not(:disabled), &.${e(`appearance:hovered`)}:not(:disabled)`]: {
        ...styles,
      },
    };
  }

  /**
   * This function returns a selector that matches elements with the
   * `.fluid-button` class if and only if the element _does not_ have a
   * class that starts with the provided `modifier`.
   *
   * We use an attribute selector here to look into the `class` attribute
   * for the presence of the modifier
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
   *
   * We combine this with the `:not` pseudo-class to reverse the selector
   * and apply the styles when we do _not_ have that modifier somewhere in the
   * class attribute
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/:not
   *
   * All of this allows the defintion of `.fluid-button` to contain shared
   * styles for all buttons without any of the Basic-specific styles, which
   * the other types of buttons might need to override.
   */
  function fluidButtonWithoutModifier(modifier) {
    const escapedModifier = e(`${modifier}:`);

    return `.fluid-button:not([class*="${escapedModifier}"])`;
  }

  addComponents({
    // Styles that belong to all buttons
    '.fluid-button': {
      // Display items inside button
      alignItems: 'center',
      display: 'inline-flex',

      // Default padding
      paddingBottom: theme('padding.1'),
      paddingLeft: theme('padding.2'),
      paddingRight: theme('padding.2'),
      paddingTop: theme('padding.1'),

      // Default border
      borderRadius: theme('borderRadius.md'),
      borderWidth: '1px',

      // Shared Font Style
      fontSize: theme('fontSize.sm'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('lineHeight.xs'),

      // Prevent selection of text
      userSelect: 'none',

      // Prevent breaks
      whiteSpace: 'nowrap',

      ...disabled({
        cursor: 'not-allowed',
      }),

      ...focused({
        outline: 'none',
      }),
    },

    /** === Basic Button (Type) === **/
    [fluidButtonWithoutModifier('type')]: {
      backgroundColor: theme('colors.neutral.200'),
      color: theme('colors.neutral.800'),
      borderColor: theme('colors.neutral.500'),
      boxShadow: ELEVATED_BOX_SHADOW,

      ...disabled({
        color: theme('colors.neutral.500'),
        borderColor: theme('colors.neutral.400'),
        boxShadow: 'none',
      }),

      ...hovered({
        background:
          'linear-gradient(-180deg, rgba(216, 216, 216, 0) 0%, rgba(0, 0, 0, 0.1) 100%) rgb(250, 250, 250)',
      }),

      ...focused({
        boxShadow: `${ELEVATED_BOX_SHADOW}, 0 0 0 1px ${theme('colors.blue.300')}`,
        borderColor: theme('colors.blue.300'),
      }),

      ...active({
        boxShadow: `${DEPRESSED_BOX_SHADOW}, ${FOCUSED_BOX_SHADOW}`,
        borderColor: theme('colors.blue.300'),
      }),
    },

    /** === Primary Button === **/
    [`.fluid-button.${e('type:primary')}`]: {
      backgroundColor: theme('colors.blue.400'),
      color: theme('colors.white'),
      borderColor: theme('colors.blue.500'),
      boxShadow: ELEVATED_BOX_SHADOW,

      ...disabled({
        backgroundColor: theme('colors.blue.100'),
        color: theme('colors.blue.200'),
        borderColor: theme('colors.blue.200'),
        boxShadow: 'none',
      }),

      ...hovered({
        background:
          'linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.1) 100%) rgb(20, 106, 255)',
      }),

      ...focused({
        boxShadow: `${ELEVATED_BOX_SHADOW}, ${FOCUSED_BOX_SHADOW}`,
        borderColor: theme('colors.blue.300'),
      }),

      ...active({
        boxShadow: `${DEPRESSED_BOX_SHADOW}, ${FOCUSED_BOX_SHADOW}`,
        borderColor: theme('colors.blue.300'),
      }),
    },

    /** === Outline Button === **/
    [`.fluid-button.${e('type:outline')}`]: {
      backgroundColor: 'transparent',
      color: theme('colors.neutral.800'),
      borderColor: theme('colors.neutral.500'),

      ...disabled({
        color: theme('colors.neutral.500'),
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: theme('colors.neutral.400'),
        boxShadow: 'none',
      }),

      ...hovered({
        background: 'linear-gradient(-180deg, rgba(216, 216, 216, 0) 0%, rgba(0, 0, 0, 0.1) 100%)',
      }),

      ...focused({
        boxShadow: FOCUSED_BOX_SHADOW,
        borderColor: theme('colors.blue.300'),
      }),

      ...active({
        boxShadow: `${DEPRESSED_BOX_SHADOW}, ${FOCUSED_BOX_SHADOW}`,
        borderColor: theme('colors.blue.300'),
      }),
    },

    /** === Destructive Button === **/
    [`.fluid-button.${e('type:destructive')}`]: {
      backgroundColor: theme('colors.red.400'),
      color: theme('colors.white'),
      borderColor: theme('colors.red.500'),
      boxShadow: ELEVATED_BOX_SHADOW,

      ...disabled({
        backgroundColor: theme('colors.red.100'),
        color: theme('colors.red.200'),
        borderColor: theme('colors.red.200'),
        boxShadow: 'none',
      }),

      ...hovered({
        background:
          'linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.1) 100%) rgb(252, 81, 66)',
        color: theme('colors.white'),
        borderColor: theme('colors.red.500'),
      }),

      ...focused({
        boxShadow: `${ELEVATED_BOX_SHADOW}, ${FOCUSED_BOX_SHADOW}`,
        borderColor: theme('colors.blue.300'),
      }),

      ...active({
        boxShadow: `${DEPRESSED_BOX_SHADOW}, ${FOCUSED_BOX_SHADOW}`,
        borderColor: theme('colors.blue.300'),
      }),
    },

    /** === Plain Button === **/
    [`.fluid-button.${e('type:plain')}`]: {
      backgroundColor: 'transparent',
      color: theme('colors.blue.400'),
      borderColor: 'transparent',

      ...disabled({
        color: theme('colors.neutral.500'),
      }),

      ...hovered({
        color: theme('colors.blue.500'),
      }),

      ...focused({
        boxShadow: FOCUSED_BOX_SHADOW,
        borderColor: theme('colors.blue.300'),
      }),

      ...active({
        boxShadow: FOCUSED_BOX_SHADOW,
        borderColor: theme('colors.blue.300'),
        color: theme('colors.blue.300'),
      }),
    },
  });
};
