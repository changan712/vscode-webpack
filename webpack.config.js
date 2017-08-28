const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: { main: './app/index.ts' },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: [

        {
          loader: 'ts-loader',
        },
      ]

    }, {
      test: /.less$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "less-loader" // compiles Less to CSS
      }]

    }]
  },
  devServer: {
    open: true,
    hot:true,
    // enable HMR on the server
    contentBase: path.resolve(__dirname, 'dist'),
    // match the output path   
    inline: true,
    publicPath:'/',
    // match the output `publicPath`
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),


    new webpack.HotModuleReplacementPlugin(),

  ],


  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map'
};