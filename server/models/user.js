const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const config = require('./../config/config.js').get(process.env.NODE_ENV);
const SALT_I = 10;

const userSchema = mongoose.Schema({
    username: {
        type:String,
        require:true,
        unique:1,
        maxlength:100
    },
    firstname: {
        type:String,
        require:true,
        trim:true
    },
    lastname: {
        type:String,
        require:true,
        trim:true
    },
    email: {
        type:String,
        require:true,
        trim:true,
        unique:1
    },
    password: {
        type:String,
        require:true,
        minlength:100
    },
    role:{
        type:Number,
        default:2
    },
    token:{
        type:String,
        require:true
    }
});

const user = mongoose.model('User',userSchema);

module.exports = {User};