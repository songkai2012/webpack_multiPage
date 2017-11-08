const entry = require("./baseConfig/entry.config");
//entry.vendor = ["jquery",'vue','axios'];

/*
仅为dll方案不通的替补方案
将第三方库代码统一合并在vendor入口
*/
module.exports = entry;