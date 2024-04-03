/* eslint-disable @typescript-eslint/no-unused-vars */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'mtsong',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5000',
  },
});
