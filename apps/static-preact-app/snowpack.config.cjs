module.exports = {
    root: './src',
    buildOptions: {
        out: '../../build'
    },
    plugins: ["@snowpack/plugin-typescript"],
    packageOptions: {
        types: true,
    },
    alias: {
        "~": "./apps",
        "~/public": "./public",

    },
    /*
        packageOptions: {
        polyfillNode: true
    },
    */
};