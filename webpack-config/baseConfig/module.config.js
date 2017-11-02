var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    noparse:/jquery | lodash/ ,
    rules: [
        {
            test:'/\.js$/',

        }
    ]

};