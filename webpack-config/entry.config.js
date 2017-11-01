const path = require("path");
const pagesArr = require("./pagesArr");
const pathDir = require("./path_dir");
var pagesDir = {};


pagesArr.forEach((page) => {
    console.log(page)
    pagesDir[page] = path.resolve(pathDir.pagesDir, page + '/index');
});
/*var dll = ['jquery','vue'];
dll.forEach((page) => {
    console.log(page)
    pagesDir[page] = page;
});*/
//pagesDir.jquery = 'jquery';
//pagesDir.vendor = ['jquery','vue'];
console.log(pagesDir);
module.exports = pagesDir;
