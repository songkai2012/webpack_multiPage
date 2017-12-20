//var eslintFormatter = require('eslint-friendly-formatter');
var pathDir = require('../paramsConfig/path_dir');

module.exports = {
    noParse: /jquery|lodash/,
    rules: [
        {
            test:'/\.js$/',
            include:pathDir.src,
            exclude: /node_modules/,
            use:[
                {
                    loader:'babel-loader',
                    query:{
                        presets:['env']
                    }
        /*            options:{
                        cacheDirectory: true,
                        plugins: ['transform-runtime'],
                    }*/
                },
   /*             {
                    loader:'eslint-loader',
                    options:{
                        formatter: eslintFormatter,
                        fix: true,
                    }

                }*/
            ]
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
        },
        {
            test: /\.(png|jpg|gif)$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        limit: 8192,
                        name: './static/_img/[hash].[ext]',
                    }
                }
            ]
        },
        {
            test: /\.(eot|woff|woff2|ttf)([\\?]?.*)$/,
            loader: "file-loader?name=[name].[base64:7].[ext]"
        }
    ]
};