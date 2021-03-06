module.exports = [
    // Add support for native node modules
    {
        test: /\.node$/,
        use:  'node-loader',
    },
    {
        test: /\.s[ac]ss$/i,
        use:  [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ],
    },
    {
        test:   /\.(m?js|node)$/,
        parser: {amd: false},
        use:    {
            loader:  '@vercel/webpack-asset-relocator-loader',
            options: {
                outputAssetBase: 'native_modules',
            },
        },
    },
    {
        test:    /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use:     {
            loader:  'ts-loader',
            options: {
                transpileOnly: true,
            },
        },
    },
    {
        test: /\.ttf$/,
        use:  ['file-loader'],
    },
];
