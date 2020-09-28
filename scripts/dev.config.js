const webpack = require('webpack');
const path = require('path');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  output: {
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: process.env.PUBLIC_PATH || '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   }
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, '../stylelint.config.js'),
      context: path.resolve(__dirname, '../src', ''),
      failOnError: true,
      quiet: false,
      lintDirtyModulesOnly: true,
    }),
    new MiniCssExtactPlugin({
      fileName: '[name].css',
      chunkFilename: '[name].css',
      ignoreOrder: false,
    }),
  ],
};
