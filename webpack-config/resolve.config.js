/**
 * Created by Administrator on 2017/10/13.
 */
const path = require("path");
const pathDir = require("./path_dir");

module.exports={
    alias:{
        lib:path.resolve(pathDir.root,"./src/lib"),
        root:pathDir.root
    }
}

