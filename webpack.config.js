const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: '[name].bould.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style.loader',
                    'css.loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file.loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        // hot: true,
        port: 9000,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello World'
        })
    ]
}