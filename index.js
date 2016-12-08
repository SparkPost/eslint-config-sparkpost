module.exports = {
  "env": {
    "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "prefer-const": "warn",
    "no-var": "warn",
    "prefer-template": "warn",
    "prefer-arrow-callback": ["error", { "allowNamedFunctions": true }],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "arrow-body-style": ["error", "as-needed"],
    "no-dupe-class-members": "error",
    "template-curly-spacing": ["error", "never"],
    "strict": "error",
    "camelcase": [
      "error",
      {
        "properties": "never"
      }
    ],
    "consistent-this": [
      "error",
      "self"
    ],
    "curly": [
      "error",
      "all"
    ],
    "eqeqeq": "error",
    "wrap-iife": [
      "error",
      "any"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "new-cap": "error",
    "no-caller": "error",
      "quotes": [
      "error",
      "single"
    ],
    "no-undef": "error",
    "no-unused-vars": "error",
    "semi": [
      "error",
      "always"
    ],
    "no-cond-assign": "off",
    "no-debugger": "off",
    "comma-style": [
      "error",
      "first",
      {
        "exceptions": {
          "ArrayExpression": true,
          "ObjectExpression": true
        }
      }
    ],
    "complexity": [
      "error",
      5
    ],
    "no-empty": "error",
    "no-with": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "operator-linebreak": [
      "error",
      "after"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "space-unary-ops": "off",
    "no-spaced-func": "error",
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "no-trailing-spaces": "error",
    "yoda": [
      "error",
      "never"
    ],
    "dot-notation": [
      "error",
      {
        "allowPattern": "^[a-z]+(_[a-z]+)+$"
      }
    ],
    "eol-last": "error",
    "vars-on-top": "error",
    "one-var": [
      "error",
      "always"
    ],
    "space-return-throw-case": "off",
    "space-infix-ops": "error",
    "space-before-blocks": [
      "error",
      "always"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ]
  }
};
