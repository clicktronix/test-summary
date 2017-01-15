'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './frontend/styles/main.styl'
    },
    output: {
        path: "./public",
        filename: "[name].js"
    },

    module: {
        loaders: [{
            test: /\.pug$/,
            loader: "pug"
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('css!stylus?resolve url')
        }, {
            test: /\.(svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=./src/fonts/[name].[ext]'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=./src/img/[name].[ext]'
        }]
    },

    devServer: {
        host: 'localhost',
        port: 8080
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './frontend/index.pug'
        }),
        new ExtractTextPlugin('[name].css', {allChunks: true}),
    ]
};