import { defineConfig } from '@packages/eslint-config';
import pluginNode from 'eslint-plugin-node';
import globals from 'globals';

export default defineConfig([
  {
    plugins: {
      node: pluginNode,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
