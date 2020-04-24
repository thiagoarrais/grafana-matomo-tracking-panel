import { PanelPlugin } from '@grafana/data';
import { MatomoOptions, defaults } from './types';
import { MatomoPanel } from './MatomoPanel';
import { MatomoEditor } from './MatomoEditor';

export const plugin = new PanelPlugin<MatomoOptions>(MatomoPanel).setDefaults(defaults).setEditor(MatomoEditor);
