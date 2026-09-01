'use strict';

module.exports = function fluidTailwindPlugin({ addBase, theme }) {
  addBase({
    'html, body': {
      // Default to our normal text color
      color: theme('colors.text.primary'),
      // Default to using our `sans` font family
      fontFamily: theme('fontFamily.inter'),
      // Default to the "base" line height
      lineHeight: theme('lineHeight.base'),
    },

    'b, strong': {
      fontWeight: theme('fontWeight.bold'),
    },

    'input, textarea': {
      '&::placeholder': {
        // `neutral.600` (#757575) is ~4.6:1 on white and passes WCAG 1.4.3 for
        // normal text. Do not lighten this — `neutral.500` (#9e9e9e) is only
        // ~2.7:1 and fails.
        color: theme('colors.neutral.600'),

        // Preflight already sets this, but consumers running with
        // `corePlugins: { preflight: false }` would otherwise inherit Firefox's
        // default placeholder opacity, dragging the ratio back below 4.5:1.
        opacity: 1,
      },
    },
  });
};
