const merge = require('webpack-merge') // 合并配置
const baseWebpackConfig = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: 'production',    // mode是webpack4新增的模式，会将process.env.NODE_ENV的值设为 production, 会启用以下plugin
    // # plugins: [
    // #     new UglifyJsPlugin(/*   */)
    // #    new webpack.DefinPlugin({"process.env.NODE_ENV": JSON.stringify("production")}),
    // #    new webpack.optimize.ModuleConcatenationPlugin(),
    // #    new webpack.NoEmitOnErrorsPlugin()
    // # ]
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: 'PresByter',
            minify: {
                removeComments: true,  // 移除html注释
                collapseWhitespace: true, // 折叠有助于文档树中文本节点的空白区域
                removeAttributeQuotes: true // 删除属性周围的引号
            }
        }),
        new CleanWebpackPlugin()
    ]
})