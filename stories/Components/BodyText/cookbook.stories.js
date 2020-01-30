export default {
  title: 'Components/Body Text|Cookbook',
  decorators: [storyFn => `<div style="margin: 16px">${storyFn()}</div>`]
};

export const OverridingFontWeight = () => `
  <p class="body-base font-bold">
    Base body class, but with bold text
  </p>
`;
