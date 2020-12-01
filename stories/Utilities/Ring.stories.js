import React from 'react';

export default {
  title: 'Utilities/Ring',
};

export const Outline = () => (
  <div className="flex space-x-2">
    <div className="bg-neutral-300 h-8 w-8 ring-2 ring-blue-200"></div>
    <div className="bg-neutral-300 h-8 w-8 ring-2 ring-red-200"></div>
    <div className="bg-neutral-300 h-8 w-8 ring-2 ring-yellow-200"></div>
  </div>
);
