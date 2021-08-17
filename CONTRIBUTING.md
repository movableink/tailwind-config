# Contributing

## Local Development

Since the definition of CSS styles out side of a specific project is a failure abstract process, Storybook is configured to provide a workspace for previewing and documenting how Tailwind's classes can and should be used.

After cloning this repository and installing the dependencies by running

```bash
yarn install
```

In one terminal window, run the following to build the Tailwind output and automatically re-build when any input files change:

```bash
yarn build --watch
```

In another terminal window, run the following to start Storybook and create a development environment for the Tailwind config:

```bash
yarn storybook
```

## Conventional Commits

Each commit should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) pattern, so that we can use tools that automatically generate a `CHANGELOG` for us.

## Publishing a Version

Releases are published automatically using GitHub Actions. They are automatically published monthly, but can be manually triggered as well. Check out the GitHub "release" action to manually trigger the release workflow.
