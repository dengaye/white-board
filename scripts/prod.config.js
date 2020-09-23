const webpack = require('webpack');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    filename: '[name]-[chunkhash:8].js',
    chunkFilename: '[name]-[chunkhash:8].js',
    publicPath: process.env.PUBLIC_PATH || '/',
  },
  mode: 'production',
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name]-[chunkhash:8].css',
        chunkFilename: '[name]-[chunkhash:8].css',
        ignoreOrder: false,
    }),
  ]
}