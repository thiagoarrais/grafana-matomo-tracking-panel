import React, { useEffect } from 'react';
import { PanelProps } from '@grafana/data';
import { MatomoOptions } from 'types';
import { MatomoProvider, createInstance, useMatomo } from '@jonkoops/matomo-tracker-react';

interface Props extends PanelProps<MatomoOptions> {}

const PanelImpl = (props: Props) => {
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView({});
  });

  return <div />;
};

const MatomoPanel = (props: Props) => {
  const { options } = props;

  const matomoInstance = createInstance(options);

  return (
    <MatomoProvider value={matomoInstance}>
      <PanelImpl {...props} />
    </MatomoProvider>
  );
};

export { MatomoPanel };
