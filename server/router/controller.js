const express = require("express");
const  router = express.Router();
const route = require("./router");
const path = require("path");

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//router.get("/",route.index);
router.get("/",function (req,res) {
    res.sendFile(path.resolve(__dirname,"../index-stats.html"));
});
router.get("/home",route.home);
router.get("/test",route.test);
router.get("/org",route.org);

//管理员登录
router.get("/adminLogin",route.adminLogin);

module.exports = router;