const path = require("path");
const entry = require("./entry.config");
entry.vendor = ["jquery",'vue'];

module.exports = entry;