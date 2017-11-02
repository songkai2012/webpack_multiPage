/**
 * Created by Administrator on 2017/10/12.
 */
require("./npm-cmd/build-before");

module.exports={
    entry:require("./webpack-config/entryAttrDll.config"),
    output:require("./webpack-config/baseConfig/output.config"),
    module:require("./webpack-config/baseConfig/module.config"),
    resolve:require('./webpack-config/baseConfig/resolve.config'),
    plugins:require("./webpack-config/webpack.plugs.product"),
    //devtool:'cheap-module-source-map',
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 9000, // 默认8080
        inline: true, // 可以监控js变化
        hot: true, // 热启动
        compress: true,
        watchContentBase: false,
    }
}