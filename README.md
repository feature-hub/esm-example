# Feature Hub ESM Example

This example demonstrates how to load a Feature App that is bundled as an
ECMAScript module (ESM).

Between the Integrator and the Feature App, the dependency `react` is shared.
It's also loaded as ESM, as specified in an `importmap` within the HTML
document.

## Getting Started

1. **Install Dependencies**:

   ```
   npm install
   ```

2. **Start the Server**:

   ```
   npm start
   ```

   To start the server in production mode run:

   ```
   NODE_ENV=production npm start
   ```

## Caveats

~~In this simple example, `react-dom` doesn't necessarily have to be a shared
dependency, as the Feature App doesn't utilize it. However, if we don't load it
as an ESM and instead bundle it within the integrator bundle, it will attempt to
use `require` to load `react` rather than `import`, leading to a failure. In
contrast, the ESM version of `react-dom` uses an `import` statement.
Unfortunately, esbuild doesn't transform the `require` statements in the way
that Webpack does. This discrepancy can pose issues in more complex real-world
applications, where other dependencies might want to `require` react.~~ This
issue is resolved by leveraging `@hyrious/esbuild-plugin-commonjs` to transform
the `require` statements to `import` statements.

Older versions of Safari lack support for both `importmap` and `modulepreload`.
As a workaround, this example incorporates an ES modules shim to ensure
compatibility with these browsers.
