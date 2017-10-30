const pathDir = require("./path_dir");
const CleanWebpackConfig = require("clean-webpack-plugin");

let pathToClean = ['dist'];
let cleanOption = {
    root:pathDir.root,
    verbose:true,
    dry:true,
    watch:false
};

module.exports= [
    new CleanWebpackConfig(pathToClean,cleanOption),
]