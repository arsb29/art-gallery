const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
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
        extensions: ['.js', '.tsx', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
};