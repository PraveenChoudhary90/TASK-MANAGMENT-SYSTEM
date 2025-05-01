const mongoose = require ("mongoose");
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    designation:String,
    number:Number,
    password:String
}) 

module.exports = mongoose.model("user", UserSchema);