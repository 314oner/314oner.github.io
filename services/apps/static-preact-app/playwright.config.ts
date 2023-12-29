import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./test/global-setup'),
  testDir: 'test/spec',
  workers: 5,
  retries: 1,
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    baseURL: process.env.BASE_URL || 'http://localhost:5000',
    storageState: 'test/storage-state.json'
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
  ]
}

export default config
