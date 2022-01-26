# eslint-config-sparkpost
ESLint configuration for Javascript based SparkPost projects 

## Updating from Version 2 to Version 3


## Notes for Docs in Libraries
This config has extra rules specifically around JSDocs to help have better documentation in our libraries.  
This can help in knowledge sharing and will hopefully promote better docs in our shared JS modules. 

To use, add the following to your `.eslintrc` file:
```json
{
  "extends": "sparkpost/lib"
}
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
