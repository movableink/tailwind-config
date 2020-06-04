import { html } from 'htm/preact';

export default {
  title: 'Components/Buttons/CookBook',
};

export const Anchor = () => html`
  <div class="flex space-x-2">
    <a href="#" class="fluid-button">I am a link</a>
    <a class="fluid-button appearance:disabled">I am a (disabled) link</a>
  </div>
`;

export const ButtonGroup = () => html`
  <div class="fluid-button-group">
    <button class="fluid-button">Left Button</button>
    <button class="fluid-button">Middle Button</button>
    <button class="fluid-button">Right Button</button>
  </div>
`;

export const DarkMode = () => html`
  <button class="fluid-button type:outline text-white">Click Me</button>
`;
DarkMode.story = {
  parameters: {
    backgrounds: [{ name: 'dark', value: 'black', default: true }],
  },
};
