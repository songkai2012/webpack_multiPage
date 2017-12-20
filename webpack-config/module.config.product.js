const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseModuleConfig = require("./baseConfig/module.config");
const utils = require('./baseConfig/utils');
const autoprefixer = require("autoprefixer");
const idEnv =  process.env.NODE_ENV == 'env';

baseModuleConfig.rules.push(
    {
        test:/\.less$/,
        use:ExtractTextPlugin.extract(generateLoaders("less"))
    }
);

baseModuleConfig.rules.push(
    {
        test:/\.styl$/,
        use:ExtractTextPlugin.extract(generateLoaders("stylus"))
    }
);

baseModuleConfig.rules.push(
    {
        test:/\.(sass|scss)$/,
        use:ExtractTextPlugin.extract(generateLoaders("sass")),
    }
);

baseModuleConfig.rules.push(
    {
        test: /\.css$/,
        exclude: /bootstrap/,
        //loader: ExtractTextPlugin.extract('css?minimize&-autoprefixer!postcss'),
        use: ExtractTextPlugin.extract(generateLoaders()),
    }
);

baseModuleConfig.rules.push(
    {
        test: /\.vue$/,
        loader:'vue-loader',
        options:{
            loaders: utils.cssLoaders({
                sourceMap: true,
                extract: true
            }),
            transformToRequire: {
                video: 'src',
                source: 'src',
                img: 'src',
                image: 'xlink:href'
            }
        }
    }
);

module.exports = baseModuleConfig;

function generateLoaders(loader) {
    let loaderList = [
        {
            loader: 'css-loader',
            options: {
                minimize: true,
                '-autoprefixer': true,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: idEnv,
                plugins: () => [autoprefixer({ browsers:['last 2 versions'] })],
            },
        },
    ];

    if(loader){
        loaderList.push(`${loader}-loader`);
    }

    return loaderList;
}