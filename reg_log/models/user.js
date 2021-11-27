const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    password:{
        type: String
    }    
}, {timestamps: true});

const User = mongoose.model('Usuario', userSchema); // "Usuario" is name of collection tan mongo convert in "usuarios" (plural)

module.exports = User