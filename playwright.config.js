// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

const ROOT_URL = process.env.ROOT_URL;

if (!ROOT_URL) {
  throw new Error(
    'No base url set, please set it in your envionrment before proceeding',
  );
}

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: ROOT_URL,
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
