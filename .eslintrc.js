module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  env: {
    'browser': true,
    'es6': true,
    'node': true,
  },
  rules: {
    '@next/next/no-img-element': 'off', // For use <img /> tags.
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false
      }
    ],
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: false }
    ],
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-find-dom-node': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/self-closing-comp': 'error',
    'react/state-in-constructor': ['error', 'always'],
    'react/void-dom-elements-no-children': 'error',
  },
  plugins: ["simple-import-sort"],
  overrides: [
    {
      files: ["src/**/*.{js,jsx,ts,tsx}"],
      extends: [
        'eslint-config-prettier',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-unused-vars': 'error'
      },
    },
  ],
};
