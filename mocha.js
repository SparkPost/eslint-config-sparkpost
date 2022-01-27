

module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 2021
  },
  plugins: ['mocha'],
  extends: ['sparkpost/index'],
  rules: {
    'max-params': 'off',
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-mocha-arrows': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-sibling-hooks': 'error'
  }
}
