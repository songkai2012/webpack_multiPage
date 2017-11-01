const webpack = require("webpack");
const pathDir = require("./path_dir");
const path = require("path");

const fs = require("fs");
const rimraf = require("rimraf");


rimraf(pathDir.dll,fs,()=>{
    console.log("dll目录已清空")
});


let vendor = [
    "jquery",
    "vue"
];

module.exports = {
    entry:{
        vendor:vendor
    },
    output:{
        path:pathDir.dll,
        filename:'[name].dll.js',
        library: '[name]_[hash]',
    },
    plugins:[
        new webpack.DllPlugin({
            path:path.resolve(pathDir.dll,'./manifest.json'),
            //path:path.resolve(__dirname,'./manifest.json'),
            context:pathDir.root,
            name:'[name]_[hash]'
        })
    ]
};