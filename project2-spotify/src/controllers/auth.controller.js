const userModel= require('../models/user.model')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')


async function registerUser(req,res){
    const {username,email,password,role="user"}=req.body;

    const isUserAlreayExist=await userModel.findOne({
        //username,email cannot write bcz it will check both at a time so we use or operator
        $or:[
            {username},
            {email}
        ]
    })
    if(isUserAlreayExist){
        return res.status(409).json({
            message:"user already exist"
        })
    }
    //lets hash the password
    const hash=await bcrypt.hash(password,10)//10 means  salt ienused by algorithm
    const user=await userModel.create({
        username,
        email,
        password:hash,
        role
    })
    const token=jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    res.status(201).json({
        message:"user registration successfull",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role

        }
    })

}

module.exports={registerUser}