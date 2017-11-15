const express = require("express");
const  router = express.Router();
const route = require("./router");

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get("/",route.index);
router.get("/home/",route.home);
router.get("/test/",route.test);

module.exports = router;