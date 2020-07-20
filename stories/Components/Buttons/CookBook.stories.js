import React from 'react';

export default {
  title: 'Components/Buttons/CookBook',
};

export const Anchor = () => (
  <div className="flex space-x-2">
    <a href="#" className="fluid-button">
      I am a link
    </a>
    <a className="fluid-button appearance:disabled">I am a (disabled) link</a>
  </div>
);

export const ButtonGroup = () => (
  <div className="fluid-button-group">
    <button className="fluid-button">Left Button</button>
    <button className="fluid-button">Middle Button</button>
    <button className="fluid-button">Right Button</button>
  </div>
);

export const DarkMode = () => (
  <button className="fluid-button type:outline text-white">Click Me</button>
);
DarkMode.story = {
  parameters: {
    backgrounds: [{ name: 'dark', value: 'black', default: true }],
  },
};

export const ColorOverride = () => (
  <button className="fluid-button type:plain text-green-400 hover:text-green-500">Click Me</button>
);
