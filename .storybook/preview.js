import { addDecorator } from '@storybook/html'
import { withHTML } from '@whitespace/storybook-addon-html/html';
import { html } from 'htm/preact';
import render from 'preact-render-to-string';

addDecorator(storyFn => html`
  <div class="p-4 bg-white h-screen">
    ${storyFn()}
  </div>
`);

addDecorator(storyFn => {
  let result = storyFn();

  if (typeof result === 'string') {
    result = html([result]);
  }

  const rendered = render(result);

  // Avoid printing serialization code for `<`
  return rendered.replace(/&amp;/g, '&');
});

addDecorator(withHTML);
