import { addDecorator } from '@storybook/html'
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

  return render(result);
});

