const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
    test: /\.css$/,
    use:  [{loader: 'style-loader'}, {loader: 'css-loader'}],
});

module.exports = {

    target: 'electron-renderer',

    mode: "development", // not in production
    // mode: "production", // production compile

    module:  {
        rules,
    },
    plugins: [...plugins, new NodePolyfillPlugin()],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    },
};
