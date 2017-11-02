/**
 * Created by Administrator on 2017/10/12.
 */
require("./page.less");
var path = require("path");
var lib = require('lib/testLib');
var jq = require("jquery");
//var mod = require(path.resolve(path));
//console.log(path)
console.log(process.execPath)
console.log(__dirname)
console.log(process.cwd())
var a=0,b=255,c=128;
/*setInterval(()=>{
    if(a>255){a=0}
    if(b<=0){b=255}
    if(c>=255){b=0}
    a+=1;
    b-=1;
    c+=1
    jq('body').css({"background":'rgb('+a+','+b+','+c+')'});
},10);*/
console.log(jq)
var d = document.getElementById("app");
var p = document.getElementById("test");

p.innerHTML = "112121111"
//var p  = document.createElement("<div>111</div>")

d.value= ("11112221");