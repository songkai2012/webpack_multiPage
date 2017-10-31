const path = require("path");
const pathDir = require("./path_dir");
const pagesArr = require("./pagesArr");

module.exports= {
    path:pathDir.output,
    filename:'[name]/bundle.[hash].js',
    publicPath:'/'
}