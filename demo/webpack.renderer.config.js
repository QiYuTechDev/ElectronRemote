const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

const is_dev = require('./webpack.dev_check');

rules.push({
    test: /\.css$/,
    use:  [{loader: 'style-loader'}, {loader: 'css-loader'}],
});

let externals = {};
// for development
if (is_dev) {
    externals = [nodeExternals({allowlist: ['bulma/css/bulma.css']})];
}

module.exports = {

    target: 'electron-renderer',

    mode: "development", // not in production
    // mode: "production", // production compile

    module:  {
        rules,
    },
    plugins: [...plugins, new NodePolyfillPlugin({excludeAliases: ['process']})],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    },
    externals: externals,
};
