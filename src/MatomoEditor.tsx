import React, { PureComponent } from 'react';
import { FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { MatomoOptions } from './types';

export class MatomoEditor extends PureComponent<PanelEditorProps<MatomoOptions>> {
  onTextChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, urlBase: target.value });
  };

  onIdChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, siteId: target.value });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Display</h5>
        <FormField type="text" label="Matomo URL" labelWidth={5} inputWidth={20} onChange={this.onTextChanged} value={options.urlBase || ''} />
        <FormField type="text" label="Site ID" labelWidth={5} inputWidth={20} onChange={this.onIdChanged} value={options.siteId || 0} />
      </div>
    );
  }
}
