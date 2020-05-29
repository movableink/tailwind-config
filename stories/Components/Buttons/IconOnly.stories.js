import { html } from 'htm/preact';
import Gear from '../../_icons/Gear';

export default {
  title: 'Components/Buttons/Icon Only',
};

export const Compact = () =>
  html`<button class="fluid-button size:xs" aria-label="Settings"><${Gear} /></button>`;

export const Small = () =>
  html`<button class="fluid-button size:sm" aria-label="Settings"><${Gear} /></button>`;

export const Base = () =>
  html`<button class="fluid-button" aria-label="Settings"><${Gear} /></button>`;

export const Large = () =>
  html`<button class="fluid-button size:lg" aria-label="Settings"><${Gear} /></button>`;

export const ExtraLarge = () =>
  html`<button class="fluid-button size:xl" aria-label="Settings"><${Gear} /></button>`;
