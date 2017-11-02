const pluginsConfig = require('./baseConfig/webpack.plugs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

pluginsConfig.push(new ExtractTextPlugin((`[name]/test.[contenthash:8].css`)));
pluginsConfig.push(new ExtractTextPlugin((`./././dll.js`)));

module.exports = pluginsConfig;