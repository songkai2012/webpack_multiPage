module.exports = {
    contentBase: './',
    host: 'localhost',
    port: 8080, // 默认8080
    inline: true, // 可以监控js变化
    hot: true, // 热启动
    compress: true,
    watchContentBase: false,
    proxy:{
        "/":{
            target:"http://www.baidu.com/",
            changeOrigin:true,
            "header":{
                "host":"www.baidu.com",
                "origin":'http://www.baidu.com/',
            }
        }
    }
};