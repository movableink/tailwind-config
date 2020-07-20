import React from 'react';
import Gear from '../../_icons/Gear';

export default {
  title: 'Components/Buttons/Icon with Text',
};

export const Compact = () => (
  <button className="fluid-button size:xs">
    <span>Settings</span>
    <Gear />
  </button>
);

export const Small = () => (
  <button className="fluid-button size:sm">
    <span>Settings</span>
    <Gear />
  </button>
);

export const Base = () => (
  <button className="fluid-button">
    <span>Settings</span>
    <Gear />
  </button>
);

export const Large = () => (
  <button className="fluid-button size:lg">
    <span>Settings</span>
    <Gear />
  </button>
);

export const ExtraLarge = () => (
  <button className="fluid-button size:xl">
    <span>Settings</span>
    <Gear />
  </button>
);
