import React from 'react';

export default {
  title: 'Components/Button Group',
};

export const Basic = () => (
  <div className="fluid-button-group">
    <button className="fluid-button">Left</button>
    <button className="fluid-button">Center</button>
    <button className="fluid-button">Right</button>
  </div>
);

export const Plain = () => (
  <div className="fluid-button-group">
    <button className="fluid-button type:plain">Left</button>
    <button className="fluid-button type:plain">Center</button>
    <button className="fluid-button type:plain">Right</button>
  </div>
);
