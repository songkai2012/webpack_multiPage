const path = require("path");
const pathDir = require("../paramsConfig/path_dir");
const pagesArr = require("../paramsConfig/pagesArr");

module.exports= {
    path:pathDir.output,
    filename:'[name]/bundle.[hash].js',
    publicPath:'/'
}