import { html } from 'htm/preact';

export default {
  title: 'Components/Buttons/Sizes',
};

export const ExtraSmall = () => html`<button class="fluid-button size:xs">Click Me</button>`;

export const Small = () => html`<button class="fluid-button size:sm">Click Me</button>`;

export const Base = () => html`<button class="fluid-button">Click Me</button>`;

export const Large = () => html`<button class="fluid-button size:lg">Click Me</button>`;

export const ExtraLarge = () => html`<button class="fluid-button size:xl">Click Me</button>`;
