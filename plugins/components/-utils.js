'use strict';

/**
 * @typedef {(input: string) => string} EscapeFunction
 */

/**
 * This function returns a selector that matches elements with the
 * given class if and only if the element _does not_ have a class that
 * starts with the provided `modifier`.
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
 * All of this allows the defintion of the given class to contain shared
 * styles for all buttons without any of the Basic-specific styles, which
 * the other class might then need to override.
 *
 * @param {EscapeFunction} e the escape function from Tailwind
 * @param {string} className the class name to extend
 * @param {string} modifier the "modifier" to avoid matching against in the selector
 * @returns {string} the extended selector
 */
function classWithoutModifier(e, className, modifier) {
  const escapedModifier = e(`${modifier}:`);

  return `.${className}:not([class*="${escapedModifier}"])`;
}

module.exports = {
  classWithoutModifier,
};
