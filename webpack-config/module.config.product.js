const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseModuleConfig = require("./baseConfig/module.config");
const utils = require('./baseConfig/utils');
const autoprefixer = require("autoprefixer");

baseModuleConfig.rules.push(
    {
        test:/\.less$/,
        use:ExtractTextPlugin.extract([
            {
                loader:'css-loader',
                options: {
                    minimize: true,
                    '-autoprefixer': true,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    plugins: () => [autoprefixer({ browsers:['last 2 versions'] })],
                },
            },
            {
                loader:'less-loader'
            }
        ])
    }
);

baseModuleConfig.rules.push(
    {
        test:/\.(sass|scss)$/,
        use:ExtractTextPlugin.extract([
            {
                loader:'css-loader',
                options: {
                    minimize: true,
                    '-autoprefixer': true,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    plugins: () => [autoprefixer({ browsers:['last 2 versions'] })],
                },
            },
            {
                loader:'sass-loader'
            }
        ]),
    }
);

baseModuleConfig.rules.push(
    {
        test: /\.css$/,
        exclude: /node_modules|bootstrap/,
        // loader: ExtractTextPlugin.extract('css?minimize&-autoprefixer!postcss'),
        use: ExtractTextPlugin.extract([
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
                     sourceMap: true,
                     plugins: () => [autoprefixer({ browsers:['last 2 versions'] })],
                 },
             },
        ]),
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
