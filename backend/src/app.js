//to create server
const express=require('express')
const app=express()

app.use(express.json())
const notes=[]

// create the api
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.status(201).json({
        message:"note created successfully"
    })

    
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetch successfully",
        notes:notes
    })

})

//delete notes
//here : means after the : portion will be dynamic
app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index;
    //above line gives the index no
    delete notes[ index ]
    res.status(200).json({
        message: "note deleted sucessfully"
    })
})

//update notes
const index=req.params.index
const description=req.body.description

notes[ index ].description=description
res.status(200).json({
    message:"note updated sucessfully"
})



module.exports=app