function buildSafelist(tailwindObject) {
  return [];
};

const colors = '(neutral|blue|violet|aqua|green|yellow|orange|red)';
const hues = '(100|200|300|400|500|600|700|800|900)';

const safelist = [
  // colors
  {
    pattern: new RegExp(`(text|bg|fill|stroke)-${colors}(-|).`),
    variants: ['hover', 'focus', 'disabled'],
  },
];

module.exports = {
  buildSafelist,
  safelist,
};
