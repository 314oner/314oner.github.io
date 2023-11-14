// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    root: './src',
    workspaceRoot: '/',
    /*
    alias: {
      '@client': './src/client',
      '@server': './src/server',
    },
    */
    plugins: ['@snowpack/plugin-react-refresh'],
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        out: '../../build'
    }
};