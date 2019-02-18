// @noflow
module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "prettier/flowtype",
    "plugin:relay/recommended",
    "plugin:flowtype/recommended",
    "plugin:fp/recommended",
  ],
  plugins: ["relay", "prettier", "flowtype", "fp"],
  env: {
    jest: true,
  },
  globals: {
    __: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        trailingComma: "all",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
        "newlines-between": "always",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["etc/**", "stories/**", "**/__tests__/*"],
      },
    ],
    "flowtype/require-valid-file-annotation": ["error", "always", { annotationStyle: "line" }],
    // OFF
    camelcase: "off", // GraphQL
    "fp/no-nil": "off", // Side effects
    "fp/no-class": "off", // React
    "fp/no-this": "off", // React
    "fp/no-mutation": "off", // React
    "fp/no-unused-expression": "off", // 'fs' calls, for example
    "flowtype/space-after-type-colon": "off", // Prettier conflict
    "react/default-props-match-prop-types": "off", // Flow/ESlint conflict
    "react/require-default-props": "off", // Somehow semantically wrong
    "jsx-a11y/anchor-is-valid": "off", // Relative paths bullshit
    "import/no-named-as-default": "off", // The fuck is wrong with it
  },
};
