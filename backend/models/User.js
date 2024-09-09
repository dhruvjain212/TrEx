const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    expenses:[
        {
        text:{
            type: String,
            required: true,
        },
        amount:{
            type: Number,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
        },
    }
    ]
})

const UserModel = mongoose.model('users', UserSchema); //users is the name of collection in db, in this line collection users is connected to UserSchema
module.exports = UserModel;