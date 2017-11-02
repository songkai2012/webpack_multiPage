const path = require("path");
const pagesArr = require("../paramsConfig/pagesArr");
const pathDir = require("../paramsConfig/path_dir");
var pagesDir = {};


pagesArr.forEach((page) => {
    console.log(page)
    pagesDir[page] = path.resolve(pathDir.pagesDir, page + '/index');
});

module.exports = pagesDir;
