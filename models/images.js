const mongoose = require("mongoose");
const model = mongoose.model;
const images = require("../schemas/images");
const   imageModel = model("images", images);
module.exports=imageModel