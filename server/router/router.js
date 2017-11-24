const path = require("path");

module.exports = {
    index:(req,res,next)=>{res.sendFile(path.resolve(__dirname,"../index-stats.html"))},
    home:(req,res,next)=>{resWithFile.call(res,'home')},
    test:(req,res,next)=>{resWithFile.call(res,'test')},
    org:(req,res,next)=>{resWithFile.call(res,'org')},
};

function resWithFile(dir) {
    this.sendFile(path.resolve(__dirname,`../views/${dir}/index.html`));
}