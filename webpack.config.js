const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    devtool: 'none',
    module: {
        rules: [],
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




// Resources
// rules: [{
//     test: /\.jpg$/,
//     loader: 'file-loader',
//        options: {
//            name: 'images/[name].[ext]',
//        },
// }, {
//     test: /\.jpg$/,
//     loader: 'url-loader',
//     options: {
//         limit: 15000,
//         name: 'images/[name].[ext]',
//     },
// }, {
//     test: /\.jpg$/,
//     oneOf: [{
//         resourceQuery: /http/,
//         use: {
//             loader: 'file-loader',
//             options: {
//                 name: 'images/[name].[ext]',
//             },
//         },
//     }, {
//         test: /\.jpg$/,
//         loader: 'url-loader',
//         options: {
//             limit: 15000,
//             name: 'images/[name].[ext]',
//         },
//     }],
// }, {
//     test: /\.svg$/,
//     loader: 'svg-url-loader',
//     options: {
//         limit: 15000,
//     },
// }, {
//     test: /\.svg$/,
//     loader: 'svg-inline-loader'
// }, {
//     test: /\.svg$/,
//     oneOf: [{
//         resourceQuery: /inline/,
//         use: {
//             loader: 'svg-inline-loader',
//         },
//     }, {
//         test: /\.svg$/,
//         loader: 'svg-url-loader',
//         options: {
//             limit: 15000,
//         },
//     }],
// }, {
//     test: /\.(jpg|svg)$/,
//     loader: 'image-webpack-loader',
// }],
