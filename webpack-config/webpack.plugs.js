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
    new webpack.DllReferencePlugin({
        //manifest:require(path.resolve(pathDir.root,'./dll/manifest.json')),
        manifest:path.resolve(pathDir.dll,'./manifest.json'),
        //context:pathDir.root
    }),
    //new CleanWebpackConfig(['./dist'],cleanOption),
    new webpack.HotModuleReplacementPlugin(),
    /*    new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename:'commons/common.[hash].js',
            minChunks:2
        }),
    /!*    new webpack.optimize.CommonsChunkPlugin({
            name: 'mainifest',
            chunks: ['/common/']
        }),*!/
        new webpack.optimize.CommonsChunkPlugin({
            name:"runtime",
            filename:'commons/webpack.runtime.[hash].js'
        }),
        //new webpack.optimize.CommonsChunkPlugin('manifest',['common','runtime']),*/
/*    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        filename:'[name].[hash:8].js',
        minChunks:Infinity
    }),*/

    new webpack.optimize.CommonsChunkPlugin({
        name:'commons',
        filename:'[name].[chunkhash].js',
        minChunks:2
    }),



    new webpack.optimize.CommonsChunkPlugin({
        name: 'webpack-runtime',
        filename: 'webpack-runtime.[hash].js',
    }),

];

pagesArr.forEach((page)=>{
    const htmlPage = new HtmlWebpackPlugin({
        filename:`${page}/index.html`,
        template:path.resolve(pathDir.pagesDir,`./${page}/page.html`),
        inject:'body',
        hash:true,
        chunks:['webpack-runtime',page,'commons'],
/*        chunksSortMode: function (chunk1, chunk2) {
            var order = ['webpack-runtime', page, 'commons'];
            var order1 = order.indexOf(chunk1.names[0]);
            var order2 = order.indexOf(chunk2.names[0]);
            return order1 - order2;
        }*/
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
