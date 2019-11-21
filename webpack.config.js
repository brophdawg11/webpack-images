const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    devtool: 'none',
    module: {
        rules: [{
            oneOf: [{
                resourceQuery: /http/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            }, {
                test: /\.jpg$/,
                loader: 'url-loader',
                options: {
                    limit: 15000,
                    name: 'images/[name].[ext]',
                },
            }],
        }, {
            test: /\.svg$/,
            oneOf: [{
                resourceQuery: /inline/,
                loader: 'svg-inline-loader',
            }, {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                    limit: 15000,
                    name: 'images/[name].[ext]',
                },
            }],
        }, {
            test: /\.(jpg|svg)$/,
            loader: 'image-webpack-loader',
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
};
