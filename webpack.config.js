const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: './app/index.ts',
  output: {
    filename: 'bundle.js',
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

     new webpack.HotModuleReplacementPlugin(),

  ],


  resolve: {    
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map'
};