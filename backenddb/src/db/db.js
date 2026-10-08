 const mongoose= require("mongoose")
 async function connectDB() {
    await mongoose.connect("mongodb+srv://sagun:sagun@backend.tmupgom.mongodb.net/halley")
    console.log("connected to db successfully");
    
    
 }
module.exports=connectDB