const path = require("path");
const pathDir = require("./path_dir");
const pagesArr = require("./pagesArr");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require("webpack");

var pagesArrTemp = pagesArr.filter(function () {
    return true
});
pagesArrTemp.push('webpack-runtime');

let cleanOption = {
    root:pathDir.root,
    verbose:true,
    dry:true,
    watch:false
};
let plugsConf = [
/*    new webpack.DllReferencePlugin({
        manifest:require(path.resolve(pathDir.dll,'./manifest.json')),
        context:pathDir.root
    }),
     new AddAssetHtmlPlugin({
        filepath: path.resolve(pathDir.dll,'.*.dll.js'),
    }),*/
    //new CleanWebpackConfig(['./dist'],cleanOption),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        chunks:['vendor'],
        filename:'dll.[chunkhash:8].js',
        minChunks:Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'commons',
        chunks:pagesArrTemp,
        filename:'[name].[chunkhash:8].js',
        minChunks:2
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'webpack-runtime',
        filename: 'webpack-runtime.[hash:8].js',
    }),
    //new webpack.optimize.CommonsChunkPlugin('manifest',['common','runtime']),
];

pagesArr.forEach((page)=>{
/*    new AddAssetHtmlPlugin({
        filepath:path.resolve(pathDir.pagesDir,page),
        filepath: path.resolve(pathDir.dll,'.*.dll.js'),
    });*/

    const htmlPage = new HtmlWebpackPlugin({
        filename:`${page}/index.html`,
        template:path.resolve(pathDir.pagesDir,`./${page}/page.html`),
        inject:'body',
        hash:true,
        chunks:['webpack-runtime',page,'commons','vendor'],
/*        chunksSortMode: function (chunk1, chunk2) {
            var order = ['webpack-runtime', page, 'commons'];
            var order1 = order.indexOf(chunk1.names[0]);
            var order2 = order.indexOf(chunk2.names[0]);
            return order1 - order2;
        }*/
    });
    plugsConf.push(htmlPage);
    //plugsConf.push(a);
});

module.exports = plugsConf;
/*
module.exports= [
    new HtmlWebpackPlugin({
        title:'hello webpack',
        filename:'alert/index.html',
        template:'./src/pages/alert/page.html',
        inject:'body',
        hash:true,

    }),
    new HtmlWebpackPlugin({
        title:'hello webpack',
        filename:'index/index.html',
        template:'./src/pages/index/page.html',
        inject:'body',
        hash:true,

    }),

]*/
