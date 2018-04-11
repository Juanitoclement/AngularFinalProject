  // The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  algolia:
  {
    appId: 'EI3PP2XL9B',
    apiKey:'355e0dd3e49fcfe3e08112452be0845a',
    indexName:'users',
    urlSync:false,
  }
};
