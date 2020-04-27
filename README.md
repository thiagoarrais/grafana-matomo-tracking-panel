# Matomo Tracking Panel
[![CircleCI](https://circleci.com/gh/grafana/simple-react-panel.svg?style=svg)](https://circleci.com/gh/grafana/simple-react-panel)
[![David Dependency Status](https://david-dm.org/grafana/simple-react-panel.svg)](https://david-dm.org/grafana/simple-react-panel)
[![David Dev Dependency Status](https://david-dm.org/grafana/simple-react-panel/dev-status.svg)](https://david-dm.org/grafana/simple-react-panel/?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/grafana/simple-react-panel/badge.svg)](https://snyk.io/test/github/grafana/simple-react-panel)
[![Maintainability](https://api.codeclimate.com/v1/badges/1dee2585eb412f913cbb/maintainability)](https://codeclimate.com/github/grafana/simple-react-panel/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1dee2585eb412f913cbb/test_coverage)](https://codeclimate.com/github/grafana/simple-react-panel/test_coverage)

This panel allows Grafana dashboard usage to be tracked using [Matomo][matomo]. It does only tracking and has no visible UI elements.

## Usage

Include only one panel per dashboard that should be tracked. Use the configuration editor to set your Matomo URL and Site ID.

The panel does not have any visible UI. We suggest that it should be resized to a minimal.


## Developing

First, install dependencies:

```BASH
yarn install
```

To work with this plugin run:

```BASH
yarn dev
```

or

```BASH
yarn watch
```

This will run linting tools and apply prettier fix.

To build the plugin run:

```BASH
yarn build
```

General info on Grafana Plugin building can be found at the [Grafana Plugin Developer Guide](https://grafana.com/docs/grafana/latest/plugins/developing/development/)

[matomo]: https://matomo.org/
