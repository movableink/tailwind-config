export default {
  title: 'Utilities|Color/Text',
  decorators: [storyFn => `<div class="m-4">${storyFn()}</div>`]
};

export const ChangeOnHover = () => `
  <p class="text-red hover:text-blue">
    Hover me for blue text!
  </p>
`;
