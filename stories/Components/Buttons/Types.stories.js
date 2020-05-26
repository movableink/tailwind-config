import { html } from 'htm/preact';

export default {
  title: 'Components/Buttons/Types',
};

export const Basic = () => html`
  <div class="flex space-x-2">
    <button class="fluid-button">Click Me</button>
    <button class="fluid-button" disabled>Click Me</button>
  </div>
`;

export const Primary = () => html`
  <div class="flex space-x-2">
    <button class="fluid-button type:primary">Click Me</button>
    <button class="fluid-button type:primary" disabled>
      Click Me
    </button>
  </div>
`;

export const Outline = () => html`
  <div class="flex space-x-2">
    <button class="fluid-button type:outline">Click Me</button>
    <button class="fluid-button type:outline" disabled>Click Me</button>
  </div>
`;

export const Destructive = () => html`
  <div class="flex space-x-2">
    <button class="fluid-button type:destructive">Click Me</button>
    <button class="fluid-button type:destructive" disabled>Click Me</button>
  </div>
`;

export const Plain = () => html`
  <div class="flex space-x-2">
    <button class="fluid-button type:plain">Click Me</button>
    <button class="fluid-button type:plain" disabled>Click Me</button>
  </div>
`;
