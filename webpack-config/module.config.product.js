const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseModuleConfig = require("./baseConfig/module.config");

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
                loader:'less-loader'
            }
        ])
    }
);

baseModuleConfig.rules.push(
    {
        test:/\.sass$/,
        use:ExtractTextPlugin.extract([
            {
                loader:'css-loader',
                options: {
                    minimize: true,
                    '-autoprefixer': true,
                },
            },
            {
                loader:'sass-loader'
            }
        ])
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
            /* {
                 loader: 'postcss-loader',
             },*/
        ]),
    }
);
module.exports = baseModuleConfig;
