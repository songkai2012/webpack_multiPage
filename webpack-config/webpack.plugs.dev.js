const pluginsConfig = require('./baseConfig/webpack.plugs');
const pathDir = require("./paramsConfig/path_dir");
const CleanWebpackConfig = require('clean-webpack-plugin');

let cleanOption = {
    root:pathDir.root,
    verbose:true,
    dry:true,
    watch:false
};
pluginsConfig.push(new CleanWebpackConfig(['./dist'],cleanOption));

//将第三方库以Dll方式打包注入 目前只有单页方案AddAssetHtmlPlugin
/*    new webpack.DllReferencePlugin({
        manifest:require(path.resolve(pathDir.dll,'./manifest.json')),
        context:pathDir.root
    }),
     new AddAssetHtmlPlugin({
        filepath: path.resolve(pathDir.dll,'.*.dll.js'),
    }),*/



module.exports = pluginsConfig;