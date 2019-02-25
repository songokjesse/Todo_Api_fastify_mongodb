const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

// Define schema
const Schema = mongoose.Schema;

const  UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password:{
        type: String,
        trim: true,
        required: true
    }
})

//password hashing
UserSchema.pre('save', (next)=> {
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
})

module.exports = mongoose('User', UserSchema)
