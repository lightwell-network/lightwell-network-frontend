const { insights } = require('./package.json');

const sassPrefix = insights.appname.replace(/-(\w)/g, (_, match) => match.toUpperCase());

module.exports = {
  appUrl: '/staging/lightwell',
  debug: true,
  useProxy: true,
  proxyVerbose: true,
  /**
   * Change accordingly to your appname in package.json.
   * The `sassPrefix` attribute is only required if your `appname` includes the dash `-` characters.
   * If the dash character is present, you will have add a camelCase version of it to the sassPrefix.
   * If it does not contain the dash character, remove this configuration.
   */
  sassPrefix: `.${sassPrefix}`,
  /**
   * Change to false after your app is registered in configuration files
   */
  interceptChromeConfig: false,
  /**
   * Add additional webpack plugins
   */
  plugins: [],
  hotReload: process.env.HOT === 'true',
  moduleFederation: {
    exposes: {
      './RootApp': './src/AppEntry',
      './frontendModules/useFedModulesStore':
        './src/hooks/sharedStores/useFedModulesStore',
      './frontendModules/useFedModulesFilter':
        './src/hooks/sharedStores/useFedModulesFilter',
    },
    shared: [],
  },
};
