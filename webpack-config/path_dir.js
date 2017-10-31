const path = require("path");
const moduleExports = {};

moduleExports.root = path.resolve(__dirname,"../");  //项目根目录
//moduleExports.entry = require("./entry.config");   //入口文件
moduleExports.output = path.resolve(moduleExports.root,"./dist");   //输出文件
moduleExports.pagesDir = path.resolve(moduleExports.root,'./src/pages')

module.exports = moduleExports;