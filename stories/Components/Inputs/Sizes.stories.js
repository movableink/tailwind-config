import React from 'react';

export default {
  title: 'Components/Inputs/Sizes',
};

export const Default = () => (
  <input className="fluid-input" aria-label="A Normal Input" placeholder="Fill Me In!" />
);

export const Small = () => (
  <input className="fluid-input size:sm" aria-label="A Small Input" placeholder="Fill Me In!" />
);
