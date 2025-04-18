const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");
require("dotenv").config(); // Load environment variables

module.exports = defineConfig({
  projectId: "123344",
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    projectId: "uy5dd2",
    viewportWidth: 1366,
    viewportHeight: 768,
    pageLoadTimeout: 120000,
    video: true,
    videoUploadOnPasses: false,
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,

    env: {
      apiKey: "postmanrulz",
    },

    setupNodeEvents(on, config) {
      // Enable Mochawesome reporter plugin
      require("cypress-mochawesome-reporter/plugin")(on);

      // You can add custom tasks here later if needed
      return config;
    },
  },
});
