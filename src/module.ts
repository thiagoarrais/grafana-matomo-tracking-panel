import { PanelPlugin } from '@grafana/data';
import { MatomoOptions } from './types';
import { MatomoPanel } from './MatomoPanel';
import { matomoOptions } from './matomoOptions';

export const plugin = new PanelPlugin<MatomoOptions>(MatomoPanel).setPanelOptions(matomoOptions);
