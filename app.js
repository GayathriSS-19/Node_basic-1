const express=require('express')
const mongoose=require('mongoose')
const url="mongodb://localhost/studentDB"

const app=express()
mongoose.connect(url)
const con=mongoose.connection
con.on('open',function(){
    console.log("Database connected")
})
app.use(express.json())
app.listen(9000,() =>
{
    console.log("Server connected")
})