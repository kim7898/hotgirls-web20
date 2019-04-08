const mongoose = require("mongoose");
const model = mongoose.model;
const users= require("../schemas/users");
const   userModel = model("users", users);
module.exports=userModel