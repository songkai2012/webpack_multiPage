const Server = require("./server/serverModule");
const config = require("./server/config");
const router = require("./server/router/controller.js");
const bodyParse = require("body-parser");
const cookieParse = require("cookie-parser");

const app = Server.app();

if(process.env.NODE_ENV=='server'){
    const webpack = require("webpack");
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require("./webpack.config");
    //webpackConfig.plugins.push(webpackHotMiddleware);
    const compiler = webpack(webpackConfig);

    app.use(webpackHotMiddleware(compiler));
    app.use(webpackDevMiddleware(compiler,{
       noInfo:true,
        stats: {
            colors: true
        },
       publicPath:webpackConfig.output.publicPath
    }));
}else {

}
/*app.use(bodyParse.json());
app.use(bodyParse.urlencoded());*/
app.use('/',router);
app.listen(config.port);
console.log(`Listen at port ${config.port}`);