const path = require("path");
const pathDir = require("../paramsConfig/path_dir");
const pagesArr = require("../paramsConfig/pagesArr");

module.exports= {
    path:pathDir.output,
    filename:'[name]/index.[hash:8].js',
    publicPath:pathDir.publicPath
}