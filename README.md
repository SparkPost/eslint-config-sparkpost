# eslint-config-sparkpost
ESLint configuration for Javascript based SparkPost projects 

## Peer dependencies

### JS:
```npm i --save-dev eslint-plugin-mocha```

### Typescript:
```npm i --save-dev eslint-plugin-mocha @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript-eslint```

## Notes for Docs in Libraries

This config has extra rules specifically around JSDocs to help have better documentation in our libraries.  
This can help in knowledge sharing and will hopefully promote better docs in our shared JS modules. 

To use, add the following to your `.eslintrc.json`:
```json
{
  "extends": "sparkpost/lib"
}
```

for Typescript, add:

```json
{
  "extends": "sparkpost/tsc"
}
```

The scripts below in this README are purely for reference and can make managing documentation in your shared lib much easier. 

### Useful NPM scripts
```json
{
  "scripts": {
    "chk-changelog": "grep `node -e 'console.log(require(\"./package.json\").version);'` CHANGELOG.md || echo 'Please update CHANGELOG.md with your updates'; exit 255",
    "docs": "doxdox index.js 'mocks/**/*.js' 'lib/**/*.js' --layout markdown --output DOCUMENTATION.md",
    "lint": "eslint . --fix",
    "nice-docs": "doxdox 'index.js' 'mocks/**/*.js' 'lib/**/*.js' --layout bootstrap --output docs/index.html && open docs/index.html",
    "prepublishOnly": "npm run chk-changelog",
    "prepush": "npm run docs -- && git add DOCUMENTATION.md && if git commit --no-verify -m \"`git rev-parse --abbrev-ref HEAD` Updated Documentation\"; then exit 0; else echo 'No documentation updates'; fi "
  }
}
```

### Generating Docs
#### Install `doxdox`
```bash
npm i --save-dev doxdox
```

#### Add and modify the npm script.  
The list below (`index.js 'mocks/**/*.js 'lib/**/*.js`) will probably need to be changed for your lib.
```json
{
  "docs": "doxdox index.js 'mocks/**/*.js' 'lib/**/*.js' --layout markdown --output DOCUMENTATION.md"
}   
```

#### Run the script
```bash
npm run docs
```
This will generate a ./DOCUMENTATION.md file that will include all JSDoc references in your module. 

#### Auto generating the docs
Given that you have husky installed, adding an npm script for `prepush` will automatically generate and commit docs anytime you push to git.  
```json
{
  "prepush": "npm run docs -- && git add DOCUMENTATION.md && if git commit --no-verify -m \"`git rev-parse --abbrev-ref HEAD` Updated Documentation\"; then exit 0; else echo 'No documentation updates'; fi "
}
```

#### Generating nicer docs
I recommend adding docs to your gitignore if its not already there.
```bash
echo docs >> .gitignore
``` 

Add the npm script:
```json
{
  "nice-docs": "doxdox 'index.js' 'mocks/**/*.js' 'lib/**/*.js' --layout bootstrap --output docs/index.html && open docs/index.html" 
}
```

Run the npm script
```bash
npm run nice-docs
```

### Checking Changelogs
#### Add the npm scripts
```json
{
  "chk-changelog": "grep `node -e 'console.log(require(\"./package.json\").version);'` CHANGELOG.md || echo 'Please update CHANGELOG.md with your updates'; exit 255",
  "prepublishOnly": "npm run chk-changelog"
}
```
This will check your changelog for an entry for your current version when you publish.