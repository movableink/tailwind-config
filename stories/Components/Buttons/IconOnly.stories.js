import React from 'react';
import Gear from '../../_icons/Gear';

export default {
  title: 'Components/Buttons/Icon Only',
};

export const Compact = () => (
  <button className="fluid-button size:xs">
    <span className="sr-only">Settings</span>
    <Gear />
  </button>
);

export const Small = () => (
  <button className="fluid-button size:sm">
    <span className="sr-only">Settings</span>
    <Gear />
  </button>
);

export const Base = () => (
  <button className="fluid-button">
    <span className="sr-only">Settings</span>
    <Gear />
  </button>
);

export const Large = () => (
  <button className="fluid-button size:lg">
    <span className="sr-only">Settings</span>
    <Gear />
  </button>
);

export const ExtraLarge = () => (
  <button className="fluid-button size:xl">
    <span className="sr-only">Settings</span>
    <Gear />
  </button>
);
