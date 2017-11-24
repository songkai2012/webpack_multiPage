const path = require("path");
const pathDir = require("../paramsConfig/path_dir");
const pagesArr = require("../paramsConfig/pagesArr");

module.exports= {
    path:pathDir.output,
    filename:'[name]/index.[hash:8].js',
    publicPath:process.env.NODE_ENV=='env'?"http://localhost:8080/":pathDir.publicPath
};