const fs = require("fs");
const rimraf = require("rimraf");

const buildPath = require("../webpack-config/path_dir");
console.log(buildPath.output)
rimraf(buildPath.output,fs,()=>{
   console.log("dist目录已经清空了")
});