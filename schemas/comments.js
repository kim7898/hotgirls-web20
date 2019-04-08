const mongoose = require("mongoose");
const schema = mongoose.Schema;
const comments = new schema({
    imageId : {type: mongoose.Types.ObjectId, require: false, ref : "Image"},
    userId: {type: mongoose.Types.ObjectId, require: false, ref : "User"},
    comment: {type:String, require: true}
}, {
    timestamps: true
})


module.exports = comments;