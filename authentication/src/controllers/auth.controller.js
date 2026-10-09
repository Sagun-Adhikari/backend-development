const userModel=require('../models/user.model')
const jwt=require('jsonwebtoken')

async function registerUser(req,res){
    const{username,email,password}=req.body;
    //following func checkuser  already exist or on basis of email 
    const isUserAlreadyExists =await userModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"user already exist"
        })
    }




    const user=await userModel.create({//user database is created
        username,email,password
    })

    //lets create the token
    const token=jwt.sign({
        id: user._id,
        //here jwt secret is reced by website jwtsecret and generate random value
    },process.env.JWT_SECRET)
    res.cookie("token",token)   
    res.status(201).json({
        //it return the response with message, userdetail and token
        message:"user register successfully",
        user,

    })
}

module.exports={registerUser}