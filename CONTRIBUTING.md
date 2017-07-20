# Contributing

Fork, commit and make a PR. Below are commands that help you with the development.

```shell
$ yarn build # Build code for other projects
$ yarn build:watch

$ yarn storybook # Start https://storybook.js.org/
$ yarn docs # Generate new docs

$ yarn test # Run Jest tests once
$ yarn test:watch
$ yarn test:update # Update outdated snapshots
$ yarn lint # Catch all JS weirdness
```

## Release

All you need to do is create a new release in GitHub. After that Travis automatically publishes a new version to NPM.
