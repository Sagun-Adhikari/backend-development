const express= require('express')

//req from note.model.js
const notemodel=require("./models/note.model")

const app=express()
app.use(express.json());



app.post("/notes",async(req,res)=>{
    //data is came into data var from user 
    const data=req.body; //{title:xxxx, description:xxx}
    // now we nned to store it db using above note mdoel
    await notemodel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message:"note created"
    })

})

//here find() used to find all notes
app.get("/notes",async(req,res)=>{
const notes= await notemodel.find() //to get all notes in db and it always  returns array
  res.status(200).json({
    message:"notes fetched",
    notes:notes
  })
})


//you can use condition in find also it will return all matching results

//now findone() is used rto find only one notes
//it return a object , not array
// app.get("/notes",async(req,res)=>{
//     const notes=await notemodel.findOne({//find one by applu condition
//         title:"sagun adhikari" //only find notes which have title:Sagun 
//     })
//   res.status(200).json({
//     message:"notes fetched",
//     notes:notes
//   })
// })


//api delete
//we use id for this
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;

    await notemodel.findOneAndDelete({
        _id: id
    });

    res.status(200).json({
        message: "note deleted"
    });
});



//update
app.patch("/notes/:id", async (req, res)=>{
const id=req.params.id;
const description=req.body.description;
//findOneAndUpdate({id to be find}{data to be updated})
 await notemodel.findOneAndUpdate({_id:id},{description:description})
    res.status(200).json({
        message: "note updated successfully"
    });

})
   //in postman we send id in url and description in request





module.exports =app