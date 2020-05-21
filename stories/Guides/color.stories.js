import { html } from 'htm/preact';
import Code from '../_utils/InlineCode';

const colorConfig = require('../../config/colors');

const colors = Object.keys(colorConfig).filter((color) => color !== 'white' && color !== 'black');

export default {
  title: 'Guides|Color',
};

function Cell({ color, value, hex, className = '' }) {
  const identifier = value ? `${color}-${value}` : color;

  return html`
    <div class="flex items-center justify-between p-2 bg-${identifier} ${className}">
      <code class="text-sm">
        ${identifier}
      </code>

      <code class="text-sm">
        ${hex}
      </code>
    </div>
  `;
}

export const Palette = () => html`
  <h1 class="heading-md mb-2">Color Palette</h1>

  <div class="grid grid-cols-3 gap-4">
    ${colors.map((color) => {
      const colorValues = colorConfig[color];
      const values = Object.keys(colorValues).filter((value) => value !== 'default');
      const defaultValue = values.find((value) => colorValues[value] === colorValues['default']);

      return html`
        <div class="">
          ${values.map((value) => {
            let className = '';

            if (value === defaultValue) {
              className = 'py-4';
            }

            if (value >= defaultValue) {
              className += ' text-white';
            }

            return html` <${Cell}
              className=${className}
              color=${color}
              value=${value === defaultValue ? undefined : value}
              hex=${colorValues[value]}
            />`;
          })}
        </div>
      `;
    })}
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
