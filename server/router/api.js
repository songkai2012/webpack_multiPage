const express = require("express");
const bodyParser = require("body-parser");
const conf = require("../pro_conf");
const cookieParse = require("cookie-parser");
const sessioParser = require("express-session")
var  router = express.Router();


router.use(sessioParser({
    "secret":"BLOG"
}));
router.use(cookieParse())
router.use(bodyParser.raw());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));



router.post("/admin/adminLogin",function (req,res) {
   // console.log(req.cookie.userName)
    console.log(req.body)
    console.log(req.cookie)
    console.log(req.body.userName)
    req.session.user = {
        name:"test",
        pass:"test"
    }
    try {
        if(req.body.userName == conf.admin.name && req.body.userPwd == conf.admin.pwd){
            res.cookie('userName',req.body.userName,{
                expires:new Date(Date.now()+1000*60*60*24),
                httpOnly:true,
            })
            res.send({
                success:true,
                code:0,
                msg:"登录成功",
            });
        }else{
            res.send({
                success:false,
                code:0,
                msg:"登录失败",
            });
        }
    }catch(e){
        res.send({
            success:false,
            code:1,
            msg:e
        })
    }
});
module.exports = router;