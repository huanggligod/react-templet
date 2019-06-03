const path = require('path')
const DIST_PATH = path.resolve(__dirname, '../dist')  // 生产目录
const APP_PATH = path.resolve(__dirname, '../src')  // 源文件

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: "babel-loader",
                include: APP_PATH
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: "postcss-loader", // 自动加前缀
                        option: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 version']
                                })
                            ]
                        }
                    },
                    {loader: 'less-loader'}
                ]
            }
        ]
    }
}