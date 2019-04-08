const mongoose = require("mongoose");
const schema = mongoose.Schema;
const images = new schema({
  link:{type:String , required:true},
  view:{type:Number , default:0 },
  postDate:{type:Date },
  like:{type:Number ,  default : 0 },
  description:String,
  title:{type:String , required: true} ,
  author:{type:mongoose.Types.ObjectId, required:true , ref:"user"},
},
  {
    timestamps:true


})
module.exports = images;
