const express = require('express')
const authRoutes=require("./routes/auth.route")
const cookieParser=require('cookie-parser')

app= express()
app.use(express.json())
app.use(cookieParser);//to save data in cookie

app.use("/api/auth",authRoutes)

module.exports=app;
