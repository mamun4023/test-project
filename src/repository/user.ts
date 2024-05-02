
const userModel = require('../models/user')
const mongoose = require('mongoose');


exports.createUser = async(data)=>{
    return  await userModel.create(data)
}


exports.findUser = async(email : string)=>{
    return  await userModel.findOne({email})
}