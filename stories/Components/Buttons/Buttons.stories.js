import React from 'react';

export default {
  title: 'Components/Buttons',
};

export const AllTypesAndStates = () => (
  <div className="grid grid-cols-6 gap-2">
    <div>
      <span>Basic</span>
    </div>
    <div>
      <button className="fluid-button">Default</button>
    </div>
    <div>
      <button className="fluid-button appearance:hovered">Hovered</button>
    </div>
    <div>
      <button className="fluid-button appearance:focused">Focused</button>
    </div>
    <div>
      <button className="fluid-button appearance:active">Active</button>
    </div>
    <div>
      <button className="fluid-button" disabled>
        Disabled
      </button>
    </div>

    <div>
      <span>Primary</span>
    </div>
    <div>
      <button className="fluid-button type:primary">Default</button>
    </div>
    <div>
      <button className="fluid-button type:primary appearance:hovered">Hovered</button>
    </div>
    <div>
      <button className="fluid-button type:primary appearance:focused">Focused</button>
    </div>
    <div>
      <button className="fluid-button type:primary appearance:active">Active</button>
    </div>
    <div>
      <button className="fluid-button type:primary" disabled>
        Disabled
      </button>
    </div>

    <div>
      <span>Outline</span>
    </div>
    <div>
      <button className="fluid-button type:outline">Default</button>
    </div>
    <div>
      <button className="fluid-button type:outline appearance:hovered">Hovered</button>
    </div>
    <div>
      <button className="fluid-button type:outline appearance:focused">Focused</button>
    </div>
    <div>
      <button className="fluid-button type:outline appearance:active">Active</button>
    </div>
    <div>
      <button className="fluid-button type:outline" disabled>
        Disabled
      </button>
    </div>

    <div>
      <span>Destructive</span>
    </div>
    <div>
      <button className="fluid-button type:destructive">Default</button>
    </div>
    <div>
      <button className="fluid-button type:destructive appearance:hovered">Hovered</button>
    </div>
    <div>
      <button className="fluid-button type:destructive appearance:focused">Focused</button>
    </div>
    <div>
      <button className="fluid-button type:destructive appearance:active">Active</button>
    </div>
    <div>
      <button className="fluid-button type:destructive" disabled>
        Disabled
      </button>
    </div>

    <div>
      <span>Plain</span>
    </div>
    <div>
      <button className="fluid-button type:plain">Default</button>
    </div>
    <div>
      <button className="fluid-button type:plain appearance:hovered">Hovered</button>
    </div>
    <div>
      <button className="fluid-button type:plain appearance:focused">Focused</button>
    </div>
    <div>
      <button className="fluid-button type:plain appearance:active">Active</button>
    </div>
    <div>
      <button className="fluid-button type:plain" disabled>
        Disabled
      </button>
    </div>
  </div>
);
