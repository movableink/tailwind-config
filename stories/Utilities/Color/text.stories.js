import { html } from 'htm/preact';

export default {
  title: 'Utilities|Color/Text'
};

export const ChangeOnHover = () => html`
  <p class="text-red hover:text-blue">
    Hover me for blue text!
  </p>
`;
