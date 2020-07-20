import React from 'react';

export default function InlineCode({ children }) {
  return (
    <code className="bg-neutral-200 rounded py-px px-1 border border-neutral-300 leading-none">
      ${children}
    </code>
  );
}
