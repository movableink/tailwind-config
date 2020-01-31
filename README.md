# `@movable/tailwind-config`

> [Tailwind][tailwind] configuration file for Movable Ink's Fluid Design System

_Note: if you wish to contribute to `@movable/tailwind-config`, please see our [contribution documentation](./CONTRIBUTING.md)._

## Installation

### Default Process

Tailwind provides good installation instructions on how to get set up with their tools, which you can find [here][tailwind-installation].

With the imports from Tailwind in place, you can leverage the Movable Ink configuration like so:

```javascript
// tailwind.config.js
module.exports = require('@movable/tailwind-config');
```

### Pre-Built File

For cases where you do not want to set up PostCSS or the Tailwind command line tool, a pre-built version of the Tailwind CSS is included in this package. Note that with this approach, you probably miss out on the ability to statically analyze your templates and remove any unused CSS classes.

#### From your dependencies

For tools that allow you to include a pre-existing CSS file into your application, this package includes a pre-built version of the CSS file that you can import. For example, if you are using `create-react-app`, you could add the following to your `src/index.js`

```javascript
import '@movable/tailwind-config/dist/fluid-tailwind.css';
```

And the CSS classes will be made available to you.

#### From a CDN

If you want to go even _simpler_, you can link against the pre-built CSS file on [`unpkg`][unpkg]. Include the following in the `head` of your document.

```html
<link
  rel="stylesheet"
  href="http://unpkg.com/@movable/tailwind-config/dist/fluid-tailwind.min.css"
/>
```

Note that with this approach, you will _always_ get the latest version of the Tailwind CSS -- even if there was a major version bump. See the `unpkg` documentation if you want to link against a specific version the package.

### Fonts

Regardless of which approach you take to including the Tailwind CSS into your application, you _also_ must link to the font definitions that we use as part of Fluid.

Include the following `link` in the `head` of your document, _before_ any other CSS files

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Open+Sans:400,600|Source+Code+Pro:400,600&display=swap"
/>
```

[tailwind]: https://tailwindcss.com
[tailwind-installation]: https://tailwindcss.com/docs/installation
[unpkg]: https://unpkg.com
