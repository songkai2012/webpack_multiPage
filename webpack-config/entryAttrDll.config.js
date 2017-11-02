const path = require("path");
const entry = require("./baseConfig/entry.config");
entry.vendor = ["jquery",'vue'];

/*
仅为dll方案不通的替补方案
将第三方库代码统一合并在vendor入口
*/
module.exports = entry;