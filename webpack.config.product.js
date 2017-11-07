/**
 * Created by Administrator on 2017/10/12.
 */
require("./npm-cmd/build-before");

module.exports={
    entry:require("./webpack-config/entryAttrDll.config"),
    output:require("./webpack-config/baseConfig/output.config"),
    module:require("./webpack-config/module.config.product"),
    resolve:require('./webpack-config/baseConfig/resolve.config'),
    plugins:require("./webpack-config/webpack.plugs.product"),
};