const pluginsConfig = require('./baseConfig/webpack.plugs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

pluginsConfig.push(new ExtractTextPlugin((`index/[name].[contenthash:8].css`)));
pluginsConfig.push(new webpack.HashedModuleIdsPlugin());
pluginsConfig.push(new webpack.DefinePlugin({
    IS_PRODUCTION: false,
}));
module.exports = pluginsConfig;