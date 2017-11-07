const fs = require("fs");
const rimraf = require("rimraf");

const buildPath = require("../webpack-config/paramsConfig/path_dir");
rimraf(buildPath.output,fs,()=>{
   console.log("dist目录已清空")
});