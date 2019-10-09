// @flow strict

// eslint-disable-next-line no-console
console.warn("! Nitro Eslint config is deprecated. Use '@kiwicom/eslint-config/nitro' instead.");

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
    'plugin:relay/recommended',
    'plugin:flowtype/recommended',
    'plugin:fp/recommended',
  ],
  plugins: ['relay', 'prettier', 'flowtype', 'fp', 'react-hooks'],
  env: {
    jest: true,
  },
  globals: {
    __: true,
  },
  rules: {
    // Stuff that really needs to be custom
    // ---
    'prettier/prettier': [
      'error',
      {
        printWidth: 100, // Flow adds code width
        trailingComma: 'all',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['etc/**', 'stories/**', '**/__tests__/*'],
      },
    ],
    'flowtype/require-valid-file-annotation': ['error', 'always', { annotationStyle: 'line' }],

    // OFF
    // ---
    camelcase: 'off', // GraphQL
    'fp/no-nil': 'off', // Side effects
    'fp/no-class': 'off', // React
    'fp/no-this': 'off', // React
    'fp/no-mutation': 'off', // React
    'fp/no-unused-expression': 'off', // 'fs' calls, for example
    'flowtype/space-after-type-colon': 'off', // Prettier conflict
    'react/default-props-match-prop-types': 'off', // Flow/ESlint conflict
    'react/require-default-props': 'off', // Somehow semantically wrong
    'jsx-a11y/anchor-is-valid': 'off', // Relative paths bullshit
    'import/no-named-as-default': 'off', // The fuck is wrong with it
    'no-unused-expressions': 'off', // use flowtype/no-unused-expressions instead to allow (x: empty)
    'flowtype/no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
};
