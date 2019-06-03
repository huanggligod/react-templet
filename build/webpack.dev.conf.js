const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: "js/[name].js"
    },
    devtool: "cheap-eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        })
    ],
    devServer: {
        port: '8080',
        hot: true,
        open: true
    }
})