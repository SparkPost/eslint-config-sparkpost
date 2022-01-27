# eslint-config-sparkpost
ESLint configuration for Javascript and TypeScript based SparkPost projects 

## Updating from 2.x to 3.x
There were several breaking changes including moving from ESLint 5.x to ESLint 8.x.  This change alone caused some minimal breaking changes.  Since 
we ultimately extend `eslint:recommended` in our base configuration, the upgrade from eslint 5.x to 8.x changed that 'recommended' config and the 
rules between versions have definitely changed.  We compensated to match our existing config as best we could, but you may find other changes when 
running ESLint in your projects.

We also moved several specific configs from overrides in the base config to their own specific configs. Mocha and TypeScript are used by some projects, 
however they are not used by every project so we have separated them to their own configs and moved their dependencies to optional peer dependencies
so that we no longer need to install and maintain them in projects that don't use them. 

### Special Concerns for Mocha Based Projects
Traditionally we've setup special rules for `mocha` based projects, however not all projects use `mocha`.  This would lead to dependencies being 
installed that were unrelated to the project.  For this reason, we have split `mocha` configuration into its own configuration.  You can take 
advantage of it by extending `sparkpost/mocha` from this package.  This will require you to install the plugin `eslint-plugin-mocha` in the project's 
dev dependencies.

Example:
```shell
npm i -D eslint-plugin-mocha
```
In your `.eslintrc` file: 
```json
{
  "normal": "stuff <- comment",
  "overrides": [
    {
      "files": ["test/**/*.spec.js"],
      "extends": ["sparkpost/mocha"]
    }
  ]
}
```

### Special Concerns for TypeScript Projects
We have several `typescript` based projects, however not all projects use `typescript`.  This would lead to dependencies being
installed that were unrelated to the project.  For this reason, we have split `typescript` configuration into its own configuration.  You can take
advantage of it by extending `sparkpost/typescript` from this package.  This will require you to install several plugins and configs in the project's
dev dependencies.

Example:
```shell
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier
```
In your `.eslintrc` file:
```json
{
  "normal": "stuff <- comment",
  "extends": ["sparkpost/typescript"],
  "rules": {
    "other": "rules that override the base typescript config <- comment"
  }
}
```

## Docs in Libraries
This config has extra rules specifically around JSDocs to help have better documentation in our libraries.  
This can help in knowledge sharing and will hopefully promote better docs in our shared JS modules. 

To use, add the following to your `.eslintrc` file:
```json
{
  "extends": "sparkpost/lib"
}
```

### Automation for Checking Changelogs
#### Add the npm scripts
```json
{
  "chk-changelog": "grep `node -e 'console.log(require(\"./package.json\").version);'` CHANGELOG.md || echo 'Please update CHANGELOG.md with your updates'; exit 255",
  "prepublishOnly": "npm run chk-changelog"
}
```
This will check your changelog for an entry for your current version when you publish.
