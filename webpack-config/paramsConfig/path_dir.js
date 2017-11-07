const path = require("path");
const moduleExports = {};

moduleExports.root = path.resolve(__dirname,"../../");  //项目根目录
//moduleExports.entry = require("./entry.config");   //入口文件
moduleExports.src = path.resolve(moduleExports.root,"./src");   //项目目录
moduleExports.resource = path.resolve(moduleExports.src,"./resource");   //项目公共资源文件
moduleExports.output = path.resolve(moduleExports.root,"./dist");   //输出文件
moduleExports.pagesDir = path.resolve(moduleExports.root,'./src/pages');    //页面文件
moduleExports.dll = path.resolve(moduleExports.root,'./dll');   //dll文件（第三方库）
moduleExports.config_path = path.resolve(moduleExports.root,'./webpack-config');    //项目配置文件路径

module.exports = moduleExports;