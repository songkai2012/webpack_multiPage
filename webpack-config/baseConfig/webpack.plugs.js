const path = require("path");
const pathDir = require("../paramsConfig/path_dir");
const pagesArr = require("../paramsConfig/pagesArr");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
var Visualizer = require('webpack-visualizer-plugin');

//const DashboardPlugin = require('webpack-dashboard/plugin');

let plugsConf = [
    new Visualizer({
        filename:'../index-stats.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    //new DashboardPlugin({ port: 8080 }),
    new webpack.ProvidePlugin({
        $:'jquery',
        jQuery:'jquery',
        'window.$':'jquery',
        'window.jquery':'jquery',
        vue:'vue',
        Vue:'vue',
        axios:'axios',
        "elementUI":"element-ui"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        chunks:['vendor'],
        filename:'dll.[chunkhash:8].js',
        minChunks:Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'common-chunk/css',
        chunks:pagesArr,
        filename:'common-chunk/js/common.[chunkhash:8].js',
        minChunks:2
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'webpack-runtime',
        filename: 'common-chunk/js/webpack-runtime.[hash:8].js',
    }),
];
if(process.env.NODE_ENV=='server'){
    plugsConf.push(new webpack.HotModuleReplacementPlugin());
/*    const dash = require('webpack-dashboard/plugin');
    plugsConf.push(new dash());*/
}

pagesArr.forEach((page)=>{
    if(page!=='vendor'){
        const htmlPage = new HtmlWebpackPlugin({
            filename:`${page}/index.html`,
            template:path.resolve(pathDir.pagesDir,`${page}/page.html`),
            inject:'body',
            hash:true,
            chunks:['webpack-runtime',page,'common-chunk/css','vendor'],
        });
        plugsConf.push(htmlPage);
    }
});

module.exports = plugsConf;

