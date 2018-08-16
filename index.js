'use strict';

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: 'eslint:recommended',
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    complexity: ['error', 5],
    'consistent-this': ['error', 'self'],
    curly: ['error', 'all'],
    'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
    'eol-last': 'error',
    eqeqeq: 'error',
    'func-names': ['error', 'as-needed'],
    indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 2 }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'linebreak-style': ['error', 'unix'],
    'max-params': ['error', 3],
    'new-cap': 'error',
    'no-caller': 'error',
    quotes: ['error', 'single'],
    'no-cond-assign': 'off',
    'no-debugger': 'off',
    'no-dupe-class-members': 'error',
    'no-empty': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-var': 'error',
    'no-with': 'error',
    'one-var': [
      'error',
      {
        var: 'always', // Exactly one var declaration per function
        let: 'always', // Exactly one let declaration per block
        const: 'never', // Exactly one declarator per const declaration per block
      },
    ],
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    semi: ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-return-throw-case': 'off',
    'space-unary-ops': 'off',
    strict: 'error',
    'template-curly-spacing': ['error', 'never'],
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'any'],
    yoda: ['error', 'never'],
  },
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'func-names': 'off',
        'prefer-arrow-callback': 'off',
      },
    },
  ],
};
