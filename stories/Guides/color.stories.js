import { html } from 'htm/preact';
import Code from '../_utils/InlineCode';

export default {
  title: 'Guides|Color',
};

function Cell({ color, value, className = value && value > 400 ? 'text-white' : '' }) {
  const identifier = value ? `${color}-${value}` : color;

  return html`
    <div class="flex items-center justify-center bg-${identifier} ${className}">
      <code class="text-sm">
        ${identifier}
      </code>
    </div>
  `;
}

export const Palette = () => html`
  <h1 class="heading-md mb-2">Color Palette</h1>

  <div class="grid grid-cols-9 h-24 mb-4">
    <${Cell} color="neutral" value="100" />
    <${Cell} color="neutral" value="200" />
    <${Cell} color="neutral" value="300" />
    <${Cell} color="neutral" value="400" />
    <${Cell} color="neutral" value="500" />
    <${Cell} color="neutral" value="600" />
    <${Cell} color="neutral" value="700" />
    <${Cell} color="neutral" value="800" />
    <${Cell} color="neutral" value="900" />
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    <${Cell} color="red" value="100" />
    <${Cell} color="red" value="200" />
    <${Cell} color="red" value="300" />
    <${Cell} color="red" value="400" />
    <${Cell} color="red" value="500" />
    <${Cell} color="red" value="600" />
    <${Cell} color="red" value="700" />
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    <${Cell} color="orange" value="100" />
    <${Cell} color="orange" value="200" />
    <${Cell} color="orange" value="300" />
    <${Cell} color="orange" value="400" />
    <${Cell} color="orange" value="500" />
    <${Cell} color="orange" value="600" />
    <${Cell} color="orange" value="700" />
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    <${Cell} color="yellow" value="100" />
    <${Cell} color="yellow" value="200" />
    <${Cell} color="yellow" value="300" />
    <${Cell} color="yellow" value="400" />
    <${Cell} color="yellow" value="500" />
    <${Cell} color="yellow" value="600" />
    <${Cell} color="yellow" value="700" />
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    <${Cell} color="green" value="100" />
    <${Cell} color="green" value="200" />
    <${Cell} color="green" value="300" />
    <${Cell} color="green" value="400" />
    <${Cell} color="green" value="500" />
    <${Cell} color="green" value="600" />
    <${Cell} color="green" value="700" />
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    <${Cell} color="aqua" value="100" />
    <${Cell} color="aqua" value="200" />
    <${Cell} color="aqua" value="300" />
    <${Cell} color="aqua" value="400" />
    <${Cell} color="aqua" value="500" />
    <${Cell} color="aqua" value="600" />
    <${Cell} color="aqua" value="700" />
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    <${Cell} color="blue" value="100" />
    <${Cell} color="blue" value="200" />
    <${Cell} color="blue" value="300" />
    <${Cell} color="blue" value="400" />
    <${Cell} color="blue" value="500" />
    <${Cell} color="blue" value="600" />
    <${Cell} color="blue" value="700" />
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    <${Cell} color="violet" value="100" />
    <${Cell} color="violet" value="200" />
    <${Cell} color="violet" value="300" />
    <${Cell} color="violet" value="400" />
    <${Cell} color="violet" value="500" />
    <${Cell} color="violet" value="600" />
    <${Cell} color="violet" value="700" />
  </div>
`;

export const Aliases = () => html`
  <h1 class="heading-md mb-2">Color Aliases</h1>

  <p class="body-base mb-2">
    Each of our core colors has a alias, or shortcut, that can be used to avoid needing to provide
    the color's numerical value.
  </p>

  <p class="body-base mb-2">
    Each color's alias corresponds to the "middle" step for the range of values. For most colors,
    this matches the <${Code}>400</${Code}> value. For <${Code}>neutral</${Code}> however, it
    matches the <${Code}>500</${Code}> value.
  </p>

  <p class="body-base mb-2">
    Additionally, an alias for <${Code}>black</${Code}> and <${Code}>white</${Code}> are provided.
  </p>

  <div class="grid grid-cols-2 gap-4">
    <div class="grid grid-cols-2 gap-px h-24 bg-neutral-300 border border-neutral-300">
      <${Cell} color="neutral" value="100" />
      <${Cell} color="white" />
    </div>

    <div class="grid grid-cols-2 gap-px h-24">
      <${Cell} color="neutral" value="500" className="text-black" />
      <${Cell} color="neutral" />
    </div>

    <div class="grid grid-cols-2 gap-px h-24">
      <${Cell} color="red" value="400" />
      <${Cell} color="red" />
    </div>

    <div class="grid grid-cols-2 gap-px h-24">
      <${Cell} color="orange" value="400" />
      <${Cell} color="orange" />
    </div>

    <div class="grid grid-cols-2 gap-px h-24">
      <${Cell} color="yellow" value="400" />
      <${Cell} color="yellow" />
    </div>

    <div class="grid grid-cols-2 gap-px h-24">
      <${Cell} color="green" value="400" />
      <${Cell} color="green" />
    </div>

    <div class="grid grid-cols-2 gap-px h-24">
      <${Cell} color="aqua" value="400" />
      <${Cell} color="aqua" />
    </div>

    <div class="grid grid-cols-2 gap-px h-24">
      <${Cell} color="blue" value="400" />
      <${Cell} color="blue" />
    </div>

    <div class="grid grid-cols-2 gap-px h-24">
      <${Cell} color="violet" value="400" />
      <${Cell} color="violet" />
    </div>

    <div class="grid grid-cols-2 gap-px h-24">
      <${Cell} color="neutral" value="900" />
      <${Cell} color="black" className="text-white" />
    </div>
  </div>
`;
