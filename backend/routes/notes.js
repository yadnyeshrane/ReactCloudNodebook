const express=require('express');
const router=express.Router();
//creating a user uisntg post
const User=require("../models/User")
router.post("/", (req,res)=>{
    obj={
a:'thomas'
    }
    console.log('body',req.body)
 const user=User(req.body)
    res.json(req.body)
 
})
module.exports=router