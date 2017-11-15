const pathDir = require("../webpack-config/paramsConfig/path_dir");
const path = require("path");

module.exports = {
    port:process.env.port || 8000,
    indexPage:path.resolve(__dirname,'./index.html'),
    staticPath:path.resolve(__dirname,'./views'),
};