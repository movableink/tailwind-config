import React from 'react';

const colorConfig = require('../../config/colors');

const colors = Object.keys(colorConfig).filter((color) => typeof colorConfig[color] === 'object');
const aliases = Object.keys(colorConfig).filter((color) => typeof colorConfig[color] === 'string');

function getGlobalAlaisForHex(hex) {
  return aliases.find((alias) => colorConfig[alias] === hex);
}

export default {
  title: 'Guides/Color',
};

export const Palette = () => (
  <>
    <h1 className="heading-md mb-2">Color Palette</h1>

    <div className="grid grid-cols-3 gap-4">
      {colors.map((color) => {
        const colorValues = colorConfig[color];
        const values = Object.keys(colorValues).filter((value) => value !== 'DEFAULT');
        const defaultValue = values.find((value) => colorValues[value] === colorValues['DEFAULT']);

        return (
          <div key={color}>
            {values.map((value) => {
              const hex = colorValues[value];
              const identifier = `${color}-${value}`;
              const alias =
                getGlobalAlaisForHex(hex) || (value === defaultValue ? color : undefined);
              let className = '';

              if (value === defaultValue) {
                className = 'py-4';
              }

              if (value >= defaultValue) {
                className += ' text-white';
              }

              return (
                <div
                  key={identifier}
                  className={`flex items-center justify-between p-2 bg-${identifier} ${className}`}
                >
                  <code className="text-sm">{alias ? `${alias} (${identifier})` : identifier}</code>
                  <code className="text-sm">{hex}</code>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  </>
);
