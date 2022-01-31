# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]
- There are no unreleased features at this time

## [3.0.0 - 2022-01-27][3.0.0]
### Added
- Mocha specific config for linting testing files.  This can be utilized by adding an `.eslintrc` file to your tests directory or adding an overrides
  section and extending `sparkpost/mocha` within it.
- TypeScript specific config for linting TypeScript projects. Typescript projects can now extend `sparkpost/typescript`.

### Updated
- Updated the required version of ESLint to be 8.7 or above

### Removed
- Removed TypeScript(TS) specific rules from the default config since they add TS dependencies to non-TS projects.  
  This will be followed by a TS specific linting config for TS projects that will potentially inherit base JS settings from this configuration.
- Moved Mocha specific plugins to be optional peer dependencies. This allows non-Mocha based projects to not install the Mocha plugins if they're not 
  needed. This has been replaced with a mocha specific config `sparkpost/mocha` which can be added to an `.eslintrc` file in the tests directory of 
  Mocha based projects.

[3.0.0]: https://github.com/sparkpost/eslint-config-sparkpost/compare/v2.1.2...v3.0.0
