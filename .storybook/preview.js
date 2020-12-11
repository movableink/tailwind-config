import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import prettierConfig from '@movable/prettier-config';

addParameters({
  a11y: {
    element: '#fluid-root',
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: 'black' },
    ],
  },
  html: {
    prettier: prettierConfig,
  },
});

// Add a wrapper element for better presentation
addDecorator((storyFn) => <div id="fluid-root">{storyFn()}</div>);
