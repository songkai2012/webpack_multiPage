const moduleConfig = require("./baseConfig/module.config");

moduleConfig.rules.push(
    {
        test:/\.sass$/,
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
module.exports = moduleConfig;
