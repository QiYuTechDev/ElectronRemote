const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    target: 'electron-main',

    mode: "development", // not in production
    // mode: "production", // production compile

    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: './src/index.ts',
    // Put your normal webpack index below here
    module:  {
        rules: require('./webpack.rules'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    },
};
