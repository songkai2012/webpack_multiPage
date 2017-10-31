/**
 * Created by Administrator on 2017/10/12.
 */
require("./npm-cmd/build-before");

module.exports={
    entry:require("./webpack-config/entry.config"),
    output:require("./webpack-config/output.config"),
    module:require("./webpack-config/module.config"),
    resolve:require('./webpack-config/resolve.config'),
    plugins:require("./webpack-config/webpack.plugs"),
    devServer: {
        contentBase: './dist/',
        host: 'localhost',
        port: 9000, // 默认8080
        inline: true, // 可以监控js变化
        hot: true, // 热启动
        compress: true,
        watchContentBase: false,
    }
}