import { html } from 'htm/preact';
import Gear from '../../_icons/Gear';

export default {
  title: 'Components/Buttons/Icon with Text',
};

export const Compact = () =>
  html`<button class="fluid-button size:xs"><span>Settings</span><${Gear} /></button>`;

export const Small = () =>
  html`<button class="fluid-button size:sm"><span>Settings</span><${Gear} /></button>`;

export const Base = () =>
  html`<button class="fluid-button"><span>Settings</span><${Gear} /></button>`;

export const Large = () =>
  html`<button class="fluid-button size:lg"><span>Settings</span><${Gear} /></button>`;

export const ExtraLarge = () =>
  html`<button class="fluid-button size:xl"><span>Settings</span><${Gear} /></button>`;
