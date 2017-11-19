const express = require("express");
const config = require("./config");

module.exports={
  app:function () {
      let app = express();

      if(process.env.NODE_ENV!=='server'){
          app.use(express.static(config.staticPath));
      }

      return app;
  }
};