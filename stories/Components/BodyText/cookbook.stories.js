import { html } from 'htm/preact';

export default {
  title: 'Components/Body Text/Cookbook',
};

export const OverridingFontWeight = () => html`
  <p class="body-base font-bold">
    Base body class, but with bold text
  </p>
`;
