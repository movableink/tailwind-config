import { addDecorator, addParameters } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import { html } from 'htm/preact';
import render from 'preact-render-to-string';
import prettierConfig from '@movable/prettier-config';

addParameters({
  options: {
    showRoots: true,
  },
});

addDecorator((storyFn) => {
  let result = storyFn();

  if (typeof result === 'string') {
    result = html([result]);
  }

  const rendered = render(result);

  // Avoid printing serialization code for `<`
  return rendered.replace(/&amp;/g, '&');
});

addDecorator(withHTML({ prettier: prettierConfig }));

addDecorator(
  (storyFn) => `
    <div class="p-4 bg-white h-screen">
      ${storyFn()}
    </div>
  `
);
