const glob = require("glob");
const pathDir = require("./path_dir");

const option = {
    cwd:pathDir.pagesDir,
    sync:true
};

const pathArr =new glob.Glob("!(_)*/!(_)*",option);

module.exports = pathArr.found;