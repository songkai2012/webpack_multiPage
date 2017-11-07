const path = require("path");
const pathDir = require("../paramsConfig/path_dir");
const pagesArr = require("../paramsConfig/pagesArr");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");


let plugsConf = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        $:'jquery',
        jQuery:'jquery',
        'window.$':'jquery',
        'window.jquery':'jquery',
        vue:'vue',
        Vue:'vue',
        axios:'axios'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        chunks:['vendor'],
        filename:'dll.[chunkhash:8].js',
        minChunks:Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'commons',
        chunks:pagesArr,
        filename:'[name].[chunkhash:8].js',
        minChunks:2
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'webpack-runtime',
        filename: 'webpack-runtime.[hash:8].js',
    }),
];


pagesArr.forEach((page)=>{
    const htmlPage = new HtmlWebpackPlugin({
        filename:`${page}/index.html`,
        template:path.resolve(pathDir.pagesDir,`${page}/page.html`),
        inject:'body',
        hash:true,
        chunks:['webpack-runtime',page,'commons','vendor'],
    });
    plugsConf.push(htmlPage);
});

module.exports = plugsConf;

