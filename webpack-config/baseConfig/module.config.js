var eslintFormatter = require('eslint-friendly-formatter');
var pathDir = require('../paramsConfig/path_dir');

module.exports = {
    noParse: /jquery|lodash/,
    rules: [
        {
            test:'/\.js$/',
            include:pathDir.src,
            use:[
                {
                    loader:'babel-loader',
                    options:{
                        cacheDirectory: true,
                        plugins: ['transform-runtime'],
                    }
                },
                {
                    loader:'eslint-loader',
                    options:{
                        formatter: eslintFormatter,
                        fix: true,
                    }

                }
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
        }
    ]
};