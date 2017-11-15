const moduleConfig = require("./baseConfig/module.config");
const utils = require('./baseConfig/utils');
const autoprefixer = require("autoprefixer");

moduleConfig.rules.push(generateLoader("css"));
moduleConfig.rules.push(generateLoader("scss","sass"));
moduleConfig.rules.push(generateLoader("less","less"));
moduleConfig.rules.push(generateLoader("styl","stylus"));

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
            },
        }
    }
);

module.exports = moduleConfig;


function generateLoader(exp,loader) {
    const filter = new RegExp(`\\.${exp}`);

    let loaderList = ['style-loader','css-loader',{
        loader:'postcss-loader',
        options: {
            sourceMap: true,
            plugins: () => [autoprefixer({ browsers:['last 2 versions'] })],
        },
    }];

    if(loader){
        loaderList.push(`${loader}-loader`);
    }

    return{
      test:filter,
      use:loaderList
    };
}