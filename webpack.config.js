const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js',
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        historyApiFallback: true,
        client: {
            overlay: false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new ESLintPlugin({
            extensions: ['.js', '.tsx', '.ts']
        })
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['.js', '.tsx', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.module.scss$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]--[hash:base64:5]"
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            additionalData: "@import './src/styles/style.scss';",
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    },
};