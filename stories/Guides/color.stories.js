import { html } from 'htm/preact';

const colorConfig = require('../../config/colors');

const colors = Object.keys(colorConfig).filter((color) => typeof colorConfig[color] === 'object');
const aliases = Object.keys(colorConfig).filter((color) => typeof colorConfig[color] === 'string');

function getGlobalAlaisForHex(hex) {
  return aliases.find((alias) => colorConfig[alias] === hex);
}

export default {
  title: 'Guides/Color',
};

export const Palette = () => html`
  <h1 class="heading-md mb-2">Color Palette</h1>

  <div class="grid grid-cols-3 gap-4">
    ${colors.map((color) => {
      const colorValues = colorConfig[color];
      const values = Object.keys(colorValues).filter((value) => value !== 'default');
      const defaultValue = values.find((value) => colorValues[value] === colorValues['default']);

      return html`
        <div>
          ${values.map((value) => {
            const hex = colorValues[value];
            const identifier = `${color}-${value}`;
            const alias = getGlobalAlaisForHex(hex) || (value === defaultValue ? color : undefined);
            let className = '';

            if (value === defaultValue) {
              className = 'py-4';
            }

            if (value >= defaultValue) {
              className += ' text-white';
            }

            return html`
              <div class="flex items-center justify-between p-2 bg-${identifier} ${className}">
                <code class="text-sm">
                  ${alias ? `${alias} (${identifier})` : identifier}
                </code>

                <code class="text-sm">
                  ${hex}
                </code>
              </div>
            `;
          })}
        </div>
      `;
    })}
  </div>
`;
