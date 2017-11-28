module.exports = {
    contentBase: './',
    host: 'localhost',
    port: 8081, // 默认8080
    inline: true, // 可以监控js变化
    hot: true, // 热启动
    compress: true,
    watchContentBase: false,
   proxy:{
        "/":{
            target:"http://localhost:8080",
            changeOrigin:true,
            "header":{
                "host":"localhost:8080",
               // "origin":'http://www.baidu.com/',
            }
        }
    }
};