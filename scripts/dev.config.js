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
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 9000,
    sockHost: process.env.SOCK_HOST || '0.0.0.0',
    sockPort: process.env.SOCK_PORT || 9000,
    disableHostCheck: true,
    historyApiFallback: true,
    liveReload: true,
    hot: true,
    writeToDisk: true,
    publicPath: '/',
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
  },
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
