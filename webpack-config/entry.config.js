const path = require("path");
var pathDir = require("./path_dir");

module.exports= {
    'alert/index':path.resolve(pathDir.root,"./src/pages/alert/index.js"),
    'index/index':path.resolve(pathDir.root,"./src/pages/index/index.js"),
    'es6/index':path.resolve(pathDir.root,"./src/pages/es6/index.js"),
}