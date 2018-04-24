# Hostmaker Exercise

## Requirements
* node `^8.8.1`
* yarn `^1.5.1` or npm `^5.4.2`

## Installation

Install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn dev  # Start the development server (or `npm run dev`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`dev`              |Serves your app at `localhost:3000` and api at `localhost:3001`|
|`start`            |Serves your app at `localhost:3000`|
|`build`            |Builds the application to ./dist|
|`server`           |Serves api at `localhost:3001`|
|`test`             |Runs unit tests with Karma. See [testing](#testing)|
|`test:watch`       |Runs `test` in watch mode to re-run tests when changed|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|
|`lint:fix`         |Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

## Live Development

### Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`yarn start`). This feature is implemented with webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) capabilities, where code updates can be injected to the application while it's running, no full reload required. Here's how it works:

* For **JavaScript** modules, a code change will trigger the application to re-render from the top of the tree. **Global state is preserved (i.e. redux), but any local component state is reset**. This differs from React Hot Loader, but we've found that performing a full re-render helps avoid subtle bugs caused by RHL patching.

* For **Sass**, any change will update the styles in realtime, no additional configuration or reload needed.

### Redux DevTools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn't require installing any packages in your project.

However, it's easy to bundle these developer tools locally should you choose to do so. First, grab the packages from npm:

```bash
yarn add --dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

## Routing
We use `react-router` [route definitions](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [project structure](#project-structure) section for more information.

