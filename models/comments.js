const mongoose = require("mongoose");
const model = mongoose.model;
const comments= require("../schemas/comments");
const   commentModel = model("users", users);
module.exports=commentModel