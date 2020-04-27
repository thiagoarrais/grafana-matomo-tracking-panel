# Matomo Tracking Panel
[![CircleCI](https://circleci.com/gh/thiagoarrais/grafana-matomo-tracking-panel.svg?style=svg)](https://circleci.com/gh/thiagoarrais/grafana-matomo-tracking-panel)
[![David Dependency Status](https://david-dm.org/thiagoarrais/grafana-matomo-tracking-panel.svg)](https://david-dm.org/thiagoarrais/grafana-matomo-tracking-panel)
[![David Dev Dependency Status](https://david-dm.org/thiagoarrais/grafana-matomo-tracking-panel.svg)](https://david-dm.org/thiagoarrais/grafana-matomo-tracking-panel/?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/thiagoarrais/grafana-matomo-tracking-panel/badge.svg?targetFile=package.json)](https://snyk.io/test/github/thiagoarrais/grafana-matomo-tracking-panel?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/f2ebaebad8ce1ddb293c/maintainability)](https://codeclimate.com/github/thiagoarrais/grafana-matomo-tracking-panel/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f2ebaebad8ce1ddb293c/test_coverage)](https://codeclimate.com/github/thiagoarrais/grafana-matomo-tracking-panel/test_coverage)

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
