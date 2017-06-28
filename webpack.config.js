const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {main:'./app/index.ts'},
  output: {
    filename: 'js/[name]].[hash].js',
    path: path.resolve(__dirname, 'dist')
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
          loader: 'babel-loader',
          options: {
            presets: ['es2015',]
          }
        },
        {
          loader: 'ts-loader',

        },

      ]

    }]
  },
 devServer: {
    hot: true,
    // enable HMR on the server
    contentBase: path.resolve(__dirname, 'dist'),
    // match the output path
    publicPath: '/',
  
    // match the output `publicPath`
  },

  plugins:[
      new HtmlWebpackPlugin({
        
      })
    
     //new webpack.HotModuleReplacementPlugin(),

  ],


  resolve: {    
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map'
};