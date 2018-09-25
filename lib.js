module.exports = {
  parserOptions: {
    sourceType: "module"
  },
  extends: "sparkpost/api",
  rules: {
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true
        }
      }
    ],
    "valid-jsdoc": [
      "error",
      {
        prefer: {
          return: "returns",
          arg: "param",
          argument: "param"
        },
        preferType: {
          Boolean: "boolean",
          Number: "number",
          object: "Object",
          String: "string"
        },
        requireReturn: false,
        requireReturnType: true,
        matchDescription: ".+",
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ]
  },
  overrides: [
    {
      files: ["*.spec.js"],
      rules: {
        "require-jsdoc": "off",
        "valid-jsdoc": "off"
      }
    }
  ]
};
