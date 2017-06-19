# Contributing

Fork, commit and make a PR. Below are commands that help you with the development.

## Build

```shell
$ yarn build # Build both commonjs and umd packages

$ yarn build:commonjs # Build code for other projects
$ yarn build:commonjs:watch

$ yarn build:umd # Build code for demo page
$ yarn build:umd:watch
```

## Test

```shell
$ yarn test # Run Jest tests once
$ yarn test:watch
$ yarn test:update # Update outdated snapshots
$ yarn lint # Catch all JS weirdness
```
