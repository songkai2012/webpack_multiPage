var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    noParse: /jquery|lodash/,
    rules: [
        {
            test:'/\.js$/',
            loader:'babel-loader'
        },
/*        {
            test:/\.less/,
            use:['style-loader','css-loader','less-loader']
        },*/
/*        {
            test:/\.less/,
            use:[
                {
                    loader:'style-loader'
                },
                {
                    loader:'css-loader'
                },
                {
                    loader:'less-loader'
                },
            ]
        }*/
    ]

};