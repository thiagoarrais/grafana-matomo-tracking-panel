# Matomo Tracking Panel

Like a tracking pixel, but it is a Grafana Panel.

This panel allows Grafana dashboard usage to be tracked using [Matomo][matomo]. It does only tracking and has minimal visible presence.

This is independently developed. It is not an official Matomo product, and is not affiliated with, or sponsored by, Matomo.

## Requirements

Compatible with Grafana 7.x

## Installation

Install by using grafana-cli

```
grafana-cli plugins install thiagoarrais-matomotracking-panel
```

## Usage

Include only one panel per dashboard that should be tracked. Use the configuration editor to set the URL for your Matomo instance and your site ID.

The panel does not have any visible UI. We suggest that it should be resized to a minimal.

## Credits

Sponsored by [Serpro](https://www.serpro.gov.br)

[matomo]: https://matomo.org/
