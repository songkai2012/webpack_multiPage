const moduleConfig = require("./baseConfig/module.config");
var utils = require('./baseConfig/utils');

moduleConfig.rules.push(
    {
        test:/\.(sass|scss)$/,
        use:['style-loader','css-loader','sass-loader']
    }
);


moduleConfig.rules.push(
    {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
    }
);

moduleConfig.rules.push(
    {
        test:/\.css$/,
        use:['style-loader','css-loader']
    }
);

moduleConfig.rules.push(
    {
        test: /\.vue$/,
        loader:'vue-loader',
        options:{
            loaders: utils.cssLoaders({
                sourceMap: true,
                extract: false
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

module.exports = moduleConfig;
