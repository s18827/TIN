const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const path = require('path');

const config = {
  //   entry: 'path.js',
  //   output: {
  //     path: path.resolve(__dirname, 'dist'),
  //     filename: '',
  //   },
  module: {
    rules: [
      { test: /\.html$/, loader: 'html-loader', options: { minimize: true } },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = config;
