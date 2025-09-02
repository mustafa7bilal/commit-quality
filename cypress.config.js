const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://commitquality.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/reports/junit/test-[hash].xml",
    toConsole: true,
  },
});
