const mongoose = require('mongoose')
require('dotenv').config();

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connected successfully");
        
    } catch(err){
     console.log("db cannot connect",err);
        
    }
}

module.exports=connectDB;