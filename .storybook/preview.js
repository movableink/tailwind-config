import { addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import render from 'preact-render-to-string';
import prettierConfig from '@movable/prettier-config';

addParameters({
  a11y: {
    element: '#fluid-root',
  },
  options: {
    showRoots: true,
  },
});

// Add accessibility testing for each story
addDecorator(withA11y);

// Allow using the Preact `html` tag in stories
addDecorator((storyFn) => {
  let result = storyFn();

  if (typeof result === 'string') {
    return result;
  }

  return render(result);
});

// Add HTML code snippet addon
addDecorator(withHTML({ prettier: prettierConfig }));

// Add a wrapper element for better presentation
addDecorator(
  (storyFn) => `
    <div class="p-4 bg-white h-screen" id="fluid-root">
      ${storyFn()}
    </div>
  `
);
