import { PanelOptionsEditorBuilder } from '@grafana/data';

import { MatomoOptions } from './types';

export const matomoOptions = (builder: PanelOptionsEditorBuilder<MatomoOptions>) =>
  builder
    .addTextInput({
      path: 'urlBase',
      name: 'Matomo URL',
      description: 'Base URL for Matomo instance',
      defaultValue: 'https://yourinstance.matomo.cloud/',
    })
    .addNumberInput({
      path: 'siteId',
      name: 'Site ID',
      description: 'Site ID identifying the Grafana instance in Matomo',
      defaultValue: 1,
    });
