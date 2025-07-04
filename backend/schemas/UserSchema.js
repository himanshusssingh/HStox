const { required, number, boolean } = require("joi");
const {Schema} = require("mongoose");

// const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = {UserSchema};