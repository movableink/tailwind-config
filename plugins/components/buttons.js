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

  const activeAppearance = e(`appearance:active`);
  const disabledAppearance = e(`appearance:disabled`);
  const focusedAppearance = e(`appearance:focused`);
  const hoveredAppearance = e(`appearance:hovered`);

  function active(styles) {
    return {
      [`&:active:not(.${disabledAppearance}), &.${activeAppearance}:not(.${disabledAppearance})`]: {
        ...styles,
      },
    };
  }

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

  function hovered(styles) {
    return {
      [`&:hover:not(:disabled):not(.${disabledAppearance}), &.${hoveredAppearance}:not(:disabled):not(.${disabledAppearance})`]: {
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
      // Properties Customized by "Types"
      color: 'var(--fluid-button-color)',

      // Display items inside button
      alignItems: 'center',
      display: 'inline-flex',

      // Default border
      borderRadius: theme('borderRadius.md'),
      borderWidth: '1px',

      // Shared Font Style
      fontWeight: theme('fontWeight.bold'),

      // Prevent selection of text
      userSelect: 'none',

      // Prevent breaks
      whiteSpace: 'nowrap',

      ...disabled({
        color: 'var(--fluid-button-color-disabled, var(--fluid-button-color))',
        cursor: 'not-allowed',
      }),

      ...hovered({
        color: 'var(--fluid-button-color-hovered, var(--fluid-button-color))',
      }),

      ...focused({
        outline: 'none',
      }),

      ...active({
        color: 'var(--fluid-button-color-active, var(--fluid-button-color))',
      }),

      svg: {
        fill: 'currentColor',
      },
    },

    /** === Basic Button (Type) === **/
    [fluidButtonWithoutModifier('type')]: {
      '--fluid-button-color': theme('colors.neutral.800'),
      '--fluid-button-color-disabled': theme('colors.neutral.500'),
      backgroundColor: theme('colors.neutral.200'),
      borderColor: theme('colors.neutral.500'),
      boxShadow: ELEVATED_BOX_SHADOW,

      ...disabled({
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
      '--fluid-button-color': theme('colors.white'),
      '--fluid-button-color-disabled': theme('colors.blue.200'),
      backgroundColor: theme('colors.blue.400'),
      borderColor: theme('colors.blue.500'),
      boxShadow: ELEVATED_BOX_SHADOW,

      ...disabled({
        backgroundColor: theme('colors.blue.100'),
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
      '--fluid-button-color': theme('colors.neutral.800'),
      '--fluid-button-color-disabled': theme('colors.neutral.500'),
      backgroundColor: 'transparent',
      borderColor: theme('colors.neutral.500'),

      ...disabled({
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
      '--fluid-button-color': theme('colors.white'),
      '--fluid-button-color-disabled': theme('colors.red.200'),
      '--fluid-button-color-hovered': theme('colors.white'),
      backgroundColor: theme('colors.red.400'),
      borderColor: theme('colors.red.500'),
      boxShadow: ELEVATED_BOX_SHADOW,

      ...disabled({
        backgroundColor: theme('colors.red.100'),
        borderColor: theme('colors.red.200'),
        boxShadow: 'none',
      }),

      ...hovered({
        background:
          'linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.1) 100%) rgb(252, 81, 66)',
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
      '--fluid-button-color': theme('colors.blue.400'),
      '--fluid-button-color-disabled': theme('colors.neutral.500'),
      '--fluid-button-color-hovered': theme('colors.blue.500'),
      '--fluid-button-color-active': theme('colors.blue.300'),
      backgroundColor: 'transparent',
      borderColor: 'transparent',

      ...focused({
        boxShadow: FOCUSED_BOX_SHADOW,
        borderColor: theme('colors.blue.300'),
      }),

      ...active({
        boxShadow: FOCUSED_BOX_SHADOW,
        borderColor: theme('colors.blue.300'),
      }),
    },

    /** === Basic Button (Size) === **/
    [fluidButtonWithoutModifier('size')]: {
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.xs'),
      paddingBottom: theme('padding.1'),
      paddingLeft: theme('padding.2'),
      paddingRight: theme('padding.2'),
      paddingTop: theme('padding.1'),

      svg: {
        height: theme('height.4'),
        width: theme('width.4'),

        // Add margin to account for `line-height` being
        marginTop: '2px',
        marginBottom: '2px',

        // Handle spacing if text is also present
        '&:not(:only-child)': {
          marginLeft: theme('margin.2'),
        },
      },
    },

    /** === Extra-Small Button === **/
    [`.fluid-button.${e('size:xs')}`]: {
      fontSize: theme('fontSize.2xs'),
      lineHeight: theme('lineHeight.xs'),
      paddingBottom: '0',
      paddingLeft: theme('padding.2'),
      paddingRight: theme('padding.2'),
      paddingTop: '0',

      svg: {
        height: theme('height.3'),
        width: theme('width.3'),

        // Create the right spacing w/o the line height
        marginTop: '4px',
        marginBottom: '4px',

        // Handle spacing if text is also present
        '&:not(:only-child)': {
          marginLeft: theme('margin.2'),
        },
      },
    },

    /** === Small Button === **/
    [`.fluid-button.${e('size:sm')}`]: {
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.2xs'),
      paddingBottom: theme('padding.1'),
      paddingLeft: theme('padding.2'),
      paddingRight: theme('padding.2'),
      paddingTop: theme('padding.1'),

      svg: {
        height: theme('height.3'),
        width: theme('width.3'),

        // Create the right spacing w/o the line height
        marginTop: '2px',
        marginBottom: '2px',

        // Handle spacing if text is also present
        '&:not(:only-child)': {
          marginLeft: theme('margin.2'),
        },
      },
    },

    /** === Large Button === **/
    [`.fluid-button.${e('size:lg')}`]: {
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.2xs'),
      paddingBottom: theme('padding.2'),
      paddingLeft: theme('padding.3'),
      paddingRight: theme('padding.3'),
      paddingTop: theme('padding.2'),

      svg: {
        height: theme('height.4'),
        width: theme('width.4'),

        // Create the right spacing w/o the line height
        marginTop: '2px',
        marginBottom: '2px',

        // Handle spacing if text is also present
        '&:not(:only-child)': {
          marginLeft: theme('margin.3'),
        },
      },
    },

    /** === Extra-Large Button === **/
    [`.fluid-button.${e('size:xl')}`]: {
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.xs'),
      paddingBottom: theme('padding.3'),
      paddingLeft: theme('padding.4'),
      paddingRight: theme('padding.4'),
      paddingTop: theme('padding.3'),

      svg: {
        height: theme('height.5'),
        width: theme('width.5'),

        // Handle spacing if text is also present
        '&:not(:only-child)': {
          marginLeft: theme('margin.4'),
        },
      },
    },

    /** === Button Group === **/
    '.fluid-button-group': {
      '> .fluid-button:not(:first-child)': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 0,
      },

      '> .fluid-button:not(:last-child)': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  });
};
