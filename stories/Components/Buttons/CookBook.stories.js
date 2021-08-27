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
DarkMode.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const ColorOverride = () => (
  <div className="flex space-x-2">
    <button className="fluid-button type:plain text-green-400 hover:text-green-500">
      Text Color
    </button>
    <button className="fluid-button type:plain bg-green-400 hover:bg-green-500">
      Background Color
    </button>
  </div>
);

export const OverflowWithEllipsis = () => (
  <button className="fluid-button w-20">
    <span className="overflow-hidden overflow-ellipsis">My Content is Pretty Long</span>
  </button>
);
