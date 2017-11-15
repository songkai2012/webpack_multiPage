const path = require("path");
const pagesArr = require("../paramsConfig/pagesArr");
const pathDir = require("../paramsConfig/path_dir");
var pagesDir = {};


pagesArr.forEach((page) => {
    if(process.env.NODE_ENV=='server'){
        var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

        pagesDir[page] = [path.resolve(pathDir.pagesDir, page + '/index'),hotMiddlewareScript ];
    }else{
        pagesDir[page] = [path.resolve(pathDir.pagesDir, page + '/index')];
    }
});

module.exports = pagesDir;
