import React from 'react';
import { Destructive, Info, Confirm, Alert, Default } from '../Banners/Types.stories';

export default {
  title: 'Components/Banners',
};

export const AllTypes = () => (
  <div className="flex flex-col gap-4">
    <h4 className="heading-xs">Destructive</h4>
    <Destructive />
    <h4 className="heading-xs">Informative</h4>
    <Info />
    <h4 className="heading-xs">Confirmation</h4>
    <Confirm />
    <h4 className="heading-xs">Alert</h4>
    <Alert />
    <h4 className="heading-xs">Default</h4>
    <Default />
  </div>
);
