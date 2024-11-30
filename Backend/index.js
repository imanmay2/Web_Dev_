const express=require("express");
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let port=8080;


app.listen(port,()=>{
    console.log("Server is listening to port" +port);
});


app.get("/register",(req,res)=>{
    let {username,password}=req.query;
    res.send(` You have searched -  ${username}`);
});


app.post("/register",(req,res)=>{
    let {username,password}=req.body;
    res.send("Welcome to "+username);
});