import { html } from 'htm/preact';
import Gear from '../../_icons/Gear';

export default {
  title: 'Components/Buttons/Types',
};

export const Basic = () => html`
  <div class="grid grid-cols-3 gap-2 float-left">
    <div><button class="fluid-button">Click Me</button></div>
    <div>
      <button class="fluid-button" aria-label="Settings"><${Gear} /></button>
    </div>
    <div>
      <button class="fluid-button"><span>Settings</span><${Gear} /></button>
    </div>

    <div><button class="fluid-button" disabled>Click Me</button></div>
    <div>
      <button class="fluid-button" disabled aria-label="Settings"><${Gear} /></button>
    </div>
    <div>
      <button class="fluid-button" disabled><span>Settings</span><${Gear} /></button>
    </div>
  </div>
`;

export const Primary = () => html`
  <div class="grid grid-cols-3 gap-2 float-left">
    <div><button class="fluid-button type:primary">Click Me</button></div>
    <div>
      <button class="fluid-button type:primary" aria-label="Settings"><${Gear} /></button>
    </div>
    <div>
      <button class="fluid-button type:primary"><span>Settings</span><${Gear} /></button>
    </div>

    <div>
      <button class="fluid-button type:primary" disabled>
        Click Me
      </button>
    </div>
    <div>
      <button class="fluid-button type:primary" disabled aria-label="Settings"><${Gear} /></button>
    </div>
    <div>
      <button class="fluid-button type:primary" disabled><span>Settings</span><${Gear} /></button>
    </div>
  </div>
`;

export const Outline = () => html`
  <div class="grid grid-cols-3 gap-2 float-left">
    <div><button class="fluid-button type:outline">Click Me</button></div>
    <div>
      <button class="fluid-button type:outline" aria-label="Settings"><${Gear} /></button>
    </div>
    <div>
      <button class="fluid-button type:outline"><span>Settings</span><${Gear} /></button>
    </div>

    <div><button class="fluid-button type:outline" disabled>Click Me</button></div>
    <div>
      <button class="fluid-button type:outline" disabled aria-label="Settings"><${Gear} /></button>
    </div>
    <div>
      <button class="fluid-button type:outline" disabled><span>Settings</span><${Gear} /></button>
    </div>
  </div>
`;

export const Destructive = () => html`
  <div class="grid grid-cols-3 gap-2 float-left">
    <div><button class="fluid-button type:destructive">Click Me</button></div>
    <div>
      <button class="fluid-button type:destructive" aria-label="Settings"><${Gear} /></button>
    </div>
    <div>
      <button class="fluid-button type:destructive"><span>Settings</span><${Gear} /></button>
    </div>

    <div><button class="fluid-button type:destructive" disabled>Click Me</button></div>
    <div>
      <button class="fluid-button type:destructive" disabled aria-label="Settings">
        <${Gear} />
      </button>
    </div>
    <div>
      <button class="fluid-button type:destructive" disabled>
        <span>Settings</span>
        <${Gear} />
      </button>
    </div>
  </div>
`;

export const Plain = () => html`
  <div class="grid grid-cols-3 gap-2 float-left">
    <div><button class="fluid-button type:plain">Click Me</button></div>
    <div>
      <button class="fluid-button type:plain" aria-label="Settings"><${Gear} /></button>
    </div>
    <div>
      <button class="fluid-button type:plain"><span>Settings</span><${Gear} /></button>
    </div>

    <div><button class="fluid-button type:plain" disabled>Click Me</button></div>
    <div>
      <button class="fluid-button type:plain" disabled aria-label="Settings"><${Gear} /></button>
    </div>
    <div>
      <button class="fluid-button type:plain" disabled><span>Settings</span><${Gear} /></button>
    </div>
  </div>
`;
