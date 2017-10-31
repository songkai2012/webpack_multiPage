const path = require("path");
const pathDir = require("./path_dir");
const CleanWebpackConfig = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const pagesArr = require("./pagesArr");

let cleanOption = {
    root:pathDir.root,
    verbose:true,
    dry:true,
    watch:false
};
let plugsConf = [
    //new CleanWebpackConfig(['./dist'],cleanOption),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'commons/common.[hash].js',
        minChunks:2
    }),
/*    new webpack.optimize.CommonsChunkPlugin({
        name: 'mainifest',
        chunks: ['/common/']
    }),*/
    new webpack.optimize.CommonsChunkPlugin({
        name:"runtime",
        filename:'commons/webpack.runtime.[hash].js'
    }),
    //new webpack.optimize.CommonsChunkPlugin('manifest',['common','runtime']),
];

pagesArr.forEach((page)=>{
    const htmlPage = new HtmlWebpackPlugin({
        filename:`${page}/index.html`,
        template:path.resolve(pathDir.pagesDir,`./${page}/page.html`),
        inject:'body',
        hash:true,
        chunks:['runtime',page,'common']
    });

    plugsConf.push(htmlPage);
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
