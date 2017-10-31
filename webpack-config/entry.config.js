const path = require("path");
const pagesArr = require("./pagesArr");
const pathDir = require("./path_dir");
var pagesDir = {};


pagesArr.forEach((page) => {
    pagesDir[page] = path.resolve(pathDir.pagesDir, page + '/index');
});
module.exports = pagesDir;
