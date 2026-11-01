const { defineConfig } = require("cypress");
const { beforeRunHook } = require('cypress-mochawesome-reporter/lib')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultBrowser: 'chrome',
  e2e: {
    baseUrl: "https://automationexercise.com",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      require('cypress-mochawesome-reporter/plugin')(on),
      on('before:run', async (details) => {
        console.log('override before:run')
        await beforeRunHook(details)
      })
    },
    blockHosts: ["*googlesyndication.com", "*googleads.g.doubleclick.net", "*adtrafficquality.google"]
  },
});
