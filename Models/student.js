const mongoose = require("mongoose")

const StuSchema = new mongoose.Schema(
    {
        Rollno:{type:String,required:true},
        Name:{type:String,required:true},
        Pass:{type:Boolean,required:true,default:false},
    }
)  

module.exports=mongoose.model("Student1",StuSchema)