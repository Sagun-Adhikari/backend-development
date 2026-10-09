const express= require("express")
const cookieParser=require('cookie-parser')
const authRoutes= require('./routes/auth.route')

app= express();
app.use(express.json())//to get data into request.body
app.use(cookieParser)// to store data in cookie

app.use('api/auth',authRoutes)

module.exports=app;