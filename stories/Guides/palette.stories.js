export default {
  title: 'Guides|Color',
  decorators: [storyFn => `<div class="m-4">${storyFn()}</div>`]
};

function Cell(color, value) {
  return `
    <div class="flex items-center justify-center bg-${color}-${value}">
      <code class="text-sm ${value > 400 ? 'text-white' : ''}">
        ${color}-${value}
      </code>
    </div>
  `;
}

export const Palette = () => `
  <h1 class="heading-md mb-2">Color Palette</h1>

  <div class="grid grid-cols-9 h-24 mb-4">
    ${Cell('neutral', 100)}
    ${Cell('neutral', 200)}
    ${Cell('neutral', 300)}
    ${Cell('neutral', 400)}
    ${Cell('neutral', 500)}
    ${Cell('neutral', 600)}
    ${Cell('neutral', 700)}
    ${Cell('neutral', 800)}
    ${Cell('neutral', 900)}
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    ${Cell('red', 100)}
    ${Cell('red', 200)}
    ${Cell('red', 300)}
    ${Cell('red', 400)}
    ${Cell('red', 500)}
    ${Cell('red', 600)}
    ${Cell('red', 700)}
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    ${Cell('orange', 100)}
    ${Cell('orange', 200)}
    ${Cell('orange', 300)}
    ${Cell('orange', 400)}
    ${Cell('orange', 500)}
    ${Cell('orange', 600)}
    ${Cell('orange', 700)}
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    ${Cell('yellow', 100)}
    ${Cell('yellow', 200)}
    ${Cell('yellow', 300)}
    ${Cell('yellow', 400)}
    ${Cell('yellow', 500)}
    ${Cell('yellow', 600)}
    ${Cell('yellow', 700)}
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    ${Cell('green', 100)}
    ${Cell('green', 200)}
    ${Cell('green', 300)}
    ${Cell('green', 400)}
    ${Cell('green', 500)}
    ${Cell('green', 600)}
    ${Cell('green', 700)}
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    ${Cell('aqua', 100)}
    ${Cell('aqua', 200)}
    ${Cell('aqua', 300)}
    ${Cell('aqua', 400)}
    ${Cell('aqua', 500)}
    ${Cell('aqua', 600)}
    ${Cell('aqua', 700)}
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    ${Cell('blue', 100)}
    ${Cell('blue', 200)}
    ${Cell('blue', 300)}
    ${Cell('blue', 400)}
    ${Cell('blue', 500)}
    ${Cell('blue', 600)}
    ${Cell('blue', 700)}
  </div>

  <div class="grid grid-cols-7 h-24 mb-4">
    ${Cell('violet', 100)}
    ${Cell('violet', 200)}
    ${Cell('violet', 300)}
    ${Cell('violet', 400)}
    ${Cell('violet', 500)}
    ${Cell('violet', 600)}
    ${Cell('violet', 700)}
  </div>
`;
