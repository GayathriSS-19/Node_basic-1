const express=require('express')
const mongoose=require('mongoose')
const url="mongodb://localhost/studentDB"

const app=express()
mongoose.connect(url)                            //connecting database 
const con=mongoose.connection        //taking connection instance into con
con.on('open',function(){                      //on is an event handler
    console.log("Database connected")
})
app.use(express.json())

const StuRouter1=require('./routes/student.js')
app.use('/student',StuRouter1)

app.listen(9000,() =>                  //connecting server 
{
    console.log("Server connected")
})    