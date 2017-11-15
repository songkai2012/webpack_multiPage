/**
 * Created by Administrator on 2017/10/13.
 */
const path = require("path");
const pathDir = require("../paramsConfig/path_dir");

module.exports={
    alias:{
        lib:path.resolve(pathDir.root,"./src/lib"),
        root:pathDir.root,
        'resource':pathDir.resource,
        'resourceDirTest':pathDir.resourceTest,
        vue:'vue/dist/vue.common.js'
    },
    extensions: ['.js', '.css', '.less','.vue'],
};

