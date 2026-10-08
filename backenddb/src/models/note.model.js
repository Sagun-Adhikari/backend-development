const mongoose = require('mongoose')
//to tell server which type of data is comming
const noteShema=new mongoose.Schema({
    title:String,
    description:String
})

//to perfrom CRUD op more effectively
const notemodel=mongoose.model("note",noteShema)

//to req by the app.js
module.exports=notemodel

