module.exports = {
    contentBase: './',
    host: 'localhost',
    port: 8001, // 默认8080
    inline: true, // 可以监控js变化
    hot: true, // 热启动
    compress: true,
    watchContentBase: false,
/*   proxy:{
        "/":{
            target:"http://192.168.102.1:8080",
            changeOrigin:true,
            "header":{
                "host":"192.168.102.1:8080",
               // "origin":'http://www.baidu.com/',
            }
        }
    }*/
};