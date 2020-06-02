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
