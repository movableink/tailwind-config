'use strict';

/**
 * Tailwind treats a key called `default` as the value to use
 * when a color is accessed without a nested specifier
 */
function addDefault(colorDefinition, defaultKey = '400') {
  return {
    DEFAULT: colorDefinition[defaultKey],
    ...colorDefinition,
  };
}

const neutral = addDefault(
  {
    100: '#ffffff', // (White)
    200: '#fafafa',
    300: '#f1f1f2',
    400: '#e8e8ea',
    500: '#c5c5ca',
    600: '#767680',
    700: '#45454b',
    800: '#1c1c1c',
    900: '#000000', // (Black)
  },
  '500'
);

const blue = addDefault({
  100: '#f2f7ff',
  200: '#d2e1fa',
  300: '#94b8f6',
  400: '#266fed',
  500: '#0d43a0',
  600: '#072251',
  700: '#030e22',
});

const violet = addDefault({
  100: '#f4f0fd',
  200: '#ddd2fa',
  300: '#b69cff',
  400: '#7549ea',
  500: '#4b1ec7',
  600: '#2c0e7b',
  700: '#16073e',
});

const aqua = addDefault({
  100: '#e4fbff',
  200: '#a0f1ff',
  300: '#4be4ff',
  400: '#00c2e4',
  500: '#0088a0',
  600: '#004e5c',
  700: '#002329',
});

const green = addDefault({
  100: '#f0f5f1',
  200: '#c8e6d0',
  300: '#83d79b',
  400: '#3cb860',
  500: '#2b8545',
  600: '#1b522b',
  700: '#0e2b16',
});

const yellow = addDefault({
  100: '#faf2d9',
  200: '#ffecae',
  300: '#ffdb6a',
  400: '#ffcb26',
  500: '#f2b800',
  600: '#9d7700',
  700: '#372a00',
});

const orange = addDefault({
  100: '#fff2dd',
  200: '#ffd088',
  300: '#ffaf33',
  400: '#ff9b00',
  500: '#cc7c00',
  600: '#885300',
  700: '#452a00',
});

const red = addDefault({
  100: '#ffebe9',
  200: '#feccc8',
  300: '#fd8f85',
  400: '#fc5142',
  500: '#e51604',
  600: '#810c02',
  700: '#4f0801',
});

module.exports = {
  neutral,
  blue,
  violet,
  aqua,
  green,
  yellow,
  orange,
  red,
  white: neutral['100'],
  black: neutral['900'],
  current: 'currentColor',
  transparent: 'transparent',
};
