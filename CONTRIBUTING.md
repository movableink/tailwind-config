# Contributing

## Local Development

Since the definition of CSS styles out side of a specific project is a failure abstract process, Storybook is configured to provide a workspace for previewing and documenting how Tailwind's classes can and should be used.

After cloning this repository and installing the dependencies by running

```bash
yarn install
```

You can build and run Storybook through the following:

```bash
yarn build
yarn start
```

* `yarn build` creates the Tailwind stylesheet
* `yarn start` runs Storybook

If you change the Tailwind configuration, make sure to run `yarn build` again to re-build the CSS file.
