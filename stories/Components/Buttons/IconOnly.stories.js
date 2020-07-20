import React from 'react';
import Gear from '../../_icons/Gear';

export default {
  title: 'Components/Buttons/Icon Only',
};

export const Compact = () => (
  <button className="fluid-button size:xs" aria-label="Settings">
    <Gear />
  </button>
);

export const Small = () => (
  <button className="fluid-button size:sm" aria-label="Settings">
    <Gear />
  </button>
);

export const Base = () => (
  <button className="fluid-button" aria-label="Settings">
    <Gear />
  </button>
);

export const Large = () => (
  <button className="fluid-button size:lg" aria-label="Settings">
    <Gear />
  </button>
);

export const ExtraLarge = () => (
  <button className="fluid-button size:xl" aria-label="Settings">
    <Gear />
  </button>
);
