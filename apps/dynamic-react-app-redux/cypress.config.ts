import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'fluxapp',
  e2e: {
    setupNodeEvents() {},
    baseUrl: 'http://localhost:5001',
  },
});
