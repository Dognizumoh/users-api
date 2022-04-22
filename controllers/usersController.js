const User =require("../models/userSchema")
const bcrypt = require("bcrypt")
const validate = require("../config/validator")
const userhandler = require("../handlers/user.handler")


//get all users
const getUsers=(req, res)=>{
    try{
        let allusers = await. User.find({});
        res.status(200).json({success:true, body:allusers});
    }catch(error){
        res.status(500).json({success:false, body:error});
    }
    
}

//create a user
const createUser =async(req, res)=>{
    try{
    //hashing password with bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    //validating a user
    const valid = await validate({username,email,password})

    if(valid){

   const newUser= new User({
       username:req.body.username,
       email:req.body.email,
       password:hashedPassword
   });
   await newUser.save();
   res.status(201).json({
       id:newUser._id,
       username:newUser.username,
       email:newUser.email

   })
}else{
    res.status(400).json({
        message:"Invalid data"
    });
}}catch(error){
    let message = errorData(error)
}
}


//get user by the id
const getUser = async(req, res)=>{
    try{
    const userId = req.params.id;
    const user = await User.findById(userId)

    res.status(200).json({success:true, data:user});
} catch (error){
        return res.status(400).json({success:false, body:"error"});
}
    }
    

module.exports ={getUsers, createUser, getUser}













module.export = {getUsers}