const express = require("express");
const config = require("./config");
const router = require("./router/controller");

module.exports={
  app:function () {
      let app = express();

      if(process.env.NODE_ENV!=='server'){
          app.use(express.static(config.staticPath));
          app.use(router);
      }

      return app;
  }
};