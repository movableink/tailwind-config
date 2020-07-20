import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withHTML } from '@whitespace/storybook-addon-html/react';
import prettierConfig from '@movable/prettier-config';

addParameters({
  a11y: {
    element: '#fluid-root',
  },
  backgrounds: [
    { name: 'light', value: 'white', default: true },
    { name: 'dark', value: 'black' },
  ],
  options: {
    showRoots: true,
  },
});

// Add accessibility testing for each story
addDecorator(withA11y);

// Add HTML code snippet addon
addDecorator(withHTML({ prettier: prettierConfig }));

// Add a wrapper element for better presentation
addDecorator((storyFn) => (
  <div className="p-4 h-screen" id="fluid-root">
    {storyFn()}
  </div>
));
