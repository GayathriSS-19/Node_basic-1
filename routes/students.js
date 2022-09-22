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

router.get('/:id',async(req,res)=>{
    try{
       const b4=await Student1.findById(req.params.id) 
       req.json(b4)
    }

    catch(err){
        res.send("Error:"+err)
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

router.patch(':/id',async(req,res)=>{
    try{
        const b5=await Student1.findById(req.params.id)
        b5.Name=req.body.Name
        const b6= await b5.save()
        req.json(b5)
    }

    catch(err){
        res.send("Error")
    }
})


module.exports=router
  