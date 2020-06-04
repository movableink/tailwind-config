module.exports = {
  addons: [
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register',
    '@whitespace/storybook-addon-html/register',
  ],
  stories: ['../stories/**/*.stories.[tj]s'],
};
