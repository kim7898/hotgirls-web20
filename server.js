const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const app = express();
// const userModel = require("./models/users")
app.use(bodyParser.json({extended:false }));
mongoose.connect("mongodb://localhost:27017/module2_1")
const apiRouter=require("./routers/apiRouter.js")
app.use("/api", apiRouter);

  app.listen(8080, (err) => {
    if (err) console.log(err);
    else console.log("Success Server");
  });

