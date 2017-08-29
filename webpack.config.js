const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        print: './src/print.js',
        app: './src/index.js',

    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'output management',
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dist']),

        new WebpackManifestPlugin()
    ]


}