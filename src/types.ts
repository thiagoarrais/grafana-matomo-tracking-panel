export interface MatomoOptions {
  urlBase: string;
  siteId: number;
}

export const defaults: MatomoOptions = {
  urlBase: 'https://yourinstance.matomo.cloud/',
  siteId: 1,
};
