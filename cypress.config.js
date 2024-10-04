import react from '@vitejs/plugin-react';
import { defineConfig } from 'cypress';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,

  component: {
    supportFile: 'cypress/support/component.jsx',
    specPattern: [
      'apps/dynamic-react-app-redux/**/*.cy.{js,jsx,ts,tsx}',
      'apps/web/**/*.cy.{js,jsx,ts,tsx}',
    ],
    excludeSpecPattern: ['cypress/**/*.*'],
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        define: {
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        },
        plugins: [react(), tsconfigPaths()],
      },
    },
  },
});
