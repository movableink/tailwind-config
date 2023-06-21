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
    '00': '#ffffff', // (white)
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    1000: '#000000', // (black)
    // alternatives
    a100: '#d5d5d5',
    a200: '#aaaaaa',
    a400: '#616161',
    a700: '#303030',
  },
  '500'
);

const blue = addDefault(
  {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#42a5f5',
    400: '#2196f3',
    500: '#1e88e5',
    600: '#1565c0',
    700: '#1976d2',
    800: '#0057b2',
    900: '#0d47a1',
    1000: '#030e22',
    // alternatives
    a100: '#82b1ff',
    a200: '#448aff',
    a400: '#2979ff',
    a700: '#2962ff',
  },
  500
);

const purple = addDefault({
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  1000: '#270B4A',
  // alternatives
  a100: '#ea80fc',
  a200: '#e040fb',
  a400: '#d500f9',
  a700: '#aa00ff',
});

const lightblue = addDefault(
  {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    1000: '#014361',
    // alternatives
    a100: '#80d8ff',
    a200: '#40c4ff',
    a400: '#00b0ff',
    a700: '#0091ea',
  },
  600
);

const green = addDefault(
  {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    1000: '#1E4620',
    // alternatives
    a100: '#b9f6ca',
    a200: '#69f0ae',
    a400: '#00e676',
    a700: '#00c853',
  },
  600
);

const yellow = addDefault(
  {
    50: '#fffde7',
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    400: '#ffee58',
    500: '#ffeb3b',
    600: '#fdd835',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17',
    1000: '#5c3009',
    // alternatives
    a100: '#ffff8d',
    a200: '#ffff00',
    a400: '#ffea00',
    a700: '#ffd600',
  },
  800
);

const orange = addDefault(
  {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    1000: '#663c00',
    // alternatives
    a100: '#ffd180',
    a200: '#ffab40',
    a400: '#ff9100',
    a700: '#ff6d00',
  },
  600
);

const red = addDefault({
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  1000: '#5F2120',
  // alternatives
  a100: '#ff8a80',
  a200: '#ff5252',
  a400: '#ff1744',
  a700: '#d50000',
});

module.exports = {
  neutral,
  blue,
  purple,
  lightblue,
  green,
  yellow,
  orange,
  red,
  white: neutral['00'],
  black: neutral['1000'],
  current: 'currentColor',
  transparent: 'transparent',
};
