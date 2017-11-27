const express = require("express");
const bodyParse = require("body-parser");
const cookieParse = require("cookie-parser");

var  router = express.Router();

// 创建 application/json 解析
var jsonParser = bodyParse.json()

// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyParse.urlencoded({ extended: false })

router.post("/admin/adminLogin",jsonParser,function (req,res) {
   const userMess = bodyParse(req.body);
   console.log(JSON.stringify(userMess))
   console.log(req.body)

    res.send("success")
});
module.exports = router;