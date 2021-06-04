const nodeExternals = require('webpack-node-externals');

const is_dev = require('./webpack.dev_check');

let externals = {};
// for development [exclude all node_modules]
if (is_dev) {
    externals = [nodeExternals()];
}

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
    module:    {
        rules: require('./webpack.rules'),
    },
    resolve:   {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    },
    externals: externals,
};
