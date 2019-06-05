'use strict'

const path = require('path')
const DIST_PATH = path.resolve(__dirname, '../dist')  // 生产目录
const APP_PATH = path.resolve(__dirname, '../src')  // 源文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: DIST_PATH
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            // chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[contenthash].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: "babel-loader",
                include: APP_PATH
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader},
                    {loader: "css-loader"},
                    {
                        loader: "postcss-loader", // 自动加前缀
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 version']
                                })
                            ]
                        }
                    },
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    optimization: {
        splitChunks: {
            
        }
    }
}