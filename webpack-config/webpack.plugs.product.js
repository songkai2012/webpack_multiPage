const pluginsConfig = require('./baseConfig/webpack.plugs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const cssMin = require("optimize-css-assets-webpack-plugin");
const jsMini = require("uglifyjs-webpack-plugin");

pluginsConfig.push(new jsMini());
pluginsConfig.push(new cssMin());
pluginsConfig.push(new ExtractTextPlugin((`[name]/index.[contenthash:8].css`)));
pluginsConfig.push(new webpack.HashedModuleIdsPlugin());
pluginsConfig.push(new webpack.DefinePlugin({
    IS_PRODUCTION: true,
}));
module.exports = pluginsConfig;