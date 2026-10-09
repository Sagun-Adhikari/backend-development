const mongoose= require('mongoose')


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db conencted successfully");
        
        


    }catch(err){
        console.log("db conenction failed",err);
        
    }
}

module.exports=connectDB;