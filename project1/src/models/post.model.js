const mongoose= require('mongoose')

const postSchema = new mongoose.Schema({
    image:String,
    caption:String
})
//here post is saying thwat we are going to store info about post,
//after sometime we will store user data also
const postModel=mongoose.model("post",postSchema)

module.exports=postModel;