const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const path = require('path');

const config = {
  entry: 'path.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '',
  },
  modules: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

module.exports = config;
