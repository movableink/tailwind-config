export default {
  title: 'Components/Body Text|Cookbook',
  decorators: [storyFn => `<div class="m-4">${storyFn()}</div>`]
};

export const OverridingFontWeight = () => `
  <p class="body-base font-bold">
    Base body class, but with bold text
  </p>
`;
