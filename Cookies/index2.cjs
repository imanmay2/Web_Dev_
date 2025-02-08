const express=require("express");
const app=express();
let port=3030;

app.listen(port,()=>{
    console.log("App is listening to ",port);
});

app.get("/sendcookies",(req,res)=>{
    res.cookie("logged","in");
    res.send("cookies sent");
});


const cookieParser=require("cookie-parser");
app.use(cookieParser());

app.get("/log",(req,res)=>{
    let {logged}=req.cookies;
    console.dir(logged);
    if(logged!="in"){
        res.send("User is not logged in");
    } else{
        res.send("User is logged in");
    }
});