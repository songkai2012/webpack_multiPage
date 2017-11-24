const path = require("path");
const isServer = process.env.NODE_ENV=='server';

module.exports = {
    index:(req,res,next)=>{res.sendFile(path.resolve(__dirname,"../index-stats.html"))},
    home:(req,res,next)=>{resWithFile.call(res,'home')},
    test:(req,res,next)=>{resWithFile.call(res,'test')},
    org:(req,res,next)=>{resWithFile.call(res,'org')},

    adminLogin:(req,res)=>{resWithFile.call(res,"adminLogin")}
};

function resWithFile(dir) {
    if(isServer){
        this.sendFile(path.resolve(__dirname,`../views/${dir}/index.html`));
    }else{
        this.sendFile(path.resolve(__dirname,`../../src/pages/${dir}/page.html`));
    }
}