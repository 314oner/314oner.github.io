const path = require('path');
//const ROOT = __dirname;
//const ROOT_SRC = path.join(__dirname, '/src');
//const BUILD_SRC = path.join(__dirname, '/build');
const WORKSPACE = path.join(__dirname, '..');
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: './src',
  //root: ROOT_SRC,
  //workspaceRoot: '/',
  //mount: {
  //    public: { url: "/", static: true, dot: true }, //snowpack ignoring .jekyll
  //src: BUILD_SRC //home/~
  //},
  workspaceRoot: WORKSPACE,
  buildOptions: {
    baseUrl: '/314oner.github.io',
    out: '../build',
  },
  alias: {
    /* ... */
  },
  plugins: ['@snowpack/plugin-typescript', '@snowpack/plugin-react-refresh'],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
};
