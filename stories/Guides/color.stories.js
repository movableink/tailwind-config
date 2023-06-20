import React from 'react';

const colorConfig = require('../../config/colors');

const colors = Object.keys(colorConfig).filter((color) => typeof colorConfig[color] === 'object');
const aliases = Object.keys(colorConfig).filter((color) => typeof colorConfig[color] === 'string');

function getGlobalAlaisForHex(hex) {
  return aliases.find((alias) => colorConfig[alias] === hex);
}

function getContrastRatio(color1, color2) {
  // Convert colors to RGB
  function hexToRgb(hex) {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    return [r, g, b];
  }

  // Calculate the relative luminance of a color
  function getRelativeLuminance(rgb) {
    const [r, g, b] = rgb.map((c) => {
      const sRGB = c / 255;
      return sRGB <= 0.03928 ? sRGB / 12.92 : ((sRGB + 0.055) / 1.055) ** 2.4;
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  // Calculate the contrast ratio
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  const luminance1 = getRelativeLuminance([r1, g1, b1]);
  const luminance2 = getRelativeLuminance([r2, g2, b2]);

  const contrastRatio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
  return contrastRatio.toFixed(2);
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

              const whiteContrast = getContrastRatio(hex, '#FFFFFF');

              if (value === defaultValue) {
                className = 'py-4';
              }

              if (whiteContrast >= 4.5) {
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
