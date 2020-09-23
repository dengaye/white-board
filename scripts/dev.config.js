const webpack = require('webpack');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');

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
    new MiniCssExtactPlugin({
      fileName: '[name].css',
      chunkFilename: '[name].css',
      ignoreOrder: false,
    })
  ]
}