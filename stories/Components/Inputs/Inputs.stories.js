import React from 'react';

export default {
  title: 'Components/Inputs',
};

export const Basic = () => (
  <input className="fluid-input" aria-label="A Text Input Field" placeholder="Fill Me In!" />
);

export const WithButtonPairings = () => (
  <div className="flex flex-col space-y-2">
    <div className="flex items-center space-x-2">
      <input
        className="fluid-input size:sm col-span-2"
        aria-label="A Small Input"
        placeholder="Fill Me In!"
      />
      <button className="fluid-button">Click Me</button>
    </div>

    <div className="flex items-center space-x-2">
      <input
        className="fluid-input col-span-2"
        aria-label="A Normal Input"
        placeholder="Fill Me In!"
      />
      <button className="fluid-button size:lg">Click Me</button>
    </div>
  </div>
);
