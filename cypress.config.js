const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'mochawesome',
  env: {
    url: 'https://vac-crdv-stg.apps.cic.gc.ca/en/',
  },
  projectId: 'tuhfw1',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
