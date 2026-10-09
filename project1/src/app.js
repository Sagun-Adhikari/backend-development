//to create and manage server
const express=require('express')
const multer=require('multer')
const upload=multer({storage:multer.memoryStorage() })

const app = express()
app.use(express.json()); //it is only workk in in text, for images 
//we need multer middleware which can be install using npm i multer

app.post('/create-post',upload.single("image"), async(req,res)=>{
    console.log(req.body);
    console.log(req.file);// to get file info
    

})



module.exports=app;