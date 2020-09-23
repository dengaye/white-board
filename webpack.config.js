const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEV = process.env.NODE_ENV === 'development';
const SplitConfig = DEV ? require('./scripts/dev.config') : require('./scripts/prod.config');

const miniCssLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        hmr: DEV,
    },
};

module.exports = {
    entry: './src/index.js',
    output: {
        ...SplitConfig.output,
        path: path.resolve(__dirname, 'dist'),
    },
    mode: SplitConfig.mode,
    devtool: SplitConfig.devtool,
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(tsx?|d.ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    miniCssLoader,
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        publicPath: '/',
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        ...SplitConfig.plugins,
    ]
}