const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { mode }) => {
    // See: https://github.com/storybookjs/storybook/issues/3916#issuecomment-664349094
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '../src'),
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  },
  // See: https://github.com/styleguidist/react-docgen-typescript/issues/356#issuecomment-849067256
  typescript: {
    reactDocgen: 'none',
  },
};
