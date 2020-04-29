'use strict';

module.exports = {
  extends: [
    'sparkpost/lib',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/indent": [
      "error",
      2
    ],
  }
};
