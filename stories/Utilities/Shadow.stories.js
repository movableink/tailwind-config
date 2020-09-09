import React from 'react';

export default {
  title: 'Utilities/Shadow',
};

export const Outline = () => (
  <div className="flex space-x-2">
    <div className="bg-neutral-300 h-8 w-8 shadow-outline-blue-300"></div>
    <div className="bg-neutral-300 h-8 w-8 shadow-outline-red-200"></div>
    <div className="bg-neutral-300 h-8 w-8 shadow-outline-yellow-200"></div>
  </div>
);
