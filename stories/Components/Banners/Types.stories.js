import React from 'react';
import ArchiveIcon from '../../_icons/Archive';
import DestructiveIcon from '../../_icons/Destructive';
import InfoIcon from '../../_icons/Info';
import ConfirmIcon from '../../_icons/Confirm';
import AlertIcon from '../../_icons/Alert';
import CloseIcon from '../../_icons/Close';

export default {
  title: 'Components/Banners/Types',
};

export const Destructive = () => (
  <div className="flex flex-row gap-4 justify-items-center w-full">
    <div className="fluid-banner type:destructive w-1/3">
      <DestructiveIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Destructive</h4>

        <p>Both Icon & Close</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>

    <div className="fluid-banner type:destructive w-1/3">
      <DestructiveIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Destructive</h4>

        <p>Without Close</p>
      </div>
    </div>

    <div className="fluid-banner type:destructive w-1/3">
      <div className="fluid-banner--content">
        <h4>Destructive</h4>

        <p>Without Icon</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>
  </div>
);

export const Info = () => (
  <div className="flex flex-row gap-4 justify-items-center w-full">
    <div className="fluid-banner type:info w-1/3">
      <InfoIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Info</h4>

        <p>Both Icon & Close</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>

    <div className="fluid-banner type:info w-1/3">
      <InfoIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Info</h4>

        <p>Without Close</p>
      </div>
    </div>

    <div className="fluid-banner type:info w-1/3">
      <div className="fluid-banner--content">
        <h4>Info</h4>

        <p>Without Icon</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>
  </div>
);

export const Confirm = () => (
  <div className="flex flex-row gap-4 justify-items-center w-full">
    <div className="fluid-banner type:confirm w-1/3">
      <ConfirmIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Confirm</h4>

        <p>Both Icon & Close</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>

    <div className="fluid-banner type:confirm w-1/3">
      <ConfirmIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Confirm</h4>

        <p>Without Close</p>
      </div>
    </div>

    <div className="fluid-banner type:confirm w-1/3">
      <div className="fluid-banner--content">
        <h4>Confirm</h4>

        <p>Without Icon</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>
  </div>
);

export const Alert = () => (
  <div className="flex flex-row gap-4 justify-items-center w-full">
    <div className="fluid-banner type:alert w-1/3">
      <AlertIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Alert</h4>

        <p>Both Icon & Close</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>

    <div className="fluid-banner type:alert w-1/3">
      <AlertIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Alert</h4>

        <p>Without Close</p>
      </div>
    </div>

    <div className="fluid-banner type:alert w-1/3">
      <div className="fluid-banner--content">
        <h4>Alert</h4>

        <p>Without Icon</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>
  </div>
);

export const Default = () => (
  <div className="flex flex-row gap-4 justify-items-center w-full">
    <div className="fluid-banner w-1/3">
      <ArchiveIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Default</h4>

        <p>Both Icon & Close</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>

    <div className="fluid-banner w-1/3">
      <ArchiveIcon className="fluid-banner--icon" />
      <div className="fluid-banner--content">
        <h4>Default</h4>

        <p>Without Close</p>
      </div>
    </div>

    <div className="fluid-banner w-1/3">
      <div className="fluid-banner--content">
        <h4>Default</h4>

        <p>Without Icon</p>
      </div>
      <CloseIcon className="fluid-banner--close" />
    </div>
  </div>
);
