const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "results/junit-[hash].xml",
    toConsole: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});