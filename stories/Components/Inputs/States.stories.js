import React from 'react';

export default {
  title: 'Components/Inputs/States',
};

export const Disabled = () => (
  <input
    aria-label="A Disabled Input"
    className="fluid-input"
    disabled
    placeholder="A Disabled Input"
  />
);

export const Invalid = () => (
  <input
    aria-label="An Invalid Input"
    className="fluid-input appearance:invalid"
    placeholder="An Input with Error"
  />
);

export const Warning = () => (
  <input
    aria-label="An Input with Warning"
    className="fluid-input appearance:warning"
    placeholder="An Input with Warning"
  />
);
