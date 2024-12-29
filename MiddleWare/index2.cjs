const express=require("express");
const ExpressError = require("./ExpressError");
const app=express();
const port=8080;


app.listen(port,(req,res)=>{
    console.log("App is listening to : ",port);
});


const checkToken=(req,res,next)=>{
    let {query}=req.query;
    if(query==="giveaccess"){
        next();
    }

    throw new ExpressError(401,"INVALID ACCESS");

};


app.use((err,req,res,next)=>{
    console.log("_______ERROR______");
    let {status,message}=err;
    res.status(status);
    res.send(message);
});


app.get("/api",checkToken,(req,res)=>{
    res.send("HERE IS YOUR DATA ! ");
});