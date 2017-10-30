/**
 * Created by Administrator on 2017/10/12.
 */
module.exports={
    entry:require("./webpack-config/entry.config"),
    output:require("./webpack-config/output.config"),
    module:require("./webpack-config/module.config"),
    resolve:require('./webpack-config/resolve.config'),
    plugins:require("./webpack-config/webpack.plugs")
}