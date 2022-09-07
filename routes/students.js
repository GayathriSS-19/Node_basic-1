
const express=require('express')
const router=express.Router()
const Student1=require('../Models/student.js')

router.get('/',async(req,res)=> {
    try{
        const b1=await Student1.find()
        //const b1=await Student1.findById(req.params.id)
        res.json(b1)
    }
    catch(err){
        res.send('error'+err)
    }
})

router.post('/',async(req,res)=>
   {
    const b2=new Student1({
        Rollno:req.body.Rollno,
        Name:req.body.Name,
        Pass:req.body.Pass
    })
    try{
        const b3=await b2.save()
        res.json(b3)
    }  
    catch(err){
        res.send('error'+err)
    }
   })  

module.exports=router
