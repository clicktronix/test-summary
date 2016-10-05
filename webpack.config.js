'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './frontend/css/main.styl',
        fonts: './frontend/css/fonts.styl'
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
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './frontend/index.pug'
        }),
        new ExtractTextPlugin('./frontend/css/[name].css', {allChunks: true}),
    ]
};