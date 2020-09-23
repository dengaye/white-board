const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const DEV = process.env.NODE_ENV === 'development';
const SplitConfig = DEV ? require('./scripts/dev.config') : require('./scripts/prod.config');

const miniCssLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        hmr: DEV,
    },
};

module.exports = {
    entry: './src/index.tsx',
    output: {
        ...SplitConfig.output,
        path: path.resolve(__dirname, 'dist'),
    },
    mode: SplitConfig.mode,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        publicPath: '/',
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|d.ts)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            transpileOnly: false,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx|mjs)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    'thread-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: path.resolve(__dirname, './.cache/.babel'),
                            cacheCompression: false,
                            compact: false,
                            configFile: path.resolve(__dirname, '.babelrc'),
                        },
                    },
                ],
                exclude: /node_modules/
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
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
        ],
        plugins: [
            new TsConfigPathsPlugin({
                configFile: path.resolve(__dirname, './tsconfig.json'),
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
                logLevel: 'INFO',
                baseUrl: path.resolve(__dirname, '.'),
                mainFields: ['browser', 'main'],
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        ...SplitConfig.plugins,
    ]
}