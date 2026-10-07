const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    }
    // username and passport are automatically create by passport
});

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", UserSchema);//is automatically implement hashing username salting 
module.exports = User;