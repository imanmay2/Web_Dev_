const express=require('express');

const router=express.Router();

router.use((req,res,next)=>{
    console.log("Welcome to Blog");
    next();
})


router.get("/",(req,res)=>{
    res.send("Welcome to the blogging side.");
});


router.get("/about",(req,res)=>{
    res.send("Welcome to about section of the blogging site.");
});

module.exports=router;