const express = require('express')
const router=express.Router()
router.use(express.urlencoded({ extended: true }));
router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/',(req,res)=>{
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
    console.log(req.body.contactNum);
    console.log(req.body.password);
    res.send("login")
})







module.exports=router;