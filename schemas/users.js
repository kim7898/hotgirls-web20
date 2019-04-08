const mongoose = require("mongoose");
const schema = mongoose.Schema;
const users = new schema({
    account: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    name: {type: String, require: true},
    location: {type: String},
    gender: {type: String, require:true},
    dob: {type: Date, require: true}
    

})
module.exports = users;
